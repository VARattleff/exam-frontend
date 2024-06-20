import useParticipant from "../../hooks/useParticipant.tsx";
import { ChangeEvent, useEffect, useState } from "react";
import { TDisciplineCreateAndUpdate, TResultsType } from "../../types/discipline.type.ts";
import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Grid, InputLabel,
    MenuItem, Select,
    SelectChangeEvent,
    TextField
} from "@mui/material";
import LoadingSpinner from "../LoadingSpinner.tsx";
import OutlinedInput from "@mui/material/OutlinedInput";

type TPostDisciplineDialogProps = {
    open: boolean;
    handleClose: () => void;
    updateDiscipline: (updatedDiscipline: TDisciplineCreateAndUpdate, id: number) => Promise<void>;
    resultsTypeArr: TResultsType[];
    selectedDiscipline: TDisciplineCreateAndUpdate;
};

function PutDisciplineDialog ({open, handleClose, updateDiscipline, resultsTypeArr, selectedDiscipline}: TPostDisciplineDialogProps) {
    const { participants, isLoading: participantsLoading } = useParticipant();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [resultsType, setResultsType] = useState<TResultsType>("POINTS");
    const [selectedParticipants, setSelectedParticipants] = useState<number[]>([]);

    useEffect(() => {
        if (selectedDiscipline) {
            setName(selectedDiscipline.name);
            setDescription(selectedDiscipline.description);
            setResultsType(selectedDiscipline.resultsType);
            if (selectedDiscipline.participants) {
                setSelectedParticipants(
                    selectedDiscipline.participants.map((part) => part.id)
                );
            }
        }
    }, [selectedDiscipline]);


    const handleDisciplineNameChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setName(e.target.value as string);
    }

    const handleSetDescription = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDescription(e.target.value as string);
    }

    const handleResultsTypeChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setResultsType(e.target.value as TResultsType);
    }

    const handleParticipantsChange = (e: SelectChangeEvent<number[]>) => {
        setSelectedParticipants(e.target.value as number[]);
    }


    const handleCreate = () => {
        const updatedDiscipline: TDisciplineCreateAndUpdate = {
            name,
            description,
            resultsType,
            participants: selectedParticipants.map(id => ({ id })),
        };

        updateDiscipline(updatedDiscipline, selectedDiscipline.id as number);

        handleClose();
    }


    return (
        <>
            {participantsLoading && <LoadingSpinner />}
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Create new Disciplin</DialogTitle>
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
                                label="Disciplin Name"
                                fullWidth
                                variant="outlined"
                                name="name"
                                value={name}
                                onChange={(e) => handleDisciplineNameChange(e)}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <TextField
                                label="Description "
                                fullWidth
                                variant="outlined"
                                name="description"
                                value={description}
                                onChange={(e) => handleSetDescription(e)}
                            />
                        </Grid>


                        <Grid
                            item
                            xs={6}
                        >
                            <TextField
                                select
                                label="Results Type"
                                fullWidth
                                variant="outlined"
                                name="resultsType"
                                value={resultsType}
                                onChange={(e) => handleResultsTypeChange(e)}
                            >
                                {resultsTypeArr.map((resultsType) => (
                                    <MenuItem value={resultsType}>{resultsType}</MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid
                            item
                            xs={6}
                        >
                            <FormControl
                                fullWidth
                                variant="outlined"
                            >
                                <InputLabel id="disciplines-label">
                                    Participants
                                </InputLabel>
                                <Select
                                    label="Participants"
                                    fullWidth
                                    variant="outlined"
                                    name="participants"
                                    input={
                                        <OutlinedInput label="Participants" />
                                    }
                                    multiple
                                    value={selectedParticipants}
                                    onChange={(e) => handleParticipantsChange(e)}
                                >
                                    {participants.map((part, index) => (
                                        <MenuItem
                                            key={index}
                                            value={part.id}
                                        >
                                            {part.fullName}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleCreate}>Create</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default PutDisciplineDialog;