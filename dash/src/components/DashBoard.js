import React from 'react';

import MainNav from './MainNav';
import SideNav from './SideNav';

const DashBoard = () => {
    return (
        <>
            <MainNav />
            <div className="container-fluid mt-2 px-0">
                <div className="row no-gutters">
                    <SideNav />
                    <div className="col-md-10"></div>
                </div>
            </div>

        </>
    );
};

export default DashBoard;