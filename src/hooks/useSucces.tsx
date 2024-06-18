import { useSnackbar } from "notistack";

function useSucces() {
    const { enqueueSnackbar } = useSnackbar();

    const showSuccess = (message: string) => {
        enqueueSnackbar(message, {
            variant: "success",
            preventDuplicate: true,
            persist: false, });
    };

    return { showSuccess };
}

export default useSucces;
