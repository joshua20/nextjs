import {useState} from 'react';

function Header({title}){
    return <h1>{title ? title:'Default title'}</h1>
}

export default function HomePage(){
    const towns =['kisumu', 'kisii', 'nakuru','eldoret'];
    const [likes, setLikes]=userState

    function handleClick(){
        setLikes(likes + 1)
    }

    return (
        <div>
            <Header title="Towns in Kenya" />
            <ul>
                {names.map((name)=>(
                    <li key="{name}">{name}</li>
                ))}
            </ul>
            <button onclick={handleClick}>Like({likes})</button>
        </div>
    );
}