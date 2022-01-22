import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from '@chakra-ui/react';

interface Props {
    title: String, columns: ColDef[], data: any[]
}

interface ColDef {
    label: string;
    key: string;
};

export const CustomGrid: React.FC<Props> = (props) => {

    return (
        <Table variant='simple'>
            <TableCaption>{props.title}</TableCaption>
            <Thead>
                <Tr>
                    {props.columns.map(col => <Th>{col.label}</Th>)}
                </Tr>
            </Thead>
            <Tbody>
                {props.data.map(item => <Tr>
                    {props.columns.map(col => <Td> {item[col.key]}</Td>)}
                </Tr>)}
            </Tbody>
            <Tfoot>
                <Tr>
                    {props.columns.map(col => <Th>{col.label}</Th>)}
                </Tr>
            </Tfoot>
        </Table>
    )

}