import { hasChildren } from '../hasChildren';
import { TREE_DATA_MOCK_VALID } from './__mocks__/expectedFlatTree.mock';

/* eslint-disable @typescript-eslint/no-explicit-any */
describe('hasChildren', () => {
    let parent: any;

    beforeEach(() => {
        parent = { ...TREE_DATA_MOCK_VALID[0] };
    });

    it('returns true if a parent node contains children', () => {
        expect(hasChildren(parent)).toBe(true);
        expect(hasChildren(parent.children[2])).toBe(true);
        expect(hasChildren(parent.children[3])).toBe(true);
    });

    it('returns false if a parent node does not contain children', () => {
        expect(hasChildren(parent.children[0])).toBe(false);
        expect(hasChildren(parent.children[1])).toBe(false);
    });

    it('returns false if an incorrect value is provided', () => {
        expect(hasChildren(null as any)).toBe(false);
        expect(hasChildren(undefined as any)).toBe(false);
        expect(hasChildren('' as any)).toBe(false);
        expect(hasChildren(NaN as any)).toBe(false);
        expect(hasChildren(123 as any)).toBe(false);
    });
});
