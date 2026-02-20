import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import { Home } from './components/Home';
import { Product } from './components/Product';
import { Dashboard } from './components/Dashboard';
import { Overview } from './components/Overview';
import { Settings } from './components/Settings';
import { Profile } from './components/Profile';
import { Sales } from './components/Sales';
import { ProtectedRoute } from './components/ProtecetedRoute';
import { NotFound } from './components/NotFound';
import { NotificatoinProvider } from './context/NotificationContext';
import { EmojiTodoList } from './components/EmojiTodoList';
import { TodoList } from './components/TodoList';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ZustandTodoList } from './components/ZustandTodoList';
import { StateMachine } from './components/StateMachine';
import { useCourses } from './hooks/useCourses';

const CourseList = lazy(() => import('./components/TankStack'));

function App() {
  const { data: courses, isLoading, error } = useCourses();

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!courses) return <div>No courses found</div>;

  return (
    <NotificatoinProvider>
      <Provider store={store}>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <Link to='/sales'>Sales</Link>
            </li>
            <li>
              <Link to='/emoji-todo'>EmojiTodo</Link>
            </li>
            <li>
              <Link to='/redux-todo'>Redux EmojiTodo</Link>
            </li>
            <li>
              <Link to='/zustand-todo'>Zustand EmojiTodo</Link>
            </li>
            <li>
              <Link to='/state-machine'>State Machine</Link>
            </li>
            <li>
              <Link to='/tanstack'>TanStack</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/product/:id' element={<Product />}></Route>
          <Route path='dashboard' element={<Dashboard />}>
            <Route path='overview' element={<Overview />}></Route>
            <Route
              path='settings'
              element={
                <Suspense fallback={<div> Loading... </div>}>
                  <Settings />
                </Suspense>
              }></Route>
          </Route>
          <Route
            path='/profile'
            element={
              <ProtectedRoute isAuth={false}>
                <Profile />
              </ProtectedRoute>
            }></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/sales' element={<Sales />}></Route>
          <Route path='/emoji-todo' element={<EmojiTodoList />}></Route>
          <Route path='/redux-todo' element={<TodoList />}></Route>
          <Route path='/zustand-todo' element={<ZustandTodoList />}></Route>
          <Route path='/state-machine' element={<StateMachine />}></Route>
          <Route
            path='/tanstack'
            element={<CourseList courses={courses} />}></Route>
        </Routes>
      </Provider>
    </NotificatoinProvider>
  );
}

function About() {
  return <h4> About</h4>;
}

export default App;
