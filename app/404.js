// app/404.js (or pages/404.js)
import Link from 'next/link';
import Head from 'next/head';

const Custom404 = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <Head>
                <title>404 - Page Not Found</title>
                <meta name="description" content="Page not found. Sorry, the page you are looking for does not exist." />
            </Head>
            <h1 style={{ fontSize: '3rem' }}>404 - Page Not Found</h1>
            <p style={{ fontSize: '1.5rem' }}>
                Sorry, the page you are looking for does not exist.
            </p>
            <Link href="/">
                <a style={{ fontSize: '1.2rem', color: 'blue' }}>Go back to Home</a>
            </Link>
        </div>
    );
};

export default Custom404;
