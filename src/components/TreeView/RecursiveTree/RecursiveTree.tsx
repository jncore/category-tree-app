import React from 'react';

import TreeNode from './TreeNode';
import { Tree } from '../../../models/tree';

interface Props {
    treeData: Tree[];
}

const RecursiveTree: React.FC = ({ treeData }: Props) => {
    if (!treeData) {
        return <>No tree data exists</>;
    }

    return (
        <>
            <h2>Recursive Tree View:</h2>
            <TreeNode data={treeData[0]} />
        </>
    );
};

export default RecursiveTree;
