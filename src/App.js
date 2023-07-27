import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import RecipeItem from "./pages/RecipeItem"

const router = createBrowserRouter([
  {path: '/', element: <Root/>, children:
  [
    {path: '/', element: <Home/>},
    {path: ':recipe', element: <RecipeItem/>}
  ]}
])

function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
