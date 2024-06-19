import { Button, Paper } from "@mui/material";
import useTest from "../hooks/useTest.tsx";

import LoadingSpinner from "../components/LoadingSpinner.tsx";
import { useState } from "react";
import CreateTestDataDialog from "../components/CreateTestDataDialog.tsx";

/**
 * TestContainer component.
 */
function TestContainer() {
    const {
        testData,
        isLoading: isTestDataLoading,
        createTestData
    } = useTest();
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
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
                {testData &&
                    testData.map((test, index) => (
                        <div key={index}>
                            <h2>{test.name}</h2>
                            <p>{test.age}</p>
                        </div>
                    ))}
            </Paper>
            <CreateTestDataDialog
                open={open}
                handleClose={handleClose}
                createTestData={createTestData}
            />
        </>
    );
}

export default TestContainer;
