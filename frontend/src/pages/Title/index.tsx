import React from 'react';
import Box from '@mui/material/Box';

import Breadcrumbs from '../../compontents/Breadcrumbs';

const Title: React.FC = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Breadcrumbs />
        </Box>
    );
};

export default Title;