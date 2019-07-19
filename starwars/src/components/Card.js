import React from 'react';
// import { Card, Image } from "semantic-ui-react";

export default function CharacterCard(props){
    console.log(props);
    return(
        <div>
            Name: {props.name}
            Birthday: {props.birth}
            Height: {props.height}
            Mass: {props.mass}
            Hair Color: {props.hair}
            Eye Color: {props.eyes}
            Gender: {}
        </div>
    )
}