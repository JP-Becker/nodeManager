import React, { memo } from 'react';
import { Container } from './nodeMenuStyled';
import { nodeData } from '../nodeData/nodeData';
import { Handle, Position } from '@xyflow/react';

export default function NodeMenu({ data }) {
    console.log(data);

    return (
    <Container>
        <h1>{data.label[0]}</h1>
        <p>Texto: {data.label[1]}</p>     
        <p>TESTE</p>   
    </Container>
    )
}