import React from 'react';

import CustomLineChart from './charts/CustomLineChart';

const Home = () => {
    return (
        <div classname="container-fluid p-3">
            <div className="row">
                <div className="col-md-6">
                    <CustomLineChart />
                </div>

                <div className="col-md-6">

                </div>
            </div>
        </div>
    );
};

export default Home;