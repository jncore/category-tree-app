/**
 * Generic tree interface.
 */
export interface Tree {
    key: string;
    title: string;
    children?: Tree[];
}
