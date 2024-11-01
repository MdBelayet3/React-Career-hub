import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader:()=> fetch('jobs.json'), //Warning: only load the data you need. Do not load all the data
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader:()=> fetch('jobs.json'),  //Warning: only load the data you need. Do not load all the data
      },
      {
        path: '/jobs',
        element: <FeaturedJobs></FeaturedJobs>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
