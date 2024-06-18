import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Tooltip,
    Box,
    useTheme
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ActivitiesIcon from "@mui/icons-material/LocalActivity";
import { useNavigate } from "react-router-dom";

/**
 * Navbar component.
 */
export default function Navbar() {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: "none",
                borderBottom: `1px solid ${theme.palette.divider}`
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        color: theme.palette.text.primary,
                        fontWeight: "bold",
                        cursor: "pointer",
                        "&:hover": {
                            color: theme.palette.primary.main
                        }
                    }}
                    onClick={() => navigate("/")}
                >
                    <Box
                        component="span"
                        sx={{ color: theme.palette.primary.main }}
                    >
                        V
                    </Box>
                    iktor
                    <Box
                        component="span"
                        sx={{ color: theme.palette.primary.main }}
                    >
                        R
                    </Box>
                    attleff
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Tooltip title="Hjem">
                        <IconButton
                            component={Link}
                            to="/"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <HomeIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="test">
                        <IconButton
                            component={Link}
                            to="/test"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <ActivitiesIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
