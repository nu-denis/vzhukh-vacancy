import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function BasicBreadcrumbs() {
    return (
        <Stack
            direction="row"
            justifyContent="center"
        >
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    color="inherit" 
                    href="/creater/title"
                    onClick={() => {
                        console.info("I'm a button.");
                    }}
                >
                    Название
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/creater/functions"
                >
                    Обязанности
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/creater/prerequisites"
                >
                    Требования
                </Link>
            </Breadcrumbs>
        </Stack>
    );
}