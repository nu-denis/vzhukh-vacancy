import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Breadcrumbs from '../../compontents/Breadcrumbs';

const Prerequisites: React.FC = () => {
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
                    <Typography variant="h6" component="h2">Создать новую вакансию</Typography> 
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
                        sx={{ paddingBottom: "5px" }}
                    />
                    <Button variant="contained" href="">
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
                        Ваша вакансия
                    </Typography>
                    <TextField
                        hiddenLabel
                        id="filled-multiline-static"
                        multiline
                        rows={12}
                        defaultValue=""
                        variant="filled"
                        fullWidth
                        sx={{ paddingBottom: "5px" }}
                    />
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <Button variant="outlined" href="/creator/functions">
                            Вернуться
                        </Button>
                        <Button variant="contained" href="">
                            Сохранить изменения
                        </Button>
                    </Box>
                </Stack>  
            </Stack>
        </>
    );
};

export default Prerequisites;