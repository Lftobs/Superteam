import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx'
import CasePage from './pages/CasePage.jsx'
import TutorialsPage from './pages/TutorialsPage.jsx'
import { Layout } from './components/Layout.jsx'
import { CaseDetail } from './components/Case-studies/CaseDetail.jsx'
import { TutorialDetail } from './components/Tutorial/TutorialDetail.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/case-studies',
        element: <CasePage />
      },
      {
        path: '/tutorials',
        element: <TutorialsPage />
      },
      {
        path: '/tutorials/:id',
        element: <TutorialDetail />
      },
      {
        path: '/case-studies/:id',
        element: <CaseDetail />
      },
      
    ]
  },
  // {
  //   path: '/about',
  //   element: <AboutPage />
  // },
  // {
  //   path: '/case-studies',
  //   element: <CasePage />,
  //   children: [
  //     {
  //       path: 'case-studies/:id',
  //       element: <div> case details</div>
  //     }
  //   ]
  // },
  // {
  //   path: '/tutorials',
  //   element: <TutorialsPage />,
  //   children: [
  //     {
  //       path: ':Id',
  //       element: <App />
  //     }
  //   ]
  // }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
