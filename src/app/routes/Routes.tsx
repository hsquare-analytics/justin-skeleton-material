import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from 'app/pages/sign/SignIn'

export default function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route>,
    ),
  )
  return <RouterProvider router={router} />
}
