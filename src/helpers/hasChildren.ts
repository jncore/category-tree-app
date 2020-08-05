import { TreeNode } from '@/models/tree';

/**
 * Checks whether a tree node has children.
 *
 * @function
 * @param {TreeNode} node - target node
 * @returns {boolean}
 */
export function hasChildren(node: TreeNode): boolean {
    return !!(node && node.children && node.children?.length);
}
