import useParticipant from "../hooks/useParticipant.tsx";

function Participant () {
    const { participants, isLoading } = useParticipant();

    console.log(participants);
    console.log(isLoading);

    return (
        <div>
        <h1>Participant</h1>
        </div>
    )
}

export default Participant;