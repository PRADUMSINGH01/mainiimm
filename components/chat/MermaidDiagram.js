// components/MermaidDiagram.js
import dynamic from "next/dynamic";

// Dynamically import to disable SSR if needed
const Mermaid = dynamic(() => import("react-mermaid2"), { ssr: false });

const MermaidDiagram = ({ code }) => {
  return <Mermaid chart={code} />;
};

export default MermaidDiagram;
