import Link from 'next/link';
import React, {useEffect} from 'react';
import {useRouter} from 'next/router';

function NotFound() {
    const router = useRouter();

    useEffect(()=> {
        // router.go(-1) < 바로 이전 페이지
        setTimeout(()=> router.push("/"), 3000)
    });

    return (
        <div className="not-found">
            <h1>Opps....</h1>
            <h2>Page not Found</h2>
            <p>Go back to the <Link href="/"><a className="home-btn">HomePage</a></Link> 
            </p>
        </div>
    )
}

export default NotFound
