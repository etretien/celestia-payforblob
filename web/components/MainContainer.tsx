import Head from "next/head";
import React from "react";

type TProps = {
    children: React.ReactNode;
    keywords?: string[];
    title: string;
    desc: string;
};

const MainContainer: React.FC<TProps> = ({ children, title, desc, keywords = [] }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <meta name="keywords" content={keywords?.join(', ')} />
            </Head>
            <main>
                {children}
            </main>
        </>
    );
}

export default MainContainer;
