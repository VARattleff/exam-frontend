import {
    Dialog,
    DialogTitle,
    DialogContent,
    Grid,
    TextField,
    DialogActions,
    Button
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import type { TTestType } from "../types/test.type.ts";

type TCreateTestDataDialogProps = {
    open: boolean;
    handleClose: () => void;
    createTestData: (newTestData: TTestType) => void;
};

function CreateTestDataDialog({
    open,
    handleClose,
    createTestData
}: TCreateTestDataDialogProps) {
    const [formData, setFormData] = useState<TTestType>({
        name: "",
        age: 0
    });

    const handleUpdate = () => {
        createTestData(formData);
        handleClose();
    };

    const handleSetFormData = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Create testdata</DialogTitle>
                <br />
                <DialogContent>
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid
                            item
                            xs={6}
                        >
                            <TextField
                                label="Name"
                                fullWidth
                                variant="outlined"
                                name="name"
                                onChange={(e) => handleSetFormData(e)}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <TextField
                                label="Age"
                                fullWidth
                                type="number"
                                variant="outlined"
                                name="age"
                                onChange={(e) => handleSetFormData(e)}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default CreateTestDataDialog;
