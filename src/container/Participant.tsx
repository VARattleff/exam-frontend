import { DataGrid } from '@mui/x-data-grid';
import useParticipant from "../hooks/useParticipant.tsx";
import LoadingSpinner from "../components/LoadingSpinner.tsx";
import { Paper } from "@mui/material";

function Participant() {
    const { participants, isLoading } = useParticipant();

    const columns = [
        { field: 'fullName', headerName: 'Full Name', width: 200 },
        { field: 'age', headerName: 'Age', width: 100 },
        { field: 'gender', headerName: 'Gender', width: 100 },
        { field: 'adjacentClub', headerName: 'Adjacent Club', width: 200 },
        { field: 'ageGroup', headerName: 'Age Group', width: 150 },
        { field: 'country', headerName: 'Country', width: 150 },
        { field: 'disciplines', headerName: 'Disciplines', width: 200 },
        {field: 'update', headerName: 'viewDetails', width: 200},
        {field: 'delete', headerName: 'Delete', width: 200}

    ];

    const rows = participants.map(participant => ({
        id: participant.id,
        fullName: participant.fullName,
        age: participant.age,
        gender: participant.gender,
        adjacentClub: participant.adjacentClub,
        ageGroup: participant.ageGroup,
        country: participant.country,
        disciplines: participant.disciplines.map(discipline => discipline.name).join(', ')
    }));

    return (
        <>
            {isLoading && <LoadingSpinner /> }
                <Paper
                    elevation={3}
                    sx={{
                        padding: 2,
                        margin: 2,
                        borderRadius: 2
                    }}
                >
                    <DataGrid rows={rows} columns={columns}   />
                </Paper>

        </>
    );
}

export default Participant;
