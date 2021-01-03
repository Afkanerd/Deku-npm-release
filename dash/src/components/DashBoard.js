import React from 'react';

import MainNav from './MainNav';
import SideNav from './SideNav';

const DashBoard = () => {
    return (
        <>
            <MainNav />
            <div className="container-fluid mt-2">
                <div className="row">
                    <SideNav />
                    <div className="col-9"></div>
                </div>
            </div>

        </>
    );
};

export default DashBoard;