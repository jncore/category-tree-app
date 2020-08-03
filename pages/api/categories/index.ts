import { NextApiRequest, NextApiResponse } from 'next';

import { DUMMY_TREE_DATA } from './fixtures/dummyTree';

/**
 * Returns categories in a form of a tree.
 *
 * Note: returns a dummy fixture for now, can be extended
 * into being a real endpoint down the line.
 *
 * @param {NextApiRequest} API request object
 * @param {NextApiResponse} API response object
 * @returns {void}
 */
export default (req: NextApiRequest, res: NextApiResponse): void => {
    res.statusCode = 200;
    res.json(DUMMY_TREE_DATA);
};
