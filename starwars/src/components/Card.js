import React from 'react';
// import { Card, Image } from "semantic-ui-react";

export default function CharacterCard(props){
    console.log(props);
    return(
        <div>
            Name: {props.name}
            Gender: {props.gender}
            Birthday: {props.birth} 
            {/** for above, have to use "" that shows up in console, not birth_year as in API docs. Use that in map api request only*/};
            Height: {props.height}
            Mass: {props.mass}
            Hair Color: {props.hair}
            Eye Color: {props.eyes}
            
        </div>
    )
}