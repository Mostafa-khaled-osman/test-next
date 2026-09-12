// import { log } from "console";

export default async function Posts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const todo = await response.json()
    // console.log(todo);

    return (
        <div className="main">
            <h1>posts page</h1>
            {todo.map((item) => {
                console.log(item);
                
                return <h3>{item.title}</h3>
            })}
        </div>
    );
}
