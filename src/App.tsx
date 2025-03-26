import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { patch } from "./helpers/routers";

const Root = lazy(() => import("./components/Layout/index"));
const Home = lazy(() => import("./pages/Home/index"));
const About = lazy(() => import("./pages/About/index"));

const router = createBrowserRouter([
  {
    path: patch.home,
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: patch.about, Component: About },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
