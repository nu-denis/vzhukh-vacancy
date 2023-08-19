import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Index: React.FC = () => {
    return (
        <Stack
            direction="column"
            justifyContent="center"
            spacing={2} 
        >
            <Box sx={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                <Typography variant="h4" component="h2">Что вы хотите сделать?</Typography> 
            </Box>
            <Button variant="contained" href="/creator/title">
                Создать новую вакансию
            </Button>
            <Button variant="contained" href="/rewriter">
                Переписать существующую
            </Button>
        </Stack>
    );
};

export default Index;