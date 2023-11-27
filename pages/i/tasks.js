import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import { useServices } from '../../services/ServicesProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { isUserEmailVerified, isUserRegisteredWithGitHub } from '../../services/ServicesHelpers';
import {
  ContainerWrap,
  MainSection,
  PageContainer,
  PageLayout,
  ThemeLayout,
  PageHeader,
  PageMain,
  InputHeader,
  CenteredLayout,
  CenteredSection,
} from '../../styles/components/layout';
import { SignForm, SignField, SignButtons } from '../../styles/components/signin';
import {
  Pane,
  Text,
  Dialog,
  Strong,
  Button,
  Table,
  TextInput,
  toaster,
  Group,
  Paragraph,
  Heading,
  StatusIndicator,
  Checkbox,
  Tab,
  Tablist,
  Radio,
  Badge,
} from 'evergreen-ui';
import Dropdown from '../../components/Dropdown';
import { useThemeColors } from '../../styles/theme';
import Link from 'next/link';

export default function TasksPage({ theme, toggleTheme }) {
  const { addTask, deleteTask, editTask, currentUser, updateTask } = useServices();
  const { textColor, textMuted, background } = useThemeColors(theme);
  const [openMenu, setOpenMenu] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskProject, setTaskProject] = useState('');
  const [taskPriority, setTaskPriority] = useState('');
  const [isNewTaskDialogShown, setIsNewTaskDialogShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedProject, setSelectedProject] = useState('All projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditTaskShown, setIsEditTaskShown] = useState({});
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [isPageLoading, setisPageLoading] = useState(true);
  const [tabs, setTabs] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedPriority, setSelectedPriority] = useState('');
  const [isBigResolution, setIsBigResolution] = useState(false);

  const userIsRegisteredWithGitHub = isUserRegisteredWithGitHub(currentUser);
  const userEmailVerified = isUserEmailVerified(currentUser);

  const handleToggleDropdown = (id) => {
    setOpenDropdownId(id === openDropdownId ? null : id);
  };

  const [updatedTask, setUpdatedTask] = useState({
    name: '',
    project: '',
    priority: '',
  });

  const handleEditTaskSubmit = useCallback(
    async (task) => {
      const { name, project } = updatedTask;

      if (!selectedPriority) {
        toaster.warning('Task is not edited');
        return;
      }
      if (name === task.name && project === task.project && selectedPriority === task.priority) {
        toaster.warning('Task is not edited');
        return;
      }

      try {
        await editTask(task.id, { ...updatedTask, priority: selectedPriority });
        toaster.success('Task updated successfully');

        setIsEditTaskShown((prev) => ({
          ...prev,
          [task.id]: false,
        }));
        setSelectedPriority('');
      } catch (error) {
        console.error('Error updating task:', error);
        toaster.danger('Error updating task. Please try again.');
      }
    },
    [editTask, updatedTask, selectedPriority],
  );

  const handleShowNewTaskDialog = () => {
    setIsNewTaskDialogShown(true);
  };

  const handleAddTask = () => {
    if (!taskName || !taskProject || !selectedPriority) {
      toaster.danger('Please fill out all fields.');
      return false;
    }

    addTask(taskName, taskProject, selectedPriority);

    setSelectedProject('All projects');
    setTaskName('');
    setTaskProject('');
    setTaskPriority('');
    setIsNewTaskDialogShown(false);
    setSelectedPriority('');

    return true;
  };

  const handleTaskCheckChange = async (taskId, newDone) => {
    try {
      await editTask(taskId, { done: newDone });

      const updatedTasks = currentUser.tasks.map((task) =>
        task.id === taskId ? { ...task, done: newDone } : task,
      );

      updateTask(updatedTasks);

      setFilteredTasks((prevFilteredTasks) =>
        prevFilteredTasks.filter((task) => task.id !== taskId),
      );
    } catch (error) {
      console.error('Error updating task:', error.message);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setSelectedProject('All projects');
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'red';
      case 'medium':
        return 'orange';
      case 'low':
        return 'green';
      default:
        return 'gray';
    }
  };

  useEffect(() => {
    if (currentUser && currentUser.tasks) {
      setIsLoading(true);
      const sortedTasks = currentUser.tasks
        .slice()
        .sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));

      if (selectedIndex === 0) {
        const filtered = sortedTasks.filter(
          (task) =>
            task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.priority.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        setFilteredTasks(filtered);
      } else {
        const selectedProject = tabs[selectedIndex];
        const filtered = sortedTasks.filter(
          (task) =>
            task.project === selectedProject &&
            (task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              task.priority.toLowerCase().includes(searchQuery.toLowerCase())),
        );
        setFilteredTasks(filtered);
      }

      setIsLoading(false);
    }
  }, [currentUser, selectedIndex, searchQuery, tabs]);

  useEffect(() => {
    const handleResize = () => {
      setIsBigResolution(window.innerWidth > 560);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (currentUser && currentUser.tasks) {
      const uniqueProjects = Array.from(new Set(currentUser.tasks.map((task) => task.project)));
      setTabs(['All projects', ...uniqueProjects]);
    }
  }, [currentUser]);

  useEffect(() => {
    setisPageLoading(false);
  }, []);

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
            {!currentUser && (
              <>
                <CenteredSection>
                  <Heading
                    is='h1'
                    align='center'
                    marginTop={8}
                    lineHeight={1.25}
                    fontSize={58}
                    marginBottom={8}
                    fontWeight={900}
                    color={textColor}
                    letterSpacing='-.003rem'
                  >
                    Authentication Required
                  </Heading>
                  <Paragraph
                    size={500}
                    lineHeight={1.75}
                    textAlign='center'
                    marginTop={30}
                    color='muted'
                  >
                    It seems like you`re trying to access a restricted area, and you haven`t been
                    authenticated yet. This could be because you`re not logged in or don`t have the
                    necessary permissions to view Dashboard page.
                  </Paragraph>
                </CenteredSection>
                <CenteredLayout>
                  <Link href='/signup'>
                    <Button
                      className='custom-button-big'
                      appearance='primary'
                      fontWeight='bold'
                      width={280}
                      height={50}
                    >
                      <Text fontWeight='bold' color='#FFF'>
                        Create account
                      </Text>
                    </Button>
                  </Link>
                </CenteredLayout>
              </>
            )}

            {currentUser && (userEmailVerified || userIsRegisteredWithGitHub) && (
              <>
                <StatusIndicator marginTop={22} color='success'>
                  <Text color={textColor} fontSize={14}>
                    Welcome
                    <Strong color={textColor} fontSize={14}>
                      {currentUser?.displayName && `, ${currentUser?.displayName}`}
                    </Strong>
                    . <br /> Dash Directory is still in development-mode. Thanks for being patient.
                  </Text>
                </StatusIndicator>
                <PageLayout>
                  <Sidebar theme={theme} />
                  <PageContainer>
                    <PageHeader>
                      <Group width='100%'>
                        <InputHeader>
                          <TextInput
                            className='full-width'
                            background={background}
                            height={30}
                            disabled={isLoading}
                            placeholder='Search by name and priority in selected project...'
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
                                  <Pane
                                    className='task-priority'
                                    aria-label='Radio Group Label 16'
                                    role='group'
                                  >
                                    <Radio
                                      checked={selectedPriority === 'High'}
                                      size={16}
                                      label='High'
                                      onChange={() => setSelectedPriority('High')}
                                    />
                                    <Radio
                                      checked={selectedPriority === 'Medium'}
                                      size={16}
                                      label='Medium'
                                      onChange={() => setSelectedPriority('Medium')}
                                    />
                                    <Radio
                                      checked={selectedPriority === 'Low'}
                                      size={16}
                                      label='Low'
                                      onChange={() => setSelectedPriority('Low')}
                                    />
                                  </Pane>
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
                      <Pane className='task-container'>
                        <Tablist
                          background={background}
                          flexBasis={240}
                          className='task-container_tablist'
                        >
                          <div className='task-container_tabs-title'>
                            <Text>Project</Text>
                          </div>

                          {tabs.map((tab, index) => (
                            <Tab
                              className='task-container_selected'
                              marginTop={15}
                              paddingLeft={12}
                              paddingTop={20}
                              paddingBottom={20}
                              borderRadius={0}
                              aria-controls={`panel-${tab}`}
                              direction='vertical'
                              isSelected={index === selectedIndex}
                              key={tab}
                              onSelect={() => {
                                setSelectedIndex(index);
                                setSearchQuery('');
                              }}
                            >
                              <Text color={textColor}> {tab}</Text>
                            </Tab>
                          ))}
                        </Tablist>

                        <Table className='custom-table_wrap'>
                          <Table.Head
                            className={`custom-table_head ${
                              filteredTasks.length > 10 && 'add-right-padding'
                            }`}
                            background={background}
                          >
                            <Table.TextHeaderCell flexBasis={180} className='custom-table_cell'>
                              {isBigResolution ? 'Name:' : 'Task:'}
                            </Table.TextHeaderCell>

                            <Table.TextHeaderCell className='custom-table_cell'>
                              {isBigResolution && 'Priority:'}
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell className='custom-table_cell'>
                              {isBigResolution && 'Date added:'}
                            </Table.TextHeaderCell>
                          </Table.Head>

                          <Table.Body className='custom-table_body with-border-left with-min-height'>
                            {!isPageLoading && currentUser?.tasks && filteredTasks.length < 1 && (
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
                            )}

                            <AnimatePresence initial={false}>
                              {!isPageLoading &&
                                filteredTasks
                                  .filter(
                                    (task) =>
                                      task.project === tabs[selectedIndex] || selectedIndex === 0,
                                  )
                                  .map((task) => (
                                    <motion.div key={task.id} layout>
                                      <Table.Row
                                        className='custom-table_row'
                                        background={background}
                                        color={textMuted}
                                        key={task.id}
                                        isSelectable={false}
                                      >
                                        <Table.TextCell
                                          flexBasis={180}
                                          className={
                                            task.done
                                              ? ' done-task-div custom-table_cell'
                                              : 'custom-table_cell'
                                          }
                                        >
                                          <Checkbox
                                            margin={2}
                                            checked={Boolean(task.done)}
                                            onChange={(e) =>
                                              handleTaskCheckChange(task.id, e.target.checked)
                                            }
                                          />
                                          <Text
                                            color={textColor}
                                            fontSize={14}
                                            className={task.done ? 'done-task' : ''}
                                          >
                                            {task.name}
                                          </Text>
                                        </Table.TextCell>

                                        <Table.TextCell
                                          className={
                                            task.done
                                              ? ' done-task-div custom-table_cell'
                                              : 'custom-table_cell'
                                          }
                                        >
                                          <Text color={textColor} fontSize={14}>
                                            <Badge color={getPriorityColor(task.priority)}>
                                              {task.priority}
                                            </Badge>
                                          </Text>
                                        </Table.TextCell>

                                        <Table.TextCell
                                          className={
                                            task.done
                                              ? ' done-task-div custom-table_cell-date'
                                              : 'custom-table_cell-date'
                                          }
                                        >
                                          <Text
                                            color={textMuted}
                                            fontSize={13}
                                            className='task-date'
                                          >
                                            <span className='date'>
                                              {typeof task.date === 'string'
                                                ? task.date
                                                : task.date instanceof Date
                                                ? task.date
                                                    .toLocaleString('de-DE', {
                                                      day: 'numeric',
                                                      month: 'numeric',
                                                      year: 'numeric',
                                                    })
                                                    .replace(',', '')
                                                : task.date
                                                    ?.toDate()
                                                    .toLocaleString('de-DE', {
                                                      day: 'numeric',
                                                      month: 'numeric',
                                                      year: 'numeric',
                                                    })
                                                    .replace(',', '')}
                                            </span>

                                            <span className='time'>
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
                                                  d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                                                />
                                              </svg>
                                              <span className='time-exact'>
                                                {typeof task.date === 'string'
                                                  ? ''
                                                  : task.date instanceof Date
                                                  ? task.date
                                                      .toLocaleString('de-DE', {
                                                        hour: 'numeric',
                                                        minute: 'numeric',
                                                        hour12: false,
                                                      })
                                                      .replace(',', '')
                                                  : task.date
                                                      ?.toDate()
                                                      .toLocaleString('de-DE', {
                                                        hour: 'numeric',
                                                        minute: 'numeric',
                                                        hour12: false,
                                                      })
                                                      .replace(',', '')}
                                              </span>
                                            </span>
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
                                              title='Edit task'
                                              onCloseComplete={() =>
                                                setIsEditTaskShown((prev) => ({
                                                  ...prev,
                                                  [task.id]: false,
                                                }))
                                              }
                                              isShown={isEditTaskShown[task.id]}
                                              hasFooter={false}
                                              hasClose={false}
                                            >
                                              <Pane>
                                                <SignForm>
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
                                                    <Pane
                                                      className='task-priority'
                                                      aria-label='Radio Group Label 16'
                                                      role='group'
                                                    >
                                                      <Radio
                                                        size={16}
                                                        label='High'
                                                        onChange={() => setSelectedPriority('High')}
                                                        checked={
                                                          selectedPriority === 'High' ||
                                                          (!selectedPriority &&
                                                            task.priority === 'High')
                                                        }
                                                      />
                                                      <Radio
                                                        size={16}
                                                        label='Medium'
                                                        onChange={() =>
                                                          setSelectedPriority('Medium')
                                                        }
                                                        checked={
                                                          selectedPriority === 'Medium' ||
                                                          (!selectedPriority &&
                                                            task.priority === 'Medium')
                                                        }
                                                      />
                                                      <Radio
                                                        size={16}
                                                        label='Low'
                                                        onChange={() => setSelectedPriority('Low')}
                                                        checked={
                                                          selectedPriority === 'Low' ||
                                                          (!selectedPriority &&
                                                            task.priority === 'Low')
                                                        }
                                                      />
                                                    </Pane>
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
                                    </motion.div>
                                  ))}
                            </AnimatePresence>
                          </Table.Body>
                        </Table>
                      </Pane>
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
