import React, { useState, useEffect} from 'react';
import axios from "axios";
import Card from './Card'


//api address:
//http https://swapi.co/api/people/
// /people/ -- get all the people resources
// /people/:id/ -- get a specific people resource
// /people/schema/ -- view the JSON schema for this resource


export default function Data() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(res => {
                setData(res.data);
                // console.log('Got Response', res);
            })
            .catch(error => {
                console.log('Got an error', error);
            });
    }, []);
    console.log(data);

    return (
        <div>
            This is some data we will need to map over!
            <Card/>
        </div>
    )
}