import React from 'react';
import SMSTable from './tables/SMSTable';

const SMS = () => {
    return (
        <>
            <SMSTable rowsPerPage={10} />
        </>
    );
};

export default SMS;