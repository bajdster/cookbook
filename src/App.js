import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe"
import {loader as recipeLoader} from "./pages/Recipe"
import Error from "./pages/Error";

const router = createBrowserRouter([
  {path: '/', element: <Root/>,
  errorElement:<Error/>,
  children:
  [
    {path: '/', element: <Home/>},
    {path: ':recipe', element: <Recipe/>, loader: recipeLoader}
  ]}
])

function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
