import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import { useServices } from '../../services/ServicesProvider';
import {
  ContainerWrap,
  MainSection,
  PageContainer,
  PageLayout,
  ThemeLayout,
  PageHeader,
  PageMain,
  InputHeader,
} from '../../styles/components/layout';
import { SignForm, SignField, SignButtons } from '../../styles/components/signin';
import { BookmarksTable } from '../../styles/pages/bookmarks';
import { Pane, Text, Dialog, Strong, Button, Table, TextInput, toaster, Group } from 'evergreen-ui';
import Dropdown from '../../components/Dropdown';
import { useThemeColors } from '../../styles/theme';
import Select from '../../components/Select';

export default function TasksPage({ theme, toggleTheme }) {
  const { addTask, deleteTask, editTask, currentUser } = useServices();
  const { textColor, textMuted, background } = useThemeColors(theme);

  const [openMenu, setOpenMenu] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskProject, setTaskProject] = useState('');
  const [taskPriority, setTaskPriority] = useState('');
  const [isNewTaskDialogShown, setIsNewTaskDialogShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedProject, setSelectedProject] = useState('All projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [projects, setProjects] = useState([]);
  const [isEditTaskShown, setIsEditTaskShown] = useState({});
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const handleToggleDropdown = (id) => {
    setOpenDropdownId(id === openDropdownId ? null : id);
  };

  const [updatedTask, setUpdatedTask] = useState({
    date: '',
    name: '',
    project: '',
    priority: '',
  });

  const handleEditTaskSubmit = useCallback(
    async (task) => {
      const { date, name, project, priority } = updatedTask;

      if (
        date === task.date &&
        name === task.name &&
        project === task.project &&
        priority === task.priority
      ) {
        toaster.warning('Task is not edited');
        return;
      }

      try {
        await editTask(task.id, updatedTask);
        toaster.success('Task updated successfully');

        setIsEditTaskShown((prev) => ({
          ...prev,
          [task.id]: false,
        }));
      } catch (error) {
        console.error('Error updating task:', error);
        toaster.danger('Error updating task. Please try again.');
      }
    },
    [editTask, updatedTask, setIsEditTaskShown],
  );

  const handleShowNewTaskDialog = () => {
    setIsNewTaskDialogShown(true);
  };

  const handleAddTask = () => {
    if (!taskDate || !taskName || !taskProject || !taskPriority) {
      toaster.danger('Please fill out all fields.');
      return false;
    }

    addTask(taskDate, taskName, taskProject, taskPriority);

    setSelectedProject('All projects');

    setTaskDate('');
    setTaskName('');
    setTaskProject('');
    setTaskPriority('');

    setIsNewTaskDialogShown(false);

    return true;
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setSelectedProject('All projects');
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  useEffect(() => {
    if (currentUser && currentUser.tasks) {
      const uniqueProjects = Array.from(new Set(currentUser.tasks.map((task) => task.project)));

      setProjects(['All projects', ...uniqueProjects]);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && currentUser.tasks) {
      setIsLoading(true);
      if (selectedProject === 'All projects') {
        const filtered = currentUser.tasks.filter(
          (task) =>
            task.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.priority.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        setFilteredTasks(filtered);
      } else {
        const filtered = currentUser.tasks.filter(
          (task) =>
            task.project === selectedProject &&
            (task.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
              task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              task.priority.toLowerCase().includes(searchQuery.toLowerCase())),
        );
        setFilteredTasks(filtered);
      }

      setIsLoading(false);
    }
  }, [currentUser, selectedProject, searchQuery]);

  return (
    <>
      <Head>
        <title>Dash Directory | Tasks</title>
        <meta name='description' content='Web directory for organized minds' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        showHeaderLink={true}
        currentUser={currentUser}
      />
      <ThemeLayout>
        <MainSection>
          <ContainerWrap>
            {currentUser && (
              <>
                <PageLayout>
                  <Sidebar theme={theme} />
                  <PageContainer>
                    <PageHeader>
                      <Group>
                        <InputHeader>
                          <TextInput
                            background={background}
                            height={30}
                            disabled={isLoading}
                            placeholder='Search by title, description, category...'
                            value={searchQuery}
                            onChange={(e) => {
                              setSearchQuery(e.target.value);
                              setSelectedProject('All projects');
                            }}
                          />
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill={background}
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                            />
                          </svg>
                        </InputHeader>
                      </Group>
                      <Select
                        label='Select project'
                        options={[...projects]}
                        onSelect={(option) => {
                          setSearchQuery('');
                          setSelectedProject(option);
                        }}
                      />
                      <Pane>
                        <Dialog
                          containerProps={{ className: 'themed-modal' }}
                          isShown={isNewTaskDialogShown}
                          title='Add task'
                          onCloseComplete={() => setIsNewTaskDialogShown(false)}
                          confirmLabel='Custom Label'
                          hasFooter={false}
                          hasClose={false}
                        >
                          {({ close }) => (
                            <Pane>
                              <SignForm>
                                <SignField>
                                  <Strong color={textMuted}>Date:</Strong>
                                  <TextInput
                                    marginTop={3}
                                    background={background}
                                    fontSize={13}
                                    value={taskDate}
                                    onChange={(e) => setTaskDate(e.target.value)}
                                    name='text-input-name'
                                    placeholder='Date'
                                  />
                                </SignField>
                                <SignField>
                                  <Strong color={textMuted}>Name:</Strong>
                                  <TextInput
                                    marginTop={3}
                                    background={background}
                                    fontSize={13}
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                    name='text-input-name'
                                    placeholder='Name'
                                  />
                                </SignField>
                                <SignField>
                                  <Strong color={textMuted}>Project:</Strong>
                                  <TextInput
                                    marginTop={3}
                                    background={background}
                                    fontSize={13}
                                    value={taskProject}
                                    onChange={(e) => setTaskProject(e.target.value)}
                                    name='text-input-name'
                                    placeholder='Project name'
                                  />
                                </SignField>
                                <SignField>
                                  <Strong color={textMuted}>Priority:</Strong>
                                  <TextInput
                                    marginTop={3}
                                    background={background}
                                    fontSize={13}
                                    value={taskPriority}
                                    onChange={(e) => setTaskPriority(e.target.value)}
                                    name='text-input-name'
                                    placeholder='Priority'
                                  />
                                </SignField>
                              </SignForm>
                              <SignButtons>
                                <Button className='button-cancel' onClick={() => close()}>
                                  Cancel
                                </Button>

                                <Button
                                  className='button-add'
                                  appearance='primary'
                                  onClick={() => handleAddTask() && close()}
                                >
                                  Add Task
                                </Button>
                              </SignButtons>
                            </Pane>
                          )}
                        </Dialog>

                        <Button
                          className='custom-button-small'
                          fontWeight='bold'
                          onClick={handleShowNewTaskDialog}
                        >
                          <span>Add task</span>
                          <span>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M12 6v12m6-6H6'
                              />
                            </svg>
                          </span>
                        </Button>
                      </Pane>
                    </PageHeader>
                    <PageMain>
                      <BookmarksTable>
                        <Table className='custom-table_wrap'>
                          <Table.Head
                            className={`custom-table_head ${
                              filteredTasks.length > 10 && 'add-right-padding'
                            }`}
                            background={background}
                          >
                            <Table.TextHeaderCell className='custom-table_cell'>
                              Date
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell className='custom-table_cell'>
                              Name
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell className='custom-table_cell'>
                              Project
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell className='custom-table_cell'>
                              Priority
                            </Table.TextHeaderCell>
                          </Table.Head>
                          <Table.Body className='custom-table_body'>
                            {currentUser?.tasks &&
                              (filteredTasks.length < 1 ? (
                                <Table.Row
                                  className='custom-table_row'
                                  background={background}
                                  color={textMuted}
                                  key='no-tasks'
                                  isSelectable={false}
                                >
                                  <Table.TextCell className='custom-table_cell' textAlign='center'>
                                    <Text color={textColor} fontSize={14}>
                                      No tasks found.
                                    </Text>
                                  </Table.TextCell>
                                </Table.Row>
                              ) : (
                                filteredTasks.map((task) => (
                                  <Table.Row
                                    className='custom-table_row'
                                    background={background}
                                    color={textMuted}
                                    key={task.id}
                                    isSelectable={false}
                                  >
                                    <Table.TextCell className='custom-table_cell'>
                                      <Text color={textColor} fontSize={14}>
                                        {task.date}
                                      </Text>
                                    </Table.TextCell>
                                    <Table.TextCell className='custom-table_cell'>
                                      <Text color={textColor} fontSize={14}>
                                        {task.name}
                                      </Text>
                                    </Table.TextCell>
                                    <Table.TextCell className='custom-table_cell'>
                                      <Text color={textColor} fontSize={14}>
                                        {task.project}
                                      </Text>
                                    </Table.TextCell>
                                    <Table.TextCell className='custom-table_cell'>
                                      <Text color={textColor} fontSize={14}>
                                        {task.priority}
                                      </Text>
                                    </Table.TextCell>
                                    <span className='custom-table_menu'>
                                      <Dropdown
                                        theme={theme}
                                        isOpen={openDropdownId === task.id}
                                        onToggle={() => handleToggleDropdown(task.id)}
                                      >
                                        <button
                                          onClick={() => {
                                            setUpdatedTask({
                                              date: task.date,
                                              name: task.name,
                                              project: task.project,
                                              priority: task.priority,
                                            });

                                            setIsEditTaskShown((prev) => ({
                                              ...prev,
                                              [task.id]: true,
                                            }));
                                          }}
                                        >
                                          Edit
                                        </button>
                                        <button
                                          className='danger'
                                          onClick={() => handleDeleteTask(task.id)}
                                        >
                                          Delete
                                        </button>
                                      </Dropdown>

                                      <Pane>
                                        <Dialog
                                          containerProps={{ className: 'themed-modal' }}
                                          isShown={isEditTaskShown[task.id]}
                                          title='Edit task'
                                          onCloseComplete={() =>
                                            setIsEditTaskShown((prev) => ({
                                              ...prev,
                                              [task.id]: false,
                                            }))
                                          }
                                          hasFooter={false}
                                          hasClose={false}
                                        >
                                          <Pane>
                                            <SignForm>
                                              <SignField>
                                                <Strong color={textMuted}>Date:</Strong>
                                                <TextInput
                                                  marginTop={3}
                                                  background={background}
                                                  fontSize={13}
                                                  value={updatedTask.date}
                                                  onChange={(e) =>
                                                    setUpdatedTask((prev) => ({
                                                      ...prev,
                                                      date: e.target.value,
                                                    }))
                                                  }
                                                  name='text-input-name'
                                                  placeholder='GitHub'
                                                />
                                              </SignField>
                                              <SignField>
                                                <Strong color={textMuted}>Name:</Strong>
                                                <TextInput
                                                  marginTop={3}
                                                  background={background}
                                                  fontSize={13}
                                                  value={updatedTask.name}
                                                  onChange={(e) =>
                                                    setUpdatedTask((prev) => ({
                                                      ...prev,
                                                      name: e.target.value,
                                                    }))
                                                  }
                                                  name='text-input-name'
                                                  placeholder='A Git-based platform for software.'
                                                />
                                              </SignField>
                                              <SignField>
                                                <Strong color={textMuted}>Project:</Strong>
                                                <TextInput
                                                  marginTop={3}
                                                  background={background}
                                                  fontSize={13}
                                                  value={updatedTask.project}
                                                  onChange={(e) =>
                                                    setUpdatedTask((prev) => ({
                                                      ...prev,
                                                      project: e.target.value,
                                                    }))
                                                  }
                                                  name='text-input-name'
                                                  placeholder='github.com'
                                                />
                                              </SignField>
                                              <SignField>
                                                <Strong color={textMuted}>Priority:</Strong>
                                                <TextInput
                                                  marginTop={3}
                                                  background={background}
                                                  fontSize={13}
                                                  value={updatedTask.priority}
                                                  onChange={(e) =>
                                                    setUpdatedTask((prev) => ({
                                                      ...prev,
                                                      priority: e.target.value,
                                                    }))
                                                  }
                                                  name='text-input-name'
                                                  placeholder='Development'
                                                />
                                              </SignField>
                                            </SignForm>
                                            <SignButtons>
                                              <Button
                                                className='button-cancel'
                                                onClick={() =>
                                                  setIsEditTaskShown((prev) => ({
                                                    ...prev,
                                                    [task.id]: false,
                                                  }))
                                                }
                                              >
                                                Cancel
                                              </Button>

                                              <Button
                                                className='button-add'
                                                appearance='primary'
                                                onClick={() => handleEditTaskSubmit(task)}
                                              >
                                                Save
                                              </Button>
                                            </SignButtons>
                                          </Pane>
                                        </Dialog>
                                      </Pane>
                                    </span>
                                  </Table.Row>
                                ))
                              ))}
                          </Table.Body>
                        </Table>
                      </BookmarksTable>
                    </PageMain>
                  </PageContainer>
                </PageLayout>
              </>
            )}
          </ContainerWrap>
        </MainSection>
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
}
