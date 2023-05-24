import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Books from './pages/Books/Books';
import { Provider } from 'react-redux';
import { store } from './stores/store';

const App = () => {
  const router = createBrowserRouter([
    {path: "/", element: <Navbar />},
  ])

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  )
}

export default App
