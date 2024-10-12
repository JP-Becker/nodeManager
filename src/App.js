import React, {useCallback} from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Background
} from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';

const teste = {
  "id": "a2235f93-ab20-412a-8aa0-d16025c00af3",
  "type": "MENU",
  "nextNodeId": null,
  "content": {
    "text": "Sobre qual assunto você quer conversar?"
  }}
 
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: teste.id + teste.type} },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
 
export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}