import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import Layout from './Layout.jsx'
import Feature from './components/Feature/Feature.jsx'
import Contact from './components/Contact/Contact.jsx'
import GitHubInfo from './components/GitHubInfo/GitHubInfo.jsx'
import User from './components/User-params/User.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path='feature' element={<Feature/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='githubinfo' element={<GitHubInfo />} />
        <Route path='user/:userid' element={<User/>}/>
      </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
