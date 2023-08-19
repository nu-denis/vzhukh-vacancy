import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function BasicBreadcrumbs() {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            sx={{ backgroundColor: "#eee", padding: "10px", borderRadius: "5px" }}
        >
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    color="inherit" 
                    href="/creator/title"
                    onClick={() => {
                        console.info("I'm a button.");
                    }}
                >
                    Название
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/creator/functions"
                >
                    Обязанности
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/creator/prerequisites"
                >
                    Требования
                </Link>
            </Breadcrumbs>
        </Stack>
    );
}