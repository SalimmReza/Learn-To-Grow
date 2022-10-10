
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
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
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topic></Topic>

        },
        {
          path: 'topic',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topic></Topic>

        },

        {
          path: 'statistics',
          element: <Statistic></Statistic>

        },

        {
          path: 'blog',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
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
