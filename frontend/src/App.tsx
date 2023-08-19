import Container from '@mui/material/Container';
import Router from './modules/router';
import './App.css';

function App() {
    return (
        <Container 
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: "100vh",
                padding: "10px 0",
            }} 
            maxWidth="xs"
        >
            <Router />
        </Container> 
    );
}

export default App;
