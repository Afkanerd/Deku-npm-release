import React from 'react';

import MUIDataTable from "mui-datatables";

const columns = [
    {
        name: "name",
        label: "Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "company",
        label: "Company",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "city",
        label: "City",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "state",
        label: "State",
        options: {
            filter: true,
            sort: true,
        }
    },
];

const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];

const options = {
    filterType: 'checkbox',
  };

const SMSTable = () => {
    return (
        <>
            <MUIDataTable
                title={"SMS Logs"}
                data={data}
                columns={columns}
                options={options}
            />
        </>
    );
};

export default SMSTable;