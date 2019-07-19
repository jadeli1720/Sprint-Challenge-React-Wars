import React from "react";
// import { Card, Icon } from 'semantic-ui-react'
import { Cards, Header, SubHeader, Description, Left, Right } from './Styling'

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
      <Header>
        {props.name}
      </Header>
      <SubHeader>
        {props.birth}
      </SubHeader>
      <h3>Description</h3>
      <Description>
        <Left>
          <p>Gender:</p>
          <p>Hair Color:</p> 
          <p>Eye Color:</p> 
          <p>Height:</p> 
          <p>Mass:</p>  
        </Left>
        <Right>
          <p>{props.gender}</p>
          <p>{props.hair}</p>
          <p>{props.eyes}</p>
          <p>{props.height}</p>
          <p>{props.mass}</p>
          
        </Right>
        
      </Description>
        
       

    </Cards>
  );
}
