import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Courses, Home, ErrorPage, ContactPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
