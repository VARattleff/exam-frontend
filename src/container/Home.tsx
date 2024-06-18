import { stdTheme } from "../theme/theme.tsx";
import {
    Container,
    IconButton,
    Link,
    Tooltip,
    Typography,
    Paper
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
    return (
        <>
            <Paper
                elevation={3}
                sx={{
                    padding: 2,
                    margin: 2,
                    borderRadius: 2
                }}
            >
                <h1>Home</h1>
            </Paper>

            <footer
                style={{
                    backgroundColor: stdTheme.palette.primary.main,
                    position: "fixed",
                    bottom: 0,
                    width: "100%"
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        variant="body2"
                        align="center"
                        style={{ fontSize: "1rem" }}
                    >
                        &#169; Made by Viktor Rattleff
                        <Tooltip title="Github">
                            <IconButton
                                component={Link}
                                href="https://github.com/VARattleff"
                                target="_blank"
                                color="inherit"
                            >
                                <GitHubIcon />
                            </IconButton>
                        </Tooltip>
                    </Typography>
                </Container>
            </footer>
        </>
    );
}

export default Home;
