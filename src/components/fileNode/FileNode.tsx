import { useState } from 'react';
import ItemFile from '../ItemFile/ItemFile';
import styles from './FileNode.module.css';

type FsNode = {
  type: 'file' | 'folder';
  children?: Record<string, FsNode>;
};

interface FileNodeProps {
  name: string;
  node: FsNode;
}

const FileNode = ({ name, node }: FileNodeProps) => {
  const [open, setOpen] = useState(false);

  if (node.type === 'file') {
    return <ItemFile type="file" name={name} />;
  }

  const handleToggle = () => {
    setOpen(openValue => !openValue);
  };

  return (
    <ItemFile type="folder" name={name} onClick={handleToggle}>
      {open && node.children && (
        <ul className={styles.children}>
          {Object.entries(node.children).map(([childName, childNode]) => (
            <FileNode key={childName} name={childName} node={childNode} />
          ))}
        </ul>
      )}
    </ItemFile>
  );
};

export default FileNode;