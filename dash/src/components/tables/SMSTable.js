import React from 'react';

import MUIDataTable from "mui-datatables";
import MockData from './MockData';

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
        options: {
            filter: true,
            sort: true,
        }
    },
];

const options = {
    filterType: 'checkbox',
    count: MockData.length,
    rowsPerPage : 6
};

const SMSTable = () => {
    return (
        <>
            <MUIDataTable className="shadow-sm p-3"
                title={"SMS Logs"}
                data={MockData}
                columns={columns}
                options={options}
            />
        </>
    );
};

export default SMSTable;