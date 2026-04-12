import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../../pages/Home/Home";
import Apps from "../../pages/Apps/Apps";
import AppDetails from "../../pages/AppDetails/AppDetails";
import Installation from "../../pages/Installation/Installation";
import InstalledApps from "../../pages/InstalledApps/InstalledApps";
import InstalledApp from "../../pages/InstalledApp/InstalledApp";

export const router = createBrowserRouter([
    {path: '/', 
        Component: Root,
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
            // {path: 'installedApps/:id', 
            //     loader: () => fetch('allAppsData.json'),
            //     Component: InstalledApps},
            {path: '/appDetails/:id', 
                loader: () => fetch('allAppsData.json'),
                Component: AppDetails,
            children: [
                {index: true, Component: InstalledApp},
                
            ]}
        ]
    }
])