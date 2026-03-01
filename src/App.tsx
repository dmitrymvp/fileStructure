import { useState, useEffect } from 'react';
import FileNode from './components/fileNode/FileNode';

type FsNode = {
  type: 'file' | 'folder';
  children?: Record<string, FsNode>;
};

type FsData = {
  root: Record<string, FsNode>;
};

function App() {
  const [data, setData] = useState<FsData | null>(null);

  useEffect(() => {
    fetch('fs.json')
      .then(res => res.json())
      .then((json: FsData) => setData(json))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  if (!data) return <div className='app loading'>Загрузка...</div>;

  return (
    <div className='app'>
      <div className='layout'>
        <ul>
          {Object.entries(data.root).map(([name, node]) => (
            <FileNode key={name} name={name} node={node} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;