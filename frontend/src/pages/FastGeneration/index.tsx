import React, { useState, useCallback, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { getVacancyText } from '../../api/requests';
import { UserInput } from '../../models/userInput';

const FastGeneration: React.FC = () => {
    const [workerDescription, setWorkerDescription] = useState<string>(localStorage.getItem('workerDescription') || '');
    const [aboutCompany, setAboutCompany] = useState<string>(localStorage.getItem('aboutCompany') || '');
    const [vacancyText, setVacancyText] = useState<string>(localStorage.getItem('vacancyText') || '');

    const vacancyHandler = useCallback(async(data: UserInput) => {
        console.log('request');
        const vacancy = await getVacancyText(data.workerDescription, data.aboutCompany);
        console.log('response');
        setVacancyText(vacancy);
    }, [workerDescription, aboutCompany, vacancyText])

    return (
        <>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="start"
                spacing={3} 
            >
                <Box sx={{ display: "flex", justifyContent: "center", width: "calc(100% - 40px)", padding: "20px 20px 0px" }}>
                    <Typography variant="h6" component="h2">Быстрая генерация</Typography> 
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
                        onClick={() => {
                            vacancyHandler({ workerDescription, aboutCompany });
                        }}
                    >
                        Получить вакансию
                    </Button>
                </Stack>
                <Stack
                    direction="column"
                    justifyContent="center"
                    spacing={1}
                    sx={{ width: "100%" }}
                >
                    <TextField
                        hiddenLabel
                        id="filled-multiline-static"
                        onChange={(e) => {
                            setVacancyText(e.target.value);
                            localStorage.setItem('vacancyText', e.target.value);
                        }}
                        multiline
                        rows={10}
                        defaultValue={vacancyText}
                        variant="filled"
                        fullWidth
                        sx={{ paddingBottom: "5px" }}
                    />
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <Button
                            variant="outlined"
                            href="/"
                            onClick={() => localStorage.setItem('vacancyText', '')}
                        >
                            Вернуться
                        </Button>
                        <Button
                            variant="contained"
                            href=""
                            onClick={() => localStorage.setItem('vacancyText', vacancyText)}
                        >
                            Сохранить вакансию
                        </Button>
                    </Box>
                </Stack>  
            </Stack>
        </>
    );
};

export default FastGeneration;