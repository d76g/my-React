import {React} from 'react'
import { useQuery } from 'react-query';
import Axios from 'axios';
export const Home = () => {

    const {data:catData, isLoading, isError, refetch} = useQuery(["cat"], () => {
        return Axios.get('https://catfact.ninja/fact').then((res) => res.data);
    })
    if(isLoading){
        return <h1>Loading</h1>
    }
    if(isError){
        return <h1>Error Occured</h1>
    }
    return(
        <div>
            <h1>Home Page</h1>
            <h2>{catData?.fact}</h2>
            <button onClick={refetch}>New Fact</button>
        </div>
    )
}