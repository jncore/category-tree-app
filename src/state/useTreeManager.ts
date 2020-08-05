import { useState } from 'react';

import { TreeNode } from '@/models/tree';
import { findAndUpdateNode } from '@/helpers/findAndUpdateNode';

interface TreeManager {
    tree: TreeNode[];
    addNode: (parentKey: string | null, node: TreeNode) => void | undefined;
    removeNode: (parentKey: string | null, nodeKey: string) => void | undefined;
    updateNodeTitle: (key: string, title: string) => void | undefined;
}

/**
 * Tree manager disguised as a React hook.
 *
 * Retains a local state of the tree and provides a consumer
 * with methods to modify it (add, remove, and rename nodes).
 *
 * @function
 * @param {TreeNode[]} initialTreeData - initial state of the tree
 * @returns {TreeManager}
 */
export function useTreeManager(initialTreeData: TreeNode[] = []): TreeManager {
    const [treeData, updateTreeData] = useState(initialTreeData);

    /**
     * Enables consumers to add nodes to the existing tree state.
     *
     * @function
     * @param {string | null} parentKey - a unique key of a target's parent
     * @param {TreeNode} node - a new tree node to be added
     * @returns {void | undefined}
     */
    const addNode = (parentKey: string | null, node: TreeNode): void | undefined => {
        if (!parentKey || !node) {
            return;
        }

        const updatedTree = findAndUpdateNode(treeData, parentKey, (foundNode) => {
            const children = foundNode.children || [];
            return { ...foundNode, children: [...children, node] };
        });

        if (updatedTree) {
            updateTreeData(updatedTree);
        }
    };

    /**
     * Enables consumers to remove nodes from the existing tree state.
     *
     * @function
     * @param {string | null} parentKey - a unique key of a target's parent
     * @param {string} nodeKey - a unique key of a node to be removed
     * @returns {void | undefined}
     */
    const removeNode = (parentKey: string | null, nodeKey: string): void | undefined => {
        if (!parentKey || !nodeKey) {
            return;
        }

        const updatedTree = findAndUpdateNode(treeData, parentKey, (foundNode) => {
            const updatedChildren =
                foundNode.children && foundNode.children.length
                    ? foundNode.children?.filter((child) => {
                          return child.key !== nodeKey;
                      })
                    : [];

            return {
                ...foundNode,
                children: updatedChildren,
            };
        });

        if (updatedTree) {
            updateTreeData(updatedTree);
        }
    };

    /**
     * Enables consumers to update node titles in the existing tree state.
     *
     * @function
     * @param {string} key - a unique key of a target node
     * @param {string} title - new title
     * @returns {void | undefined}
     */
    const updateNodeTitle = (key: string, title: string): void | undefined => {
        if (!key || !title) {
            return;
        }

        const updatedTree = findAndUpdateNode(treeData, key, (foundNode) => {
            return { ...foundNode, title };
        });

        if (updatedTree) {
            updateTreeData(updatedTree);
        }
    };

    return { tree: treeData, addNode, removeNode, updateNodeTitle };
}
