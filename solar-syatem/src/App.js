import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import { createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Head from "./components/Head";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Head />
      <Outlet />
      <Footer />
    </div>
  );
}

export const routerComponent = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/" ,         
        element: <Body/>,
      },
      {
        path: "/about",        
        element: <About />,
      },
      {
        path: "/contact",      
        element: <Contact />,
      },
    ],
  },
]);

export default App;
