import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const FastGeneration: React.FC = () => {
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
                        multiline
                        rows={3}
                        defaultValue=""
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
                        defaultValue=""
                        variant="filled"
                        fullWidth
                        sx={{ paddingBottom: "5px" }}
                    />
                    <Button variant="contained" href="">
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
                        multiline
                        rows={10}
                        defaultValue=""
                        variant="filled"
                        fullWidth
                        sx={{ paddingBottom: "5px" }}
                    />
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <Button variant="outlined" href="/">
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

export default FastGeneration;