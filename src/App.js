
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
import NavBar from './components/NavBar/NavBar';
import Topic from './components/Topic';
import Statistic from './components/Statistic';
import Blog from './components/Blog';



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Topic></Topic>

        },
        {
          path: 'topic',
          element: <Topic></Topic>

        },

        {
          path: 'statistics',
          element: <Statistic></Statistic>

        },

        {
          path: 'blog',
          element: <Blog></Blog>

        }
      ]

    }


  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>


    </div>
  );
}

export default App;
