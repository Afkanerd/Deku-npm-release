import React from 'react';

import CustomLineChart from './charts/CustomLineChart';
import CustomPieChart from './charts/CustomPieChart';
import SMSTable from './tables/SMSTable';

const Home = () => {
    return (
        <div className="container-fluid p-3">
            <div className="row mb-5">
                <div className="col-md-6">
                    <CustomLineChart />
                </div>

                <div className="col-md-6">
                    <CustomPieChart />
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-12">
                    <SMSTable rowsPerPage={6} />
                </div>
            </div>
        </div>
    );
};

export default Home;