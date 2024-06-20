import {
    TCountry,
    TGender,
    TParticipantCreate
} from "../../types/participant.type.ts";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Select,
    DialogTitle,
    Grid,
    TextField,
    MenuItem,
    SelectChangeEvent,
    FormControl,
    InputLabel
} from "@mui/material";
import useDiscipline from "../../hooks/useDiscipline.tsx";
import OutlinedInput from "@mui/material/OutlinedInput";
import { ChangeEvent, useState } from "react";

type TPostParticipantDialogProbs = {
    open: boolean;
    handleClose: () => void;
    createParticipant: (newParticipant: TParticipantCreate) => void;
    genderArr: TGender[];
    countriesArr: TCountry[];
};

function PostParticipantDialog({
    open,
    handleClose,
    createParticipant,
    genderArr,
    countriesArr
}: TPostParticipantDialogProbs) {
    const { discipline, isLoading: disciplineLoading } = useDiscipline();

    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState<TGender>("OTHER");
    const [country, setCountry] = useState<TCountry>("DENMARK");
    const [selectedDisciplines, setSelectedDisciplines] = useState<number[]>(
        []
    );
    const [adjacentClub, setAdjacentClub] = useState("");

    const handleFullNameChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFullName(e.target.value);
    };

    console.log(disciplineLoading);

    const handleAgeChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setAge(Number(e.target.value));
    };

    const handleGenderChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setGender(e.target.value as TGender);
    };

    const handleCountryChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setCountry(e.target.value as TCountry);
    };

    const handleDisciplinesChange = (e: SelectChangeEvent<number[]>) => {
        setSelectedDisciplines(e.target.value as number[]);
    };

    const handleAdjacentClubChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setAdjacentClub(e.target.value as string);
    };

    const handleUpdate = () => {
        const newParticipant: TParticipantCreate = {
            fullName,
            age,
            gender,
            country,
            disciplines: selectedDisciplines.map((id) => ({ id })),
            adjacentClub
        };

        createParticipant(newParticipant);
        handleClose();
    };

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
                                value={fullName}
                                onChange={(e) => handleFullNameChange(e)}
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
                                value={age}
                                onChange={(e) => handleAgeChange(e)}
                            />
                        </Grid>

                        <Grid
                            item
                            xs={6}
                        >
                            <TextField
                                select
                                label="Gender"
                                fullWidth
                                variant="outlined"
                                name="gender"
                                value={gender}
                                onChange={(e) => handleGenderChange(e)}
                            >
                                {genderArr.map((gender) => (
                                    <MenuItem value={gender}>{gender}</MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid
                            item
                            xs={6}
                        >
                            <TextField
                                select
                                label="Country"
                                fullWidth
                                variant="outlined"
                                name="country"
                                value={country}
                                onChange={(e) => handleCountryChange(e)}
                            >
                                {countriesArr.map((country) => (
                                    <MenuItem value={country}>
                                        {country}
                                    </MenuItem>
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
                                    Disciplines
                                </InputLabel>
                                <Select
                                    label="Disciplines"
                                    fullWidth
                                    variant="outlined"
                                    name="disciplines"
                                    input={
                                        <OutlinedInput label="Disciplines" />
                                    }
                                    multiple
                                    value={selectedDisciplines}
                                    onChange={(e) => handleDisciplinesChange(e)}
                                >
                                    {discipline.map((disc, index) => (
                                        <MenuItem
                                            key={index}
                                            value={disc.id}
                                        >
                                            {disc.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid
                            item
                            xs={6}
                        >
                            <TextField
                                label="Club"
                                fullWidth
                                variant="outlined"
                                name="adjacentClub"
                                value={adjacentClub}
                                onChange={(e) => handleAdjacentClubChange(e)}
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
