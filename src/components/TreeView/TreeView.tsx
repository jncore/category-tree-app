import React, { useState } from 'react';

import RecursiveTree from './RecursiveTree';
import IterativeTree from './IterativeTree';
import { Tree } from '../../models/tree';
import styles from './TreeView.module.scss';

interface Props {
    initialTreeData: Tree[];
}

const TreeView: React.FC = ({ initialTreeData }: Props) => {
    const [isTreeViewRecursive, setTreeViewRecursive] = useState(true);

    if (!initialTreeData) {
        return <>No tree data exists</>;
    }

    const handleTreeViewChange = () => {
        setTreeViewRecursive(!isTreeViewRecursive);
    };

    return (
        <div className={styles.container}>
            <button onClick={handleTreeViewChange}>Toggle Tree View</button>

            {isTreeViewRecursive ? (
                <RecursiveTree treeData={initialTreeData} />
            ) : (
                <IterativeTree treeData={initialTreeData} />
            )}
        </div>
    );
};

export default TreeView;
