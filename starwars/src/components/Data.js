import React, { useState, useEffect} from 'react';
import axios from "axios";
import CharacterCard from './Card';
import { CardContainer } from './Styling';

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
                setData(res.data.results);
                console.log('Got Response', res);
            })
            .catch(error => {
                console.log('Got an error', error);
            });
    }, []);
    console.log(data);

    return (
        <CardContainer >
            {data.map((data, index) => (
                <CharacterCard name={data.name} key={index}
                               birth={data.birth_year}
                               height={data.height}
                               mass={data.mass}
                               hair={data.hair_color}
                               eyes={data.eye_color}
                               gender={data.gender}
                               homeworld={data.homeworld}
                />
            ))}
        </CardContainer>
    )
}