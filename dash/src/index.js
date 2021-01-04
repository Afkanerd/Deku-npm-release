import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './main.scss';

import DashBoard from './components/DashBoard';

render(
    <BrowserRouter>
        <DashBoard />
    </BrowserRouter>,
    document.getElementById('root')
);
