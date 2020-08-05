import { TreeNode } from '@/models/tree';
import { hasChildren } from '@/helpers/hasChildren';

/**
 * Finds the tree node by recursively drilling down the tree
 * and lets user to update the node via a provided callback.
 *
 * @function
 * @param {TreeNode[] | undefined} tree - tree node array
 * @param {string} key - unique key identifier for the target node
 * @param {(node: TreeNode) => TreeNode} callback - function meant to act upon the found node
 * @returns {TreeNode[] | undefined} - full updated tree containing a modified node
 */
export function findAndUpdateNode(
    tree: TreeNode[] | undefined,
    key: string,
    callback: (node: TreeNode) => TreeNode
): TreeNode[] | undefined {
    if (!tree || !Array.isArray(tree) || !tree.length || !key || !callback) {
        return tree;
    }

    const updatedTree = [...tree].map((treeNode) => {
        if (treeNode && treeNode.key === key) {
            return callback(treeNode);
        }

        if (hasChildren(treeNode)) {
            return { ...treeNode, children: findAndUpdateNode(treeNode.children, key, callback) };
        }

        return treeNode;
    });

    return updatedTree;
}
