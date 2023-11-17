import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { set } from "./store";
import App from "./pages/App";
import NotFound from "./pages/404";
import Download from "./pages/Download";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import List from "./pages/List";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import SideAd from "./components/SideAd";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <NotFound/>
    },
    {
      path: "/download/:subreddit/:postUri",
      element: <Download/>
    },
    {
      path:"/privacy",
      element: <Privacy/>
    },
    {
      path:"/terms",
      element: <Terms/>
    },
    {
      path:"/latest",
      element: <List/>
    }
])

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      (async() => {
        let res = await fetch("https://animekizi.org/api/retrieveLatest?page=0");
        let json = await res.json();
        dispatch(set(json))
      })();
    },[dispatch]);
    
    return (
        <>
          <SideAd left={6} right={0} slot={"8932568965"}/>
          <SideAd left={0} right={6} slot={"2748651609"}/> 
          <RouterProvider router={router}/>
        </>
    )
};

export default Main;
