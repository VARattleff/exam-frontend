import { useSnackbar } from "notistack";

function useError() {
    const { enqueueSnackbar } = useSnackbar();

    const handleError = (e: any) => {
        console.error(e);
        enqueueSnackbar(`An error occurred:\n${e.message}`, {
            variant: "error",
            preventDuplicate: true,
            persist: false,
        });
        throw e;
    };

    return { handleError };
}

export default useError;
