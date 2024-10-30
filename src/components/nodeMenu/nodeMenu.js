import React, { memo } from 'react';
import { Container } from './nodeMenuStyled';
import { Handle, Position } from '@xyflow/react';

export default function NodeMenu({ data, isConnectable }) {

    let opcoesDoMenu = data.label[2].map((option) => {
        return <p>Opção: {option.content.name}</p>
    })

    console.log(opcoesDoMenu);
    return (
    <>
    <Handle type="target" position={Position.Top} isConnectable={isConnectable}/>
    <Container>
        <h1>{data.label[0]}</h1>
        <h3>id: {data.label[3]}</h3>
        <p>Texto: {data.label[1]}</p>
        <div>{opcoesDoMenu}</div>  
    </Container>
    <Handle type="source" position={Position.Bottom} isConnectable={isConnectable}/>
    </>
    
    )
}