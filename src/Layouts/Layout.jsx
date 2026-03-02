import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children, menuTitle = '' }) => {
    return (
        <>
            <div className="bg-white min-h-screen flex flex-col">
                {/* Header */}
                <Header menuTitle={menuTitle} />

                {/* Main Content */}
                <main className="flex grow">
                    {children}
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
};

export default Layout;