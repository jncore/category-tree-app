import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import TreeView from '../src/components/TreeView';
import { Tree } from '../src/models/tree';
import { apiHost } from '../src/constants/apiHost';

interface Props {
    categories: Tree;
}

export default function Home(props: Props): React.FC<Props> {
    return (
        <>
            <Head>
                <title>Category Tree App</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <TreeView initialTreeData={props.categories} />
        </>
    );
}

export const getStaticProps: GetStaticProps = async (): Promise<{ props: Props }> => {
    const res = await fetch(`${apiHost}/api/categories`);
    const categories = await res.json();

    return {
        props: {
            categories,
        },
    };
};
