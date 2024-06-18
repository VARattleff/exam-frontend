import { useSnackbar } from "notistack";

/**
 * Custom hook to handle errors
 */
function useError() {
    const { enqueueSnackbar } = useSnackbar();

    /**
     * Handle an error
     * @param e
     */
    const handleError = (e: any) => {
        console.error(e);
        enqueueSnackbar(`An error occurred:\n${e.message}`, {
            variant: "error",
            preventDuplicate: true,
            persist: false
        });
        throw e;
    };

    return { handleError };
}

export default useError;
