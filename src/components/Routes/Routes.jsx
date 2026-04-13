import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../../pages/Home/Home";
import Apps from "../../pages/Apps/Apps";
import AppDetails from "../../pages/AppDetails/AppDetails";
import Installation from "../../pages/Installation/Installation";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {path: '/', 
        Component: Root,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {index: true, 
                loader: ()=> fetch('trendingData.json'),
                Component: Home},
            {path: 'apps', 
                loader: () => fetch('allAppsData.json'),
                Component: Apps},
            {path: 'installation', 
                loader: () => fetch('allAppsData.json'),
                Component: Installation},
            {path: '/appDetails/:id', 
                loader: () => fetch('allAppsData.json'),
                Component: AppDetails},
            {path: '*', Component: ErrorPage}
        ]
    }
])