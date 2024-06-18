import { stdTheme } from "./theme/theme.tsx";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "./container/Home.tsx";
import TestContainer from "./container/TestContainer.tsx";
import FallBack from "./container/FallBack.tsx";
import { SnackbarProvider } from "notistack";

function App() {
    return (
        <>
            <SnackbarProvider maxSnack={3}>
                <ThemeProvider theme={stdTheme}>
                    <CssBaseline />
                    <NavBar />
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/test"
                            element={<TestContainer />}
                        />
                        <Route
                            path="/*"
                            element={<FallBack />}
                        />
                    </Routes>
                </ThemeProvider>
            </SnackbarProvider>
        </>
    );
}

export default App;
