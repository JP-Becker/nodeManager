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
import { nodeData } from './nodeData/nodeData';
import DataTypeFilter from './nodeData/dataTypeFilter';
import NodeMenu from './components/nodeMenu/nodeMenu';

import '@xyflow/react/dist/style.css';
import NodeText from './components/nodeText/nodeText';
import NodeOption from './components/nodeOption/nodeOption';

const nodeTypes = { nodeMenu: NodeMenu, nodeText: NodeText, nodeOption: NodeOption};

// Gerar nodes a partir do NodeMenu
const nodesMapeados = nodeData.map((node, index) => ({
  id: node.id,
  position: { x: 0, y: index * 150 },
  type: DataTypeFilter(node.type),
  data: { label: [node?.type, node?.content.text, node?.content.options, node?.id, node?.nextNodeId] }
}));

const initialEdges = [
  {id: '1', source: nodesMapeados[0].id, target: nodesMapeados[1].id }
]

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  useEffect(() => {
    setNodes(nodesMapeados)
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
      >
        <Controls />
       
        <Background variant="dots" gap={12} size={1} />
         <MiniMap />
      </ReactFlow>
    </div>
  );
}