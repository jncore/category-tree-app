import React from 'react';

import styles from './TreeNode.module.scss';

interface Props {
    data: Tree[];
}

const TreeNode: React.FC<Props> = ({ data }: Props) => {
    if (data.children) {
        const subtree = data.children.map((child) => {
            return <TreeNode key={child.key} data={child} />;
        });

        return (
            <ul className={styles.parent}>
                <span className={styles.title}>{data.title}</span>
                <li className={styles.child}>{subtree}</li>
            </ul>
        );
    }

    return (
        <ul className={styles.parent}>
            <li className={styles.child}>
                <span className={styles.title}>{data.title}</span>
            </li>
        </ul>
    );
};

export default TreeNode;
