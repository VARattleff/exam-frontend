import React, { useState } from "react";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { Button, Paper, TextField, Typography } from "@mui/material";
import LoadingSpinner from "../components/LoadingSpinner.tsx";
import useResult from "../hooks/useResult.tsx";
import PostResultDialog from "../components/result/PostResultDialog.tsx";

function Result() {
    const { result, isLoading, createResult, updateResult, deleteResult } =
        useResult();
    const [searchText, setSearchText] = useState("");
    const [openPost, setOpenPost] = useState(false);

    const handleClose = () => {
        setOpenPost(false);
    };

    const handleOpenPost = () => {
        setOpenPost(true);
    };

    const handleDelete = (id: number) => {
        deleteResult(id);
    }

    console.log(updateResult);

    const handleSearchChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setSearchText(e.target.value);
    };

    for (const discipline of result) {
        console.log(discipline.ageGroup);
    }

    const columns = [
        { field: "disciplineName", headerName: "Discipline Name", width: 200 },
        { field: "resultsType", headerName: "Results Type", width: 200 },
        { field: "resultValue", headerName: "Result Value", width: 200 },
        { field: "resultDate", headerName: "Result Date", width: 200 },
        {
            field: "participantName",
            headerName: "Participant Name",
            width: 200
        },
        { field: "ageGroup", headerName: "Age Group", width: 200 },
        { field: "gender", headerName: "Gender", width: 200 },
        { field: "adjacentClub", headerName: "Adjacent Club", width: 200 },
        {
            field: "update",
            headerName: "Update",
            width: 200,
            renderCell: (params: GridCellParams) => (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => console.log(params.row.id)}
                >
                    Update
                </Button>
            )
        },
        {
            field: "delete",
            headerName: "Delete",
            width: 200,
            renderCell: (params: GridCellParams) => (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleDelete(params.row.id as number)}
                >
                    Delete
                </Button>
            )
        }
    ];

    const filteredDisciplines = result.filter(
        (discipline) =>
            discipline.disciplineName
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
            discipline.resultsType
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
            discipline.resultValue
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
            discipline.resultDate
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
            discipline.participantName
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
            discipline.ageGroup
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
            discipline.gender
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
            discipline.adjacentClub
                .toLowerCase()
                .includes(searchText.toLowerCase())
    );

    const rows = filteredDisciplines.map((resultItem) => ({
        id: resultItem.id,
        disciplineName: resultItem.disciplineName,
        resultsType: resultItem.resultsType,
        resultValue: resultItem.resultValue,
        resultDate: resultItem.resultDate,
        participantName: resultItem.participantName,
        ageGroup: resultItem.ageGroup,
        gender: resultItem.gender,
        adjacentClub: resultItem.adjacentClub
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
                <Typography sx={{ fontSize: "2em" }}>
                    Result list and Crud operations
                </Typography>

                <br />
                <hr />
                <br />

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
                        variant={"outlined"}
                        onClick={handleOpenPost}
                    >
                        Create new Result
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
            <PostResultDialog
                open={openPost}
                handleClose={handleClose}
                createResult={createResult}
            />
        </>
    );
}

export default Result;
