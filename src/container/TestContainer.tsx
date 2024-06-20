import { Button, Paper } from "@mui/material";
import useTest from "../hooks/useTest.tsx";

import LoadingSpinner from "../components/LoadingSpinner.tsx";
import { useState } from "react";
import CreateTestDataDialog from "../components/CreateTestDataDialog.tsx";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";

/**
 * TestContainer component.
 */
function TestContainer() {
    const {
        testData,
        isLoading: isTestDataLoading,
        createTestData
    } = useTest();
    const [openPostDialog, setOpenPostDialog] = useState<boolean>(false);

    const handleClose = () => {
        setOpenPostDialog(false);
    };

    const handleOpen = () => {
        setOpenPostDialog(true);
    };

    return (
        <>
            {isTestDataLoading && <LoadingSpinner />}
            <Paper
                elevation={3}
                sx={{
                    padding: 2,
                    margin: 2,
                    borderRadius: 2
                }}
            >
                <Button
                    onClick={handleOpen}
                    variant={"outlined"}
                >
                    Create test data
                </Button>

                <TableContainer component={Paper}>
                    <Table
                        sx={{ minWidth: 650 }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell size="small">Name </TableCell>
                                <TableCell size="small"> age </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {testData &&
                                testData.map((data, index) => (
                                    <TableRow key={index}>
                                        <TableCell
                                            size="small"
                                            component="th"
                                            scope="row"
                                        >
                                            {data.name}
                                        </TableCell>
                                        <TableCell size="small">
                                            {data.age}
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <CreateTestDataDialog
                open={openPostDialog}
                handleClose={handleClose}
                createTestData={createTestData}
            />
        </>
    );
}

export default TestContainer;
