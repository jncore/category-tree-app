import React from 'react';

import { Tree } from '../../../models/tree';
import { generateFlatTree } from './helpers/generateFlatTree';

interface Props {
    treeData: Tree[];
}

const IterativeTree: React.FC = ({ treeData }: Props) => {
    if (!treeData) {
        return <>No tree data exists</>;
    }

    // TODO:
    return (
        <>
            <h2>Iterative Tree View:</h2>
            <div>TBD</div>
        </>
    );
};

export default IterativeTree;
