import React, { useState, useEffect} from 'react';
import axios from "axios";
import CharacterCard from './Card';
import { Table } from 'semantic-ui-react';



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
                // console.log('Got Response', res);
            })
            .catch(error => {
                console.log('Got an error', error);
            });
    }, []);
    console.log(data);

    return (
        <div className="table">
            <Table celled fixed singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Gender</Table.HeaderCell>
        <Table.HeaderCell>Birthday</Table.HeaderCell>
        <Table.HeaderCell>Height</Table.HeaderCell>
        <Table.HeaderCell>Mass</Table.HeaderCell>
        <Table.HeaderCell>Hair Color</Table.HeaderCell>
        <Table.HeaderCell>Eye Color</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
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
    </Table.Body>

  </Table>
            {/* {data.map((data, index) => (
                <CharacterCard name={data.name} key={index}
                               birth={data.birth_year}
                               height={data.height}
                               mass={data.mass}
                               hair={data.hair_color}
                               eyes={data.eye_color}
                               gender={data.gender}
                               homeworld={data.homeworld}
                />
            ))} */}
        </div>
    )
}