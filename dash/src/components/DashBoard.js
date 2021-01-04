import React from 'react';
import { Route, Switch } from "react-router-dom";

import MainNav from './MainNav';
import SideNav from './SideNav';

const DashBoard = () => {
    return (
        <>
            <MainNav />
            <div className="container-fluid mt-2 px-0">
                <div className="row no-gutters">
                    <SideNav />
                    <div className="col-md-10 p-3">
                        <Switch>
                            <Route exact path="/"><MainNav /></Route>
                        <Route exact path="/sms"><h3>route 2</h3> </Route>
                        <Route exact path="/modems"><h3>route 3</h3> </Route>
                        </Switch>
                </div>
            </div>
        </div>

        </>
    );
};

export default DashBoard;