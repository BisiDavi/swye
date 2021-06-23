import React, { PropsWithChildren } from 'react';
import Footer from '../footer';
import Header from '../header';
import { layout } from '@styles/index.module.css';

const Layout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <>
            <div className={layout}>
                <Header />
                {children}
                <Footer />
            </div>
        </>
    );
};

export default Layout;
