import React from 'react';
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';

import { TreeNode, FlatTreeNode } from '@/models/tree';
import { titleValidationRules } from '@/constants/validationRules';
import { NEW_TREE_NODE_TITLE } from '@/constants/general';
import styles from './TreeNodeView.module.scss';

interface Props {
    node: FlatTreeNode;
    handleAdd: (parentKey: string | null, node: TreeNode) => void;
    handleRemove: (parentKey: string | null, nodeKey: string) => void;
    handleTitleUpdate: (key: string, value: string) => void;
}

const TreeNodeView: React.FC<Props> = ({
    node: { key, parentKey, title, level },
    handleAdd,
    handleRemove,
    handleTitleUpdate,
}: Props) => {
    const { register, handleSubmit, errors } = useForm();

    const handleInputChange = ({ title }: { title: string }) => {
        if (!errors.title) {
            handleTitleUpdate(key, title);
        }
    };

    return (
        <div className={styles.container} style={{ marginLeft: level * 20 }}>
            <input
                name="title"
                defaultValue={title}
                ref={register(titleValidationRules)}
                onChange={handleSubmit(handleInputChange)}
                className={styles.titleInput}
            />
            {errors.title && (
                <div className={styles.errorMessage}>
                    This field contains errors (has to be alphanumeric and contain 1-50 letters)
                </div>
            )}

            <span className={styles.buttonContainer}>
                <button onClick={() => handleAdd(key, { key: uuid(), title: NEW_TREE_NODE_TITLE })}>
                    &#x271A;
                </button>

                {!!level && <button onClick={() => handleRemove(parentKey, key)}>&#x2715;</button>}
            </span>
        </div>
    );
};

export default TreeNodeView;
