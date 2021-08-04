import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: {
            data
        }
    }
};

function Content({data}) {

    return (
        <>
            <Head>
                <title>Ninja List | List</title>
                <meta name="keywords" content="keyword 1, keyword 2, keyword 3"/>
                <meta name="description" content="Your description goes here" />
            </Head>
            <div>
                <h1>All ninjas</h1>
                {data.map(item => (
                    <Link href={`/ninjas/${item.id}`} key={item.id}>
                        <a className={styles.single}>
                            <h3>{item.name}</h3>
                        </a>
                    </Link>             
                ))}
            </div>
        
        </>
    )
}

export default Content
