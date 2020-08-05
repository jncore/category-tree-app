/**
 * Generic tree node interface.
 */
export interface TreeNode {
    key: string;
    title: string;
    children?: TreeNode[];
}

/**
 * Tree node interface after flattening.
 *
 * Note: depth level and parentKey references are added
 * during the tree traversion process.
 */
export interface FlatTreeNode extends TreeNode {
    level: number;
    parentKey: string | null;
}
