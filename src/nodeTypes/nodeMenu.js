import React, { memo } from 'react';
import { nodeData } from '../nodeData/nodeData';
import { Handle, Position } from '@xyflow/react';

export default function NodeMenu() {
    const nodesTypeMenu = nodeData.filter((node) => node.type == 'MENU');

    const menuNodes = nodesTypeMenu.map((node, index) => ({
        id: node.id,
        position: node.position || { x: 0, y: index * 100 },
        data: { label: `${node.type} \n ${node.content.text}` }
      }));

    return <>
        {nodesTypeMenu.map((node) => (
            <div key={node.id} style={{ border: '1px solid black', margin: '10px' }}>
                <Handle
                    type="target"
                    position={Position.Left}
                    style={{ background: '#555' }}
                    onConnect={(params) => console.log('handle onConnect', params)}
                />
                <div>{`${node.type} \n ${node.content.text}`}</div>
            </div>
        ))}
    </>
}