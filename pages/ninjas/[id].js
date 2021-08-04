import React from 'react';

// 데이터에 따라 얼마나 많은 html 페이지가 static으로 만들어져야 하는지 알려주는 함수 
export const getStaticPaths = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    // map data to an array of path objects with params (id)
    const paths = data.map(item => {
        return {
            params: { id : item.id.toString() }
        }
    });
    console.log(paths)
    
    return {
        paths: paths,
        fallback: false
    }
};

// 아래 함수가 path 횟수만 큼 돈다 . 
// context 에서 params를 가져올 수 있다. 
export const getStaticProps  = async(context) => {
    console.log(context)
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json();

    // 함수에서  데이터를 담은 props를 쓰기 위해 리턴해주자. props : { data : data }  
    return {
        props: {
            data
        }  
    }
}



function id({data}) {

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.email}</p>
            <p>{data.website}</p>
            <p>{data.address.city}</p>
        </div>
    )
}

export default id
