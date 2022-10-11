
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
import Topic from './components/Topic';
import Statistic from './components/Statistic';
import Blog from './components/Blog';
import Quiz from './components/Quiz';
import Errorpage from './components/Errorpage';



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Errorpage />,
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
          path: '/topic/:subject',
          loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.subject}`)
          },
          element: <Quiz></Quiz>
        },

        {
          path: 'statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
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
