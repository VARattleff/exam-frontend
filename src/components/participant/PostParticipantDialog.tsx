import { TParticipantCreate } from "../../types/participant.type.ts";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";

type TPostParticipantDialogProbs = {
    open: boolean;
    handleClose: () => void;
    createParticipant: (newParticipant: TParticipantCreate) => void;
};

function PostParticipantDialog({
    open,
    handleClose,
    createParticipant
}: TPostParticipantDialogProbs) {
    console.log(open, handleClose, createParticipant);

    const handleUpdate = () => {
        // createParticipant(formData);
        handleClose();
    }

    //TGender

  /*  type TParticipantCreate = {
        fullName: string;
        age: number;
        gender: TGender;
        adjacentClub: string;
        country: TCountry;
        disciplines: { id: number }[];
    };*/

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Create new participant</DialogTitle>
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
                                label="FullName"
                                fullWidth
                                variant="outlined"
                                name="fullName"
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
                            />

                        </Grid>

                        <Grid
                            item
                            xs={6}
                        >
                            <TextField
                                label="Gender"
                                fullWidth
                                type="select"
                                variant="outlined"
                                name="gender"
                            />

                        </Grid>

                        <Grid
                            item
                            xs={6}
                        >
                            <TextField
                                label="Country"
                                fullWidth
                                type="select"
                                variant="outlined"
                                name="country"
                            />

                        </Grid>

                        <Grid
                            item
                            xs={6}
                        >
                            <TextField
                                label="Disciplines"
                                fullWidth
                                type="select"
                                variant="outlined"
                                name="disciplines"
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

export default PostParticipantDialog;
