import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import HomePage from "./pages/Home";
import Products from './pages/Products';
import RootLayout from "./pages/Root";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  { path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [

      { path: '/', element: <HomePage /> },
      { path: '/products', element: <Products /> },
      { path: '/contact', element: <ContactPage/>}
    ]
  },
]);


function App() {

  return <RouterProvider router={router}/>;
}

export default App;



/*
  const router = createBrowserRouter([
  { path: '/',                  ====> included all https://example.com/{children}/{children} etc.....
    element: <RootLayout />,    ====> ROOT LAYOUT IS A PARENT WRAPPER COMPONENT, IN THIS CASE OUR NAVBAR WILL BE APPLIED ACROSS ALL CHILD COMPONENTS
    errorElement: <ErrorPage />,====> DEFAULT ERROR PAGE
    children: [

      { path: '/', element: <HomePage /> }, =====> CHILDREN ELEMENTS,
      { path: '/products', element: <Products /> },  
      { path: '/contact', element: <ContactPage/>}
    ]
  },
]);


 */
