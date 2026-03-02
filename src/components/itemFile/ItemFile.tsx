
import type { ReactNode } from 'react';
import styles from './ItemFile.module.css';

interface ItemFileProps {
  type: 'file' | 'folder';
  name: string;
  onClick?: () => void;
  children?: ReactNode;
}

const ItemFile = ({ type, name, onClick, children }: ItemFileProps) => {
  const typeClass = type === 'file' ? styles.file : styles.folder;
  const rowClass = onClick ? `${styles.row} ${styles['row--clickable']}` : styles.row;

  return (
    <li className={typeClass}>
      <div className={rowClass} onClick={onClick}>
        <div className={styles.item}>
          <img className={styles.icon} src={`/icon-${type}.svg`} alt="" />
          <span className={styles.name}>{name}</span>
        </div>
      </div>

      {children}
    </li>
  );
};

export default ItemFile