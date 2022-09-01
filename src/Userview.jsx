import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from 'axios';

function Userview() {

    const parms = useParams()
    console.log(parms)
    const [searchParams, setsearchParams] = useSearchParams()
    console.log(...searchParams)
    
    const [userData,setUserData] = useState({})

    useEffect(() => {
        loadUser()
    }, [])

    let loadUser = async () => {
        try {
            let user = await axios.get(`https://62ab049e371180affbdf40f1.mockapi.io/users/${parms.userid}`)
            console.log(user)
            setUserData(user.data)
        }
        catch (error) {

        }
    }

    return (
        <>
           <h1>{userData.name}</h1>
           <h2>{userData.position}</h2>
           <h2>{userData.office}</h2>
           <h2>{userData.age}</h2>
           <h2>{userData.startdate}</h2>
           <h2>{userData.salary}</h2>
        </>

    )

}
export default Userview;