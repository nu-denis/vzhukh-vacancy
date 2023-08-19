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
            <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "12px" }}>
                <Link
                    underline="hover"
                    color="inherit" 
                    href="/creator/title"
                >
                    1. Название
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/creator/functions"
                >
                    2. Обязанности
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/creator/prerequisites"
                >
                    3. Требования
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/creator/result"
                >
                    4. Результат
                </Link>
            </Breadcrumbs>
        </Stack>
    );
}