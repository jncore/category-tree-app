import { flattenTreeIteratively } from '../flattenTreeIteratively';
import { TREE_DATA_MOCK_VALID, EXPECTED_MOCK_VALID } from './__mocks__/expectedFlatTree.mock';

/* eslint-disable @typescript-eslint/no-explicit-any */
describe('flattenTreeIteratively', () => {
    it('successfully flattens a valid tree object iteratively', () => {
        expect(flattenTreeIteratively(TREE_DATA_MOCK_VALID)).toStrictEqual(EXPECTED_MOCK_VALID);
    });

    it('should return an empty array if an invalid value is provided', () => {
        expect(flattenTreeIteratively(null as any)).toStrictEqual([]);
        expect(flattenTreeIteratively(undefined as any)).toStrictEqual([]);
        expect(flattenTreeIteratively({} as any)).toStrictEqual([]);
        expect(flattenTreeIteratively([])).toStrictEqual([]);
    });
});
