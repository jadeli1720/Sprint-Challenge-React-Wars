import React from "react";
// import { Card, Icon } from 'semantic-ui-react'
import { Cards } from './Styling'

export default function CharacterCard(props) {
  console.log(props);
  return (
    // <Card>
    //   <Card.Content header={props.name} />
    //   <Card.Content description={props.gender} />
    //   <Card.Content extra>
    //     <Icon name="user" />
    //   </Card.Content>
    // </Card>
    <Cards>
        {props.name}
       {props.gender}
        {props.birth}
         {props.height}
        {props.mass}
         {props.hair}
        {props.eyes}

    </Cards>
  );
}
