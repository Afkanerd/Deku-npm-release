import React from 'react';
import { Route, Switch } from "react-router-dom";

import MainNav from './MainNav';
import SideNav from './SideNav';
import Home from './Home';
import SMS from './SMS';
import Modems from './Modems';


const DashBoard = () => {
    return (
        <>
            <MainNav />
            <div className="container-fluid mt-2 px-0">
                <div className="row no-gutters">
                    <SideNav />
                    <div className="col-md-10 p-3">
                        <Switch>
                            <Route exact path="/"><Home /></Route>
                            <Route exact path="/sms"><SMS /></Route>
                            <Route exact path="/modems"><Modems /></Route>
                        </Switch>
                    </div>
                </div>
            </div>

        </>
    );
};

export default DashBoard;