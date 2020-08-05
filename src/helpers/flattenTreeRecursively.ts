import { TreeNode, FlatTreeNode } from '@/models/tree';
import { hasChildren } from '@/helpers/hasChildren';

/**
 * Flattens the tree object recursively.
 *
 * Adds references to the node depth level and parent key
 * to each child along the way.
 *
 * @function
 * @param {TreeNode[]} tree - initial tree object
 * @param {number} level - child depth level
 * @param {string | null} parentKey - unique parentKey reference
 * @returns {FlatTreeNode[]} - flat representation of the same tree
 */
export function flattenTreeRecursively(
    tree: TreeNode[],
    level = 0,
    parentKey: string | null = null
): FlatTreeNode[] {
    const results: FlatTreeNode[] = [];

    if (!tree || !tree.length) {
        return results;
    }

    tree.forEach((treeNode) => {
        results.push({ ...treeNode, level, parentKey });

        if (hasChildren(treeNode)) {
            const flatChildren = flattenTreeRecursively(
                treeNode.children as TreeNode[],
                level + 1,
                treeNode.key
            );
            results.push(...flatChildren);
        }
    });

    return results;
}
