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
                    {props.columns.map((col, index) => <Th key={col.key + '_' + index + '_up'} >{col.label}</Th>)}
                </Tr>
            </Thead>
            <Tbody>
                {props.data.map((item, index) => <Tr key={index + '_data'}>
                    {props.columns.map((col, index) => <Td key={item[col.key] + '_' + index}> {item[col.key]}</Td>)}
                </Tr>)}
            </Tbody>
            <Tfoot>
                <Tr>
                    {props.columns.map((col, index) => <Th key={col.key + '_' + index + '_down'}>{col.label}</Th>)}
                </Tr>
            </Tfoot>
        </Table>
    )

}