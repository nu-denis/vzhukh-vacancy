import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    
}

export default function BasicBreadcrumbs() {
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/creater/title">
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
        </div>
    );
}