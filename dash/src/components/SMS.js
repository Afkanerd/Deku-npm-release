import React from 'react';
import { useParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import { Badge } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';
import MockData from "./tables/MockData";


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
        cell: (row) => <Badge pill variant="primary">{row.status}</Badge>,
        sortable: true,
    },
    {
        name: "ACTIONS",
        selector: "actions",
        cell: () => <BsTrash />,
        button: true,
    },
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
    let params = useParams();
    let header = " SMS Logs";
    if (params.modem) {
        header = params.modem + header;
    }
    return (
        <>
            <DataTable
                title={header}
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