import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Breadcrumbs from '../../compontents/Breadcrumbs';

const Result: React.FC = () => {
    const [vacancyName, setVacancyName] = useState<string>(localStorage.getItem('vacancyName') || '');
    const [vacancyText, setVacancyText] = useState<string>(localStorage.getItem('vacancyText') || '');
    return (
        <>
            <Breadcrumbs />
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="start"
                spacing={3} 
            >
                <Box sx={{ display: "flex", justifyContent: "center", width: "calc(100% - 40px)", padding: "20px 20px 0px" }}>
                    <Typography variant="h6" component="h2">Создать новую вакансию - шаг 4</Typography> 
                </Box>
                <Stack
                    direction="column"
                    justifyContent="center"
                    spacing={1}
                    sx={{ width: "100%" }}
                >
                    <Typography variant="body1" component="p" sx={{ paddingBottom: "5px" }}>
                        Ваша вакансия
                    </Typography>
                    <TextField
                        hiddenLabel
                        id="filled-multiline-static"
                        multiline
                        rows={22}
                        defaultValue={`${vacancyName}\n \n${vacancyText}`}
                        variant="filled"
                        fullWidth
                        sx={{ paddingBottom: "5px" }}
                    />
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <Button variant="outlined" href="/creator/prerequisites">
                            Вернуться
                        </Button>
                        <Button variant="contained" href="">
                            Сохранить вакансию
                        </Button>
                    </Box>
                </Stack>  
            </Stack>
        </>
    );
};

export default Result;