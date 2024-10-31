import React, { memo } from 'react';
import { Container } from './nodeMenuStyled';
import { Handle, Position } from '@xyflow/react';
import NodeOption from '../nodeOption/nodeOption';

export default function NodeMenu({ data, isConnectable }) {

    // let opcoesDoMenu = data.label[2].map((option) => {
        
    //     return <div>
    //         <p>Opção: {option.content.name}</p>
    //         <Handle type="source" position={Position.Right} isConnectable={isConnectable}/>
    //     </div> 
    // })

    // console.log(NodeOption);

    const optionNodes = data.label[2].map((option, i) => ({
        id: option.id,
        nextNodeId: option.nextNodeId,
        name: option.content.name
      }));

    return (
    <>
    <Handle type="target" position={Position.Top} isConnectable={isConnectable}/>
    <Container>
        <h1>{data.label[0]}</h1>
        <h3>id: {data.label[3]}</h3>
        <p>Texto: {data.label[1]}</p>
        <NodeOption optionNodes={optionNodes}/>  
    </Container>
    </>
    
    )
}