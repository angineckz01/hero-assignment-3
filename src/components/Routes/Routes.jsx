import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../../pages/Home/Home";
import Apps from "../../pages/Apps/Apps";

export const router = createBrowserRouter([
    {path: '/', Component: Root,
        children: [
            {index: true, 
                loader: ()=> fetch('trendingData.json'),
                Component: Home},
            {path: 'apps', 
                loader: () => fetch('allAppsData.json'),
                Component: Apps}
        ]
    }
])