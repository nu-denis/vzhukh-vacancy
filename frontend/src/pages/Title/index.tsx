import React, { useState, useCallback } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Breadcrumbs from '../../compontents/Breadcrumbs';
import { getVacancyName } from '../../api/requests';

const Title: React.FC = () => {
    const [workerDescription, setWorkerDescription] = useState<string>(localStorage.getItem('workerDescription') || '');
    const [aboutCompany, setAboutCompany] = useState<string>(localStorage.getItem('aboutCompany') || '');
    const [vacancyName, setVacancyName] = useState<string>(localStorage.getItem('vacancyName') || '');
    
    const vacancyNameHandler = useCallback(async(data: string) => {
        const vacancy = await getVacancyName(data);
        setVacancyName(vacancy);
    }, [workerDescription, aboutCompany])

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
                    <Typography variant="h6" component="h2">Создать новую вакансию - шаг 1</Typography> 
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
                    />
                </Stack>
                <Stack
                    direction="column"
                    justifyContent="center"
                    spacing={1}
                    sx={{ width: "100%" }}
                >
                    <Typography variant="body1" component="p">
                        Напишите пару слов о своей компании
                    </Typography>
                    <TextField
                        hiddenLabel
                        id="filled-basic"
                        onChange={(e) => {
                            setAboutCompany(e.target.value);
                            localStorage.setItem('aboutCompany', e.target.value);
                        }}
                        defaultValue={aboutCompany}
                        variant="filled"
                        fullWidth
                        sx={{ paddingBottom: "5px" }}
                    />
                    <Button
                        variant="contained"
                        onClick={() => vacancyNameHandler(workerDescription)}
                    >
                        Сгенерировать название
                    </Button>
                </Stack>
                <Stack
                    direction="column"
                    justifyContent="center"
                    spacing={1}
                    sx={{ width: "100%" }}
                >
                    <Typography variant="body1" component="p" sx={{ paddingBottom: "5px" }}>
                        Выберете название, которое вам больше всего понравилось
                    </Typography>
                    <TextField
                        hiddenLabel
                        id="filled-multiline-static"
                        onChange={(e) => {
                            setVacancyName(e.target.value);
                            localStorage.setItem('vacancyName', e.target.value);
                        }}
                        multiline
                        rows={6}
                        defaultValue={vacancyName}
                        variant="filled"
                        fullWidth
                        sx={{ paddingBottom: "5px" }}
                    />
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <Button variant="outlined" href="/">
                            Вернуться
                        </Button>
                        <Button
                            variant="contained"
                            href="/creator/functions"
                            onClick={() => localStorage.setItem('vacancyName', vacancyName)}
                        >
                            Следующий шаг
                        </Button>
                    </Box>
                </Stack>  
            </Stack>
        </>
    );
};

export default Title;