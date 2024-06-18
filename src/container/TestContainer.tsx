import { Paper } from "@mui/material";
import useTest from "../hooks/useTest.tsx";

import LoadingSpinner from "../components/LoadingSpinner.tsx";

/**
 * TestContainer component.
 */
function TestContainer() {
    const { testData, isLoading: isTestDataLoading } = useTest();

    return (
        <>
            {!!isTestDataLoading && <LoadingSpinner />}
            <Paper
                elevation={3}
                sx={{
                    padding: 2,
                    margin: 2,
                    borderRadius: 2
                }}
            >
                {testData.map((test, index) => (
                    <div key={index}>
                        <h2>{test.name}</h2>
                        <p>{test.age}</p>
                    </div>
                ))}
            </Paper>
        </>
    );
}

export default TestContainer;
