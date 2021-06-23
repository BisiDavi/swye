import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from '@containers/.';
import { Divider } from '@styles';
import data from '@json/homepage.json';
import Articles from '@components/articles';

const IndexPage = () => {
    console.log('data', data);
    return (
        <Layout>
            <span className='d-flex mx-auto flex-column mt-5 align-items-center'>
                <h3 className='text-center'>Our Solutions</h3>
                <Divider />
            </span>
            <Articles data={data} />
        </Layout>
    );
};

export default IndexPage;
