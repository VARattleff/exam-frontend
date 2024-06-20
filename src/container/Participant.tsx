import { DataGrid } from "@mui/x-data-grid";
import useParticipant from "../hooks/useParticipant.tsx";
import LoadingSpinner from "../components/LoadingSpinner.tsx";
import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import PostParticipantDialog from "../components/participant/PostParticipantDialog.tsx";

function Participant() {
    const { participants, isLoading, createParticipant } = useParticipant();
    const [searchText, setSearchText] = useState("");
    const [openPost, setOpenPost] = useState(false);

    const handleOpenPost = () => {
        setOpenPost(true);
    };

    const handleSearchChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setSearchText(e.target.value);
    };

    const handleClose = () => {
        setOpenPost(false);
    };

    const columns = [
        { field: "fullName", headerName: "Full Name", width: 200 },
        { field: "age", headerName: "Age", width: 100 },
        { field: "gender", headerName: "Gender", width: 100 },
        { field: "adjacentClub", headerName: "Adjacent Club", width: 200 },
        { field: "ageGroup", headerName: "Age Group", width: 150 },
        { field: "country", headerName: "Country", width: 150 },
        { field: "disciplines", headerName: "Disciplines", width: 200 },
        { field: "update", headerName: "viewDetails", width: 200 },
        { field: "delete", headerName: "Delete", width: 200 }
    ];

    const filteredParticipants = participants.filter(
        (participant) =>
            participant.fullName
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
            participant.age.toString().includes(searchText) ||
            participant.gender
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
            participant.adjacentClub
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
            participant.ageGroup
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
            participant.country
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
            participant.disciplines.some((discipline) =>
                discipline.name.toLowerCase().includes(searchText.toLowerCase())
            )
    );

    const rows = filteredParticipants.map((participant) => ({
        id: participant.id,
        fullName: participant.fullName,
        age: participant.age,
        gender: participant.gender,
        adjacentClub: participant.adjacentClub,
        ageGroup: participant.ageGroup,
        country: participant.country,
        disciplines: participant.disciplines
            .map((discipline) => discipline.name)
            .join(", ")
    }));

    return (
        <>
            {isLoading && <LoadingSpinner />}
            <Paper
                elevation={3}
                sx={{
                    padding: 2,
                    margin: 2,
                    borderRadius: 2
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                    }}
                >
                    <TextField
                        label="Search"
                        variant="outlined"
                        value={searchText}
                        onChange={(e) => handleSearchChange(e)}
                    />

                    <Button
                        onClick={handleOpenPost}
                        variant={"outlined"}
                    >
                        Create new participant
                    </Button>
                </div>

                <Paper
                    elevation={3}
                    sx={{
                        padding: 2,
                        margin: 2,
                        borderRadius: 2
                    }}
                >
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        autoHeight
                    />
                </Paper>
            </Paper>
            <PostParticipantDialog
                open={openPost}
                handleClose={handleClose}
                createParticipant={createParticipant}
            />
        </>
    );
}

export default Participant;
