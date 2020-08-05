import { v4 as uuid } from 'uuid';

import { TreeNode, FlatTreeNode } from '@/models/tree';

export const KEYS = Array.from({ length: 10 }, () => uuid());

export const TREE_DATA_MOCK_VALID: TreeNode[] = [
    {
        key: KEYS[0],
        title: 'Lorem',
        children: [
            { key: KEYS[1], title: 'Ipsum' },
            { key: KEYS[2], title: 'Dolor' },
            { key: KEYS[3], title: 'Orci', children: [{ key: KEYS[4], title: 'Quis' }] },
            {
                key: KEYS[5],
                title: 'Odio',
                children: [
                    { key: KEYS[6], title: 'Sit' },
                    { key: KEYS[7], title: 'Amet' },
                    {
                        key: KEYS[8],
                        title: 'Consectetur',
                        children: [{ key: KEYS[9], title: 'Adipiscing' }],
                    },
                ],
            },
        ],
    },
];

export const EXPECTED_MOCK_VALID: FlatTreeNode[] = [
    {
        key: KEYS[0],
        title: 'Lorem',
        children: [
            { key: KEYS[1], title: 'Ipsum' },
            { key: KEYS[2], title: 'Dolor' },
            { key: KEYS[3], title: 'Orci', children: [{ key: KEYS[4], title: 'Quis' }] },
            {
                key: KEYS[5],
                title: 'Odio',
                children: [
                    { key: KEYS[6], title: 'Sit' },
                    { key: KEYS[7], title: 'Amet' },
                    {
                        key: KEYS[8],
                        title: 'Consectetur',
                        children: [{ key: KEYS[9], title: 'Adipiscing' }],
                    },
                ],
            },
        ],
        parentKey: null,
        level: 0,
    },
    { key: KEYS[1], title: 'Ipsum', parentKey: KEYS[0], level: 1 },
    { key: KEYS[2], title: 'Dolor', parentKey: KEYS[0], level: 1 },
    {
        key: KEYS[3],
        title: 'Orci',
        children: [{ key: KEYS[4], title: 'Quis' }],
        parentKey: KEYS[0],
        level: 1,
    },
    { key: KEYS[4], title: 'Quis', parentKey: KEYS[3], level: 2 },
    {
        key: KEYS[5],
        title: 'Odio',
        children: [
            { key: KEYS[6], title: 'Sit' },
            { key: KEYS[7], title: 'Amet' },
            {
                key: KEYS[8],
                title: 'Consectetur',
                children: [{ key: KEYS[9], title: 'Adipiscing' }],
            },
        ],
        parentKey: KEYS[0],
        level: 1,
    },
    { key: KEYS[6], title: 'Sit', parentKey: KEYS[5], level: 2 },
    { key: KEYS[7], title: 'Amet', parentKey: KEYS[5], level: 2 },
    {
        key: KEYS[8],
        title: 'Consectetur',
        children: [{ key: KEYS[9], title: 'Adipiscing' }],
        parentKey: KEYS[5],
        level: 2,
    },
    { key: KEYS[9], title: 'Adipiscing', parentKey: KEYS[8], level: 3 },
];
