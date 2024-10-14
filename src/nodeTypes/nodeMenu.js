import React, { memo } from 'react';
import { nodeData } from '../nodeData/nodeData';
import { Handle, Position } from '@xyflow/react';

export default function NodeMenu({ data }) {
    console.log(data);

    return <div>
        <p>{data.label}</p>        
    </div>
}