import React from 'react';
import { Card } from 'semantic-ui-react';

export default function CharacterCard(props) {
    console.log(props);
    return (
        <div>
            {props.name}
           {props.gender}
            {props.birth}
            {/** for above, have to use "" that shows up in console, not birth_year as in API docs. Use that in map api request only*/};
             {props.height}
            {props.mass}
             {props.hair}
            {props.eyes}

        </div>
    )
}