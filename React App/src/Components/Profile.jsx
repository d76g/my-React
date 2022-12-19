import {useContext} from 'react';
import { ChangeName } from './ChangeName';
export const Profile = () => {
    const {username} = useContext(AppContext);
    return (
        <div>
            <h1>Profile Page</h1>
            <h4>Current Username: {username}</h4>
            <ChangeName/>
        </div>
    )
}