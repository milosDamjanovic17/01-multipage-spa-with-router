import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import HomePage from "./pages/Home";
import Products from './pages/Products';
import RootLayout from "./pages/Root";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  { path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [

      { index: true, element: <HomePage /> }, // path: ''
      { path: 'products', element: <Products />},
      { path: 'contact', element: <ContactPage/>},
      { path: 'products/:productId', element: <ProductDetail />},
      
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
      { path: '/products/:productId', element: <ProductDetail />}  /products/:productId => DYNAMIC ID
    ]
  },
]);


 */
