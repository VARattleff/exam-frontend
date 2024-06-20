import { TGender, TAgeGroup, TCountry } from "./participant.type.ts";

type TResultsType =  "POINTS" | "TIME" | "DISTANCE"

type TParticipantsInDiscipline = {
    id: number;
    fullName: string;
    age: number
    gender: TGender
    adjacentClub: string
    ageGroup: TAgeGroup;
    country: TCountry;
    disciplines: [];
}

type TDiscipline = {
    id: number;
    name: string;
    description: string;
    resultsType: TResultsType;
    participants: TParticipantsInDiscipline[];
}

export type { TDiscipline};