import React, { useState, useCallback } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Breadcrumbs from '../../compontents/Breadcrumbs';

import { getVacancyText } from '../../api/requests';

const Prerequisites: React.FC = () => {
    const [vacancyName, setVacancyName] = useState<string>(localStorage.getItem('vacancyName') || '');
    const [workerDescription, setWorkerDescription] = useState<string>(localStorage.getItem('workerDescription') || '');
    const [aboutCompany, setAboutCompany] = useState<string>(localStorage.getItem('aboutCompany') || '');
    const [vacancyText, setVacancyText] = useState<string>(localStorage.getItem('vacancyText') || '');
    
    const vacancyTextHandler = useCallback(async(vacancyName: string, description: string) => {
        const vacancy = await getVacancyText(vacancyName, description);
        setVacancyText(vacancy);
    }, [vacancyName, workerDescription])

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
                    <Typography variant="h6" component="h2">Создать новую вакансию - шаг 3</Typography> 
                </Box>
                <Stack
                    direction="column"
                    justifyContent="center"
                    spacing={1}
                    sx={{ width: "100%" }}
                >
                    <Typography variant="body1" component="p">
                        Напишите в свободной форме, кого вы ищете или чем будет заниматься сотрудник?
                    </Typography>
                    <TextField
                        hiddenLabel
                        id="filled-multiline-static"
                        onChange={(e) => {
                            setWorkerDescription(e.target.value);
                            localStorage.setItem('workerDescription', e.target.value);
                        }}
                        multiline
                        rows={3}
                        defaultValue={workerDescription}
                        variant="filled"
                        fullWidth
                        sx={{ paddingBottom: "5px" }}
                    />
                    <Button
                        variant="contained"
                        onClick={() => {
                            vacancyTextHandler(vacancyName, workerDescription);
                        }}
                    >
                        Сгенерировать требования
                    </Button>
                </Stack>
                <Stack
                    direction="column"
                    justifyContent="center"
                    spacing={1}
                    sx={{ width: "100%" }}
                >
                    <Typography variant="body1" component="p" sx={{ paddingBottom: "5px" }}>
                        Выберите подходящие требования
                    </Typography>
                    <TextField
                        hiddenLabel
                        id="filled-multiline-static"
                        onChange={(e) => {
                            setVacancyText(e.target.value);
                            localStorage.setItem('vacancyText', e.target.value);
                        }}
                        multiline
                        rows={12}
                        defaultValue={vacancyText}
                        variant="filled"
                        fullWidth
                        sx={{ paddingBottom: "5px" }}
                    />
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <Button variant="outlined" href="/creator/functions">
                            Вернуться
                        </Button>
                        <Button
                            variant="contained"
                            href="/creator/result"
                            onClick={() => localStorage.setItem('vacancyText', vacancyText)}
                        >
                            Следующий шаг
                        </Button>
                    </Box>
                </Stack>  
            </Stack>
        </>
    );
};

export default Prerequisites;