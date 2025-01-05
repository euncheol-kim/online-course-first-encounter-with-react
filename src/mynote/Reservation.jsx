import React, {useState} from "react";

function Reservation(props) {
    const [haveBreakfast, setHaveBreakfast] = useState(false);
    const [numberOfGuest, setNumberOfGuest] = useState(0);

    const handleSubmit = (event) => {
        alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                아침식사 여부:
                <input 
                type="checkbox" 
                checked={haveBreakfast} 
                onChange={(event) => {
                    setHaveBreakfast(event.target.checked);
                }} 
                />
            </label>
            <br />
            방문객 수:
            <input 
                type="number" 
                value={numberOfGuest} 
                onChange={(event) => {
                    setNumberOfGuest(event.target.value);
                }} 
            />
            <button type="submit">제출</button>
        </form>
    );
}

  export default Reservation;