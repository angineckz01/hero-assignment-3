import React from 'react';
import InstalledApp from '../InstalledApp/InstalledApp';

const InstalledApps = ({filteredApps}) => {

    return (
        <div className='flex flex-col gap-3'>
           {
            filteredApps.map(data => <InstalledApp 
                key={data.id} 
                data={data}></InstalledApp>)
           }
        </div>
    );
};

export default InstalledApps;