import { DataGrid } from "@mui/x-data-grid";
import useParticipant from "../hooks/useParticipant.tsx";
import LoadingSpinner from "../components/LoadingSpinner.tsx";
import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import PostParticipantDialog from "../components/participant/PostParticipantDialog.tsx";
import { TCountry, TGender } from "../types/participant.type.ts";

const genderArr: TGender[] = ["MALE", "FEMALE", "OTHER"];

const countriesArr: TCountry[] = [
    "AFGHANISTAN",
    "ALBANIA",
    "ALGERIA",
    "ANDORRA",
    "ANGOLA",
    "ANTIGUA_AND_BARBUDA",
    "ARGENTINA",
    "ARMENIA",
    "AUSTRALIA",
    "AUSTRIA",
    "AZERBAIJAN",
    "BAHAMAS",
    "BAHRAIN",
    "BANGLADESH",
    "BARBADOS",
    "BELARUS",
    "BELGIUM",
    "BELIZE",
    "BENIN",
    "BHUTAN",
    "BOLIVIA",
    "BOSNIA_AND_HERZEGOVINA",
    "BOTSWANA",
    "BRAZIL",
    "BRUNEI",
    "BULGARIA",
    "BURKINA_FASO",
    "BURUNDI",
    "CABO_VERDE",
    "CAMBODIA",
    "CAMEROON",
    "CANADA",
    "CENTRAL_AFRICAN_REPUBLIC",
    "CHAD",
    "CHILE",
    "CHINA",
    "COLOMBIA",
    "COMOROS",
    "CONGO_DEMOCRATIC_REPUBLIC",
    "CONGO_REPUBLIC",
    "COSTA_RICA",
    "COTE_DIVOIRE",
    "CROATIA",
    "CUBA",
    "CYPRUS",
    "CZECH_REPUBLIC",
    "DENMARK",
    "DJIBOUTI",
    "DOMINICA",
    "DOMINICAN_REPUBLIC",
    "ECUADOR",
    "EGYPT",
    "EL_SALVADOR",
    "EQUATORIAL_GUINEA",
    "ERITREA",
    "ESTONIA",
    "ESWATINI",
    "ETHIOPIA",
    "FIJI",
    "FINLAND",
    "FRANCE",
    "GABON",
    "GAMBIA",
    "GEORGIA",
    "GERMANY",
    "GHANA",
    "GREECE",
    "GRENADA",
    "GUATEMALA",
    "GUINEA",
    "GUINEA_BISSAU",
    "GUYANA",
    "HAITI",
    "HONDURAS",
    "HUNGARY",
    "ICELAND",
    "INDIA",
    "INDONESIA",
    "IRAN",
    "IRAQ",
    "IRELAND",
    "ISRAEL",
    "ITALY",
    "JAMAICA",
    "JAPAN",
    "JORDAN",
    "KAZAKHSTAN",
    "KENYA",
    "KIRIBATI",
    "KOREA_NORTH",
    "KOREA_SOUTH",
    "KOSOVO",
    "KUWAIT",
    "KYRGYZSTAN",
    "LAOS",
    "LATVIA",
    "LEBANON",
    "LESOTHO",
    "LIBERIA",
    "LIBYA",
    "LIECHTENSTEIN",
    "LITHUANIA",
    "LUXEMBOURG",
    "MADAGASCAR",
    "MALAWI",
    "MALAYSIA",
    "MALDIVES",
    "MALI",
    "MALTA",
    "MARSHALL_ISLANDS",
    "MAURITANIA",
    "MAURITIUS",
    "MEXICO",
    "MICRONESIA",
    "MOLDOVA",
    "MONACO",
    "MONGOLIA",
    "MONTENEGRO",
    "MOROCCO",
    "MOZAMBIQUE",
    "MYANMAR",
    "NAMIBIA",
    "NAURU",
    "NEPAL",
    "NETHERLANDS",
    "NEW_ZEALAND",
    "NICARAGUA",
    "NIGER",
    "NIGERIA",
    "NORTH_MACEDONIA",
    "NORWAY",
    "OMAN",
    "PAKISTAN",
    "PALAU",
    "PALESTINE",
    "PANAMA",
    "PAPUA_NEW_GUINEA",
    "PARAGUAY",
    "PERU",
    "PHILIPPINES",
    "POLAND",
    "PORTUGAL",
    "QATAR",
    "ROMANIA",
    "RUSSIA",
    "RWANDA",
    "SAINT_KITTS_AND_NEVIS",
    "SAINT_LUCIA",
    "SAINT_VINCENT_AND_THE_GRENADINES",
    "SAMOA",
    "SAN_MARINO",
    "SAO_TOME_AND_PRINCIPE",
    "SAUDI_ARABIA",
    "SENEGAL",
    "SERBIA",
    "SEYCHELLES",
    "SIERRA_LEONE",
    "SINGAPORE",
    "SLOVAKIA",
    "SLOVENIA",
    "SOLOMON_ISLANDS",
    "SOMALIA",
    "SOUTH_AFRICA",
    "SOUTH_SUDAN",
    "SPAIN",
    "SRI_LANKA",
    "SUDAN",
    "SURINAME",
    "SWEDEN",
    "SWITZERLAND",
    "SYRIA",
    "TAIWAN",
    "TAJIKISTAN",
    "TANZANIA",
    "THAILAND",
    "TIMOR_LESTE",
    "TOGO",
    "TONGA",
    "TRINIDAD_AND_TOBAGO",
    "TUNISIA",
    "TURKEY",
    "TURKMENISTAN",
    "TUVALU",
    "UGANDA",
    "UKRAINE",
    "UNITED_ARAB_EMIRATES",
    "UNITED_KINGDOM",
    "UNITED_STATES",
    "URUGUAY",
    "UZBEKISTAN",
    "VANUATU",
    "VATICAN_CITY",
    "VENEZUELA",
    "VIETNAM",
    "YEMEN",
    "ZAMBIA",
    "ZIMBABWE"
];

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
                genderArr={genderArr}
                countriesArr={countriesArr}
            />
        </>
    );
}

export default Participant;
