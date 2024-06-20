import { TDiscipline } from "../types/discipline.type.ts";
import { useEffect, useState } from "react";
import useSucces from "./useSucces.tsx";
import useError from "./useError.tsx";
import Api from "../utils/Api.tsx";

function useDiscipline () {
    const [discipline, setDiscipline] = useState<TDiscipline[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { showSuccess } = useSucces();
    const { handleError } = useError();

    useEffect(() => {
        getDiscipline();
    }, []);

    const getDiscipline = async (): Promise<void> => {
        setIsLoading(true);
        try {
            const res = await Api.get("disciplines");
            setDiscipline(res);
            showSuccess("Discipline loaded");
        } catch (error) {
            handleError(error);
        } finally {
            setIsLoading(false);
        }
    };


    return {
        discipline,
        isLoading,
    }
}

export default useDiscipline;