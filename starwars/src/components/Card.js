import React, { useEffect } from 'react';
// import { Card, Image } from "semantic-ui-react";

export default function CharacterCard(props){
    console.log(props);
    return(
        <div>
            {props.name}
        </div>
    )
}