import React from 'react';
import { Table } from 'semantic-ui-react';

export default function CharacterCard(props) {
    console.log(props);
    return (
        <div>
        <Table celled fixed singleLine>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>John</Table.Cell>
                    <Table.Cell>Approved</Table.Cell>
                    <Table.Cell
                        title={[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                            'et dolore magna aliqua.',
                        ].join(' ')}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Jamie</Table.Cell>
                    <Table.Cell>Approved</Table.Cell>
                    <Table.Cell>Shorter description</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Jill</Table.Cell>
                    <Table.Cell>Denied</Table.Cell>
                    <Table.Cell>Shorter description</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>


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