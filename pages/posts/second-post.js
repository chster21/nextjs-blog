import Link from 'next/link';

export default function SecondPost(){
    function handleClick (){
        console.log("Telmuun is awesome");
    }
    return (
    <div>
        <h1>Hi</h1>
        <button onClick={handleClick}>Click here</button>
    </div>
    )
}