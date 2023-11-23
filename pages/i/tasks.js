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
} from '../../styles/components/layout';

import { SignForm, SignField, SignButtons } from '../../styles/components/signin';
import { BookmarksTable } from '../../styles/pages/bookmarks';
import { Pane, Text, Dialog, Strong, Button, Table, TextInput, toaster } from 'evergreen-ui';

import Dropdown from '../../components/Dropdown';
import { useThemeColors } from '../../styles/theme';

export default function TasksPage({ theme, toggleTheme }) {
  const { addTask, deleteTask, editTask, currentUser } = useServices();
  const [openMenu, setOpenMenu] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskProject, setTaskProject] = useState('');
  const [taskPriority, setTaskPriority] = useState('');
  const { textColor, textMuted, background } = useThemeColors(theme);
  const [isNewTaskDialogShown, setIsNewTaskDialogShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditTaskShown, setIsEditTaskShown] = useState({});
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const handleToggleDropdown = (id) => {
    setOpenDropdownId(id === openDropdownId ? null : id);
  };

  const [updatedTask, setUpdatedTask] = useState({
    name: '',
    date: '',
    project: '',
    priority: '',
  });

  // const handleEditTaskSubmit = useCallback(
  //   async (task) => {
  //     const { name, date, project, priority } = updatedTask;

  //     if (
  //       name === task.name &&
  //       date === task.date &&
  //       project === task.project &&
  //       priority === task.priority
  //     ) {
  //       toaster.warning('Task is not edited');
  //       return;
  //     }

  //     try {
  //       await editTask(task.id, updatedTask);
  //       toaster.success('Task updated successfully');

  //       setIsEditTaskShown((prev) => ({
  //         ...prev,
  //         [task.id]: false,
  //       }));
  //     } catch (error) {
  //       console.error('Error updating task:', error);
  //       toaster.danger('Error updating task. Please try again.');
  //     }
  //   },
  //   [editTask, updatedTask, setIsEditTaskShown],
  // );

  const handleShowNewTaskDialog = () => {
    setIsNewTaskDialogShown(true);
  };

  const handleAddTask = () => {
    if (!taskDate || !taskName || !taskProject || !taskPriority) {
      toaster.danger('Please fill out all fields.');
      return false;
    }

    addTask(taskDate, taskName, taskProject, taskPriority);

    setTaskDate('');
    setTaskName('');
    setTaskProject('');
    setTaskPriority('');

    setIsNewTaskDialogShown(false);

    return true;
  };

  // const handleDeleteTask = async (taskId) => {
  //   try {
  //     await deleteTask(taskId);
  //   } catch (error) {
  //     console.error('Error deleting task:', error);
  //   }
  // };

  useEffect(() => {
    if (currentUser && currentUser.tasks) {
      setIsLoading(true);
      const filtered = currentUser.tasks.filter(
        (task) =>
          task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.priority.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredTasks(filtered);
      setIsLoading(false);
    }
  }, [currentUser, searchQuery]);

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
                                        {/* ... Dropdown items for editing and deleting tasks */}
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
                                              {/* ... Input fields for editing task */}
                                            </SignForm>
                                            <SignButtons>
                                              {/* ... Buttons for canceling and saving edited task */}
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
