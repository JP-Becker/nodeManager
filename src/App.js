import React, {useCallback, useEffect} from 'react';
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
import {nodeData} from './nodeData/nodeData'; 
 
import '@xyflow/react/dist/style.css';

const teste = {
  "id": "a2235f93-ab20-412a-8aa0-d16025c00af3",
  "type": "MENU",
  "nextNodeId": null,
  "content": {
    "text": "Sobre qual assunto você quer conversar?"
  }}

  const nodesTypeMenu = nodeData.filter((node) => node.type === 'MENU');

  // Gerar nodes a partir do NodeMenu
  const menuNodes = nodesTypeMenu.map((node, index) => ({
    id: (index+1).toString(),
    position: { x: 0, y: index * 100 },
    data: { label: `${node.type} \n ${node.content.text}` }
  }));

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

 
export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState();
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  useEffect(() => {
    setNodes(menuNodes)
    console.log(menuNodes)
  }, [])

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