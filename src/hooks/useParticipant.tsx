import { useEffect, useState } from "react";
import type { TParticipant } from "../types/participant.type.ts";
import useSucces from "./useSucces.tsx";
import useError from "./useError.tsx";
import Api from "../utils/Api.tsx";

function useParticipant () {
    const [participants, setParticipants] = useState<TParticipant[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { showSuccess } = useSucces();
    const { handleError } = useError();

    useEffect(() => {
        getParticipants();
    }, []);

    const getParticipants = async (): Promise<void> => {
        setIsLoading(true);
        try {
            const res = await Api.get("participants");
            setParticipants(res);
            showSuccess("Participants loaded");
        } catch (error) {
            handleError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        participants,
        isLoading,

    };

}

export default useParticipant;