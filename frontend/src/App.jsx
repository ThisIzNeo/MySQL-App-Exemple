import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Write } from "./pages/Write";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

function App() {
  return (
    <main className="app bg-slate-100 bg-opacity-50 h-screen">
      <div>
        <RouterProvider router={router} />
      </div>
    </main>
  );
}

export default App;
