import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import TreeContainer from '@/components/TreeContainer';
import { TreeNode } from '@/models/tree';
import { apiHost } from '@/constants/environment';

interface Props {
    categories: TreeNode[];
}

const Home: React.FC<Props> = (props: Props) => {
    return (
        <>
            <Head>
                <title>Category Tree App</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <TreeContainer initialTreeData={props.categories} />
        </>
    );
};

export const getStaticProps: GetStaticProps = async (): Promise<{ props: Props }> => {
    const res = await fetch(`${apiHost}/api/categories`);
    const categories = await res.json();

    return {
        props: {
            categories,
        },
    };
};

export default Home;
