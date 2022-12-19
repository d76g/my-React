import { useState, useContext } from "react";

export const ChangeName = () => {
    const [newUsername, setNewUsername] = useState('');
    const {setUsername} = useContext(AppContext);
    return(
        <div>
            <input type="text" placeholder="Enter new username" onChange={(event) => {setNewUsername(event.target.value)}}/>
            <button onClick={() => {setUsername(newUsername)}}>Edit</button>
        </div>
    )
}