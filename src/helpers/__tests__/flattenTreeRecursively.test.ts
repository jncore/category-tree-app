import { flattenTreeRecursively } from '../flattenTreeRecursively';
import { TREE_DATA_MOCK_VALID, EXPECTED_MOCK_VALID } from './__mocks__/expectedFlatTree.mock';

/* eslint-disable @typescript-eslint/no-explicit-any */
describe('flattenTreeRecursively', () => {
    it('successfully flattens a valid tree object recursively', () => {
        expect(flattenTreeRecursively(TREE_DATA_MOCK_VALID)).toStrictEqual(EXPECTED_MOCK_VALID);
    });

    it('should return an empty array if an invalid value is provided', () => {
        expect(flattenTreeRecursively(null as any)).toStrictEqual([]);
        expect(flattenTreeRecursively(undefined as any)).toStrictEqual([]);
        expect(flattenTreeRecursively({} as any)).toStrictEqual([]);
        expect(flattenTreeRecursively([])).toStrictEqual([]);
    });
});
