import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { path } from "./helpers/routers";

const Root = lazy(() => import("./components/Layout/index"));
const Home = lazy(() => import("./pages/Home/index"));
const About = lazy(() => import("./pages/About/index"));
const Wishlist = lazy(() => import("./pages/Wishlist/index"));
const BasketCart = lazy(() => import("./pages/BasketCart/index"));
const Product = lazy(() => import("./pages/Product/index"));

const NotFound = lazy(() => import("./pages/NotFound/index"));

const router = createBrowserRouter([
  {
    path: path.home,
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: path.about, Component: About },
      { path: path.wishlist, Component: Wishlist },
      { path: path.cart, Component: BasketCart },
      { path: path.product, Component: Product },
      { path: "*", Component: NotFound },
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
