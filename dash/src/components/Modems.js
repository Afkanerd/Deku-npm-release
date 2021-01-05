import React from 'react';
import { SiHuawei, SiVodafone } from "react-icons/si";

const Modems = () => {
    return (
        <div className="container-fluid p-3 text-center">
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm border-0 rounded-lg">
                        <div className="card-body">
                            <SiHuawei size={40} className="mb-2" />
                            <h5 className="card-title my-2 font-weight-bold">E303</h5>
                            <p className="card-text">805487056577894</p>

                            <div className="d-md-flex justify-content-around my-3">
                                <a href="#" className="btn btn-outline-primary px-lg-5 py-lg-1 mx-1">Info</a>
                                <a href="#" className="btn btn-primary px-lg-5 py-lg-1 mx-1">Logs</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm border-0 rounded-lg">
                        <div className="card-body">
                            <SiVodafone size={40} className="mb-2" />
                            <h5 className="card-title my-2 font-weight-bold">SH-120</h5>
                            <p className="card-text">825487056577894</p>

                            <div className="d-md-flex justify-content-around my-3">
                                <a href="#" className="btn btn-outline-primary px-lg-5 py-lg-1 mx-1">Info</a>
                                <a href="#" className="btn btn-primary px-lg-5 py-lg-1 mx-1">Logs</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm border-0 rounded-lg">
                        <div className="card-body">
                            <SiHuawei size={40} className="mb-2" />
                            <h5 className="card-title my-2 font-weight-bold">E3131A</h5>
                            <p className="card-text">805487056577804</p>

                            <div className="d-md-flex justify-content-around my-3">
                                <a href="#" className="btn btn-outline-primary px-lg-5 py-lg-1 mx-1">Info</a>
                                <a href="#" className="btn btn-primary px-lg-5 py-lg-1 mx-1">Logs</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm border-0 rounded-lg">
                        <div className="card-body">
                            <SiVodafone size={40} className="mb-2" />
                            <h5 className="card-title my-2 font-weight-bold">K-56</h5>
                            <p className="card-text">825487056577894</p>

                            <div className="d-md-flex justify-content-around my-3">
                                <a href="#" className="btn btn-outline-primary px-lg-5 py-lg-1 mx-1">Info</a>
                                <a href="#" className="btn btn-primary px-lg-5 py-lg-1 mx-1">Logs</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm border-0 rounded-lg">
                        <div className="card-body">
                            <SiHuawei size={40} className="mb-2" />
                            <h5 className="card-title my-2 font-weight-bold">E156</h5>
                            <p className="card-text">805487056577894</p>

                            <div className="d-md-flex justify-content-around my-3">
                                <a href="#" className="btn btn-outline-primary px-lg-5 py-lg-1 mx-1">Info</a>
                                <a href="#" className="btn btn-primary px-lg-5 py-lg-1 mx-1">Logs</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Modems;