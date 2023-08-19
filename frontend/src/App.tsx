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
                height: "100vh"
            }} 
            maxWidth="xs"
        >
            <Router />
        </Container> 
    );
}

export default App;
