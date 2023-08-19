import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

type VacancyButton = 'primary' | 'success';

const Rewriter: React.FC = () => {
    const [vacancyButton, setVacancyButton] = useState<VacancyButton>('primary');
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="start"
            spacing={3} 
        >
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <Typography variant="h6" component="h2">Переписать существующую вакансию</Typography> 
            </Box>
            <Stack
                direction="column"
                justifyContent="center"
                spacing={1}
                sx={{ width: "100%" }}
            >
                <Typography variant="body1" component="p">
                    Вставьте ссылку на вакансию hh.ru
                </Typography>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue=""
                    variant="filled"
                    size="small"
                    fullWidth
                    sx={{ paddingBottom: "5px" }}
                />
                <Button variant="contained" href="">
                    Переписать
                </Button>
            </Stack>
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
                    rows={18}
                    defaultValue=""
                    variant="filled"
                    fullWidth
                    sx={{ paddingBottom: "5px" }}
                />
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <Button variant="outlined" href="/">
                        Вернуться
                    </Button>
                    <Button variant="contained" href="" color={vacancyButton}>
                        Сохранить вакансию
                    </Button>
                </Box>
            </Stack>  
        </Stack>
    );
};

export default Rewriter;
