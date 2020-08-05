import React, { useState } from 'react';

import TreeNodeView from '@/components/TreeNodeView';
import { useTreeManager } from '@/state/useTreeManager';
import { usePerformanceChecker } from '@/state/usePerformanceChecker';
import { TreeNode } from '@/models/tree';
import { flattenTreeIteratively } from '@/helpers/flattenTreeIteratively';
import { flattenTreeRecursively } from '@/helpers/flattenTreeRecursively';
import { saveJSON } from '@/helpers/saveJson';
import styles from './TreeContainer.module.scss';

interface Props {
    initialTreeData: TreeNode[];
}

const TreeContainer: React.FC<Props> = ({ initialTreeData }: Props) => {
    const [isTreeViewRecursive, setTreeViewRecursive] = useState(true);
    const { tree, addNode, removeNode, updateNodeTitle } = useTreeManager(initialTreeData);
    const { timerStart, timerEnd, getPerformanceResults } = usePerformanceChecker();

    if (!tree || !tree.length) {
        return <div>No tree data</div>;
    }

    const handleTreeViewChange = () => {
        setTreeViewRecursive(!isTreeViewRecursive);
    };

    const handleAdd = (parentKey: string | null, node: TreeNode): void => {
        addNode(parentKey, node);
    };

    const handleRemove = (parentKey: string | null, nodeKey: string): void => {
        removeNode(parentKey, nodeKey);
    };

    const handleTitleUpdate = (key: string, title: string): void => {
        updateNodeTitle(key, title);
    };

    timerStart();
    const flatTree = isTreeViewRecursive
        ? flattenTreeRecursively(tree)
        : flattenTreeIteratively(tree);
    timerEnd();

    // This log is purposefully left in to be a gateway to measuring
    // a performance of both flattening methods
    console.log(`Flattened the tree in ${getPerformanceResults()} ms`);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>
                Rendering the {isTreeViewRecursive ? 'Recursive' : 'Iterative'} Tree Algorithm
                <button className={styles.switchButton} onClick={handleTreeViewChange}>
                    Switch
                </button>
            </h1>

            <button className={styles.downloadButton} onClick={() => saveJSON(tree, 'tree.json')}>
                Save Tree JSON
            </button>

            {flatTree.map((node) => (
                <TreeNodeView
                    key={node.key}
                    node={node}
                    handleAdd={handleAdd}
                    handleRemove={handleRemove}
                    handleTitleUpdate={handleTitleUpdate}
                />
            ))}
        </div>
    );
};

export default TreeContainer;
