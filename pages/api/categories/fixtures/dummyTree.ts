import { v4 as uuid } from 'uuid';

import { Tree } from '../../../../src/models/tree';

export const DUMMY_TREE_DATA: Tree = [
    {
        key: uuid(),
        title: 'Lorem',
        children: [
            {
                key: uuid(),
                title: 'Ipsum',
            },
            {
                key: uuid(),
                title: 'Dolor',
                children: [
                    {
                        key: uuid(),
                        title: 'Orci',
                        children: [
                            {
                                key: uuid(),
                                title: 'Quis',
                                children: [
                                    {
                                        key: uuid(),
                                        title: 'Odio',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                key: uuid(),
                title: 'Sit',
                children: [
                    {
                        key: uuid(),
                        title: 'Amet',
                    },
                    {
                        key: uuid(),
                        title: 'Consectetur',
                    },
                ],
            },
            {
                key: uuid(),
                title: 'Adipiscing',
                children: [
                    {
                        key: uuid(),
                        title: 'Elit',
                        children: [
                            {
                                key: uuid(),
                                title: 'Vestibulum',
                            },
                            {
                                key: uuid(),
                                title: 'Vitae',
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
