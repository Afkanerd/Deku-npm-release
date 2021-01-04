import React from 'react';
import DataTable from "react-data-table-component";
import MockData from "./MockData";

const columns = [
    {
        name: "SENDER",
        selector: "sender",
        sortable: true
    },
    {
        name: "MESSAGE",
        selector: "message",
        sortable: true
    },
    {
        name: "DATE",
        selector: "date",
        sortable: true,
    },
    {
        name: "TIME",
        selector: "time",
        sortable: true,
    },
    {
        name: "STATUS",
        selector: "status",
        sortable: true,
    },
    {
        name: "ACTIONS",
        selector: "actions",
    }
];

const CustomCheckBox = React.forwardRef(({ onClick, ...rest }, ref) => (
    <div className="custom-control custom-checkbox">
        <input
            type="checkbox"
            className="custom-control-input"
            ref={ref}
            {...rest}
        />
        <label className="custom-control-label" onClick={onClick} />
    </div>
));

const SMS = () => {
    return (
        <>
            <DataTable
                title="SMS"
                columns={columns}
                data={MockData}
                defaultSortField="title"
                pagination
                selectableRows
                selectableRowsComponent={CustomCheckBox}
            />
        </>
    );
};

export default SMS;