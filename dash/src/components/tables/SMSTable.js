import React from 'react';
import MUIDataTable from "mui-datatables";
import { useParams } from "react-router-dom";

import { Badge } from 'react-bootstrap';

import MockData from './MockData';
import { propTypes } from 'react-bootstrap/esm/Image';

const columns = [
    {
        label: "SENDER",
        name: "sender",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        label: "MESSAGE",
        name: "message",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        label: "DATE",
        name: "date",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        label: "TIME",
        name: "time",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        label: "STATUS",
        name: "status",
        cell: (row) => <Badge pill variant="primary">{row.status}</Badge>,
        options: {
            customBodyRender: (value) => (
                <Badge pill variant="primary">{value}</Badge>
            )
        },

        filter: true,
        sort: true,
    },
];

const options = {
    filterType: 'checkbox',
    count: MockData.length,
    rowsPerPage: 6
};

const SMSTable = (props) => {
    let params = useParams();
    let header = " SMS Logs";
    if (params.modem) {
        header = params.modem + header;
    }
    if (props.rowsPerPage) {
        options.rowsPerPage = props.rowsPerPage;
    }
    return (
        <>
            <MUIDataTable className="shadow-sm p-3"
                title={header}
                data={MockData}
                columns={columns}
                options={options}
            />
        </>
    );
};

export default SMSTable;