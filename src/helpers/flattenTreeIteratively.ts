import { TreeNode, FlatTreeNode } from '@/models/tree';
import { hasChildren } from '@/helpers/hasChildren';

/**
 * Flattens the tree object using an iterative preorder traversal algorithm.
 *
 * Adds references to the node depth level and parent key
 * to each child along the way.
 *
 * @function
 * @param {TreeNode[]} tree - tree object
 * @returns {FlatTreeNode[]} - flat representation of the same tree
 */
export function flattenTreeIteratively(tree: TreeNode[]): FlatTreeNode[] {
    if (!tree || !Array.isArray(tree) || !tree.length) {
        return [];
    }

    const root: TreeNode = { ...tree[0] };
    const results: FlatTreeNode[] = [];
    const stack: TreeNode[] = [];
    let level = 0;

    results.push({ ...root, level, parentKey: null });
    stack.push(root);

    while (stack.length > 0) {
        let areChildNodesVisited = false;
        let parent: TreeNode | undefined;

        if (hasChildren(stack[stack.length - 1])) {
            parent = stack[stack.length - 1];
        }

        const parentChildren = parent && parent?.children ? parent.children : [];

        for (let i = 0; i < parentChildren.length; i++) {
            // When unvisited child is found push it to the stack and the results (visited) list
            // Start over from the -1 case and explore this new child
            if (!results.filter((element) => element.key === parentChildren[i].key).length) {
                level++;
                areChildNodesVisited = true;

                stack.push(parentChildren[i]);
                results.push({ ...parentChildren[i], level, parentKey: parent?.key || null });

                break;
            }
        }

        // Remove the parent from the stack if all children are visited
        if (!areChildNodesVisited) {
            level--;
            stack.pop();
        }
    }

    return results;
}
