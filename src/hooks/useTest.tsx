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
    const [isLoading, setIsLoading] = useState<boolean | null>(null);

    const getTestData = async (): Promise<void> => {
        setIsLoading(true);
        try {
            const data: TTestType[] = await Api.get("tests");
            setTestData(data);
            showSuccess("Data fetched");
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
        isLoading
    };
}

export default useTest;
