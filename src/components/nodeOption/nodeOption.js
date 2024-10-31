import React, { memo } from 'react';
import { Container } from './nodeOptionStyled';
import { Handle, Position } from '@xyflow/react';

export default function NodeOption({ optionNodes, isConnectable }) {

    console.log(optionNodes)

    let opcoesDoMenu = optionNodes.map((option) => {
        return <Container>
            <p>Opção: {option.name}</p>
            <p>id do proximo nó: {option.nextNodeId}</p>
            <Handle type="source" position={Position.Right} isConnectable={isConnectable}/>
        </Container> 
    })
    return (
    <>
    {opcoesDoMenu}
    </>
    
    )
}