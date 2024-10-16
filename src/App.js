import React, { useCallback, useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Background
} from '@xyflow/react';
import NodeMenu from './nodeTypes/nodeMenu';
import { nodeData } from './nodeData/nodeData';
import DataTypeFilter from './nodeData/dataTypeFilter';

import '@xyflow/react/dist/style.css';

const nodeTypes = { nodeMenu: NodeMenu };

// Gerar nodes a partir do NodeMenu
const nodesMapeados = nodeData.map((node, index) => ({
  id: node.id,
  position: { x: 0, y: index * 100 },
  type: DataTypeFilter(node.type),
  data: { label: [node.type, node.content.text, node.content.options] }
}));

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  useEffect(() => {
    setNodes(nodesMapeados)
    console.log(nodesMapeados)
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        // colorMode=''
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      />
        {/* <NodeMenu />
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow> */}
    </div>
  );
}