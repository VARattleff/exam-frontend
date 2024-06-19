import { useEffect, useState } from "react";
import type { TTestType } from "../types/test.type.ts";
import Api from "../utils/Api.tsx";
import useSucces from "./useSucces.tsx";
import useError from "./useError.tsx";

/**
 * Custom hook to CRUD test data
 */
function useTest() {
    const { showSuccess } = useSucces();
    const { handleError } = useError();
    const [testData, setTestData] = useState<TTestType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getTestData = async (): Promise<void> => {
        setIsLoading(true);
        try {
            const data: TTestType[] = await Api.get("tests");
            setTestData(data);
        } catch (error) {
            handleError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const createTestData = async (data: TTestType): Promise<void> => {
        setIsLoading(true);
        try {
            const res = await Api.post("tests", data);
            setTestData((prev) => [...prev, res]);
            showSuccess("Test Data created");
        } catch (error) {
            handleError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getTestData().then(() => console.log("Data fetched"));
    }, []);

    return {
        testData,
        isLoading,
        createTestData
    };
}

export default useTest;
