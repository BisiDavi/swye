import React, { PropsWithChildren } from 'react';
import Footer from '../footer';
import Header from '../header';

const Layout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
