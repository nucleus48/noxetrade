import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import { Spinner } from './components/Spinner'
import { AuthProvider } from './providers/AuthProvider'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" lazy={() => import('./routes')} />,
    <Route path="/signup" lazy={() => import('./routes/signup')} />,
    <Route path="/login" lazy={() => import('./routes/login')} />,
    <Route path="/home" lazy={() => import('./routes/home')} />,
  ])
)

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} fallbackElement={<Spinner />} />
    </AuthProvider>
  )
}
