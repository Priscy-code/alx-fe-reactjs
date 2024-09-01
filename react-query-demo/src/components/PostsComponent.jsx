import { useQuery } from "react-query";

function PostComponent(){
    const {isLoading, error, data} = useQuery(['posts'], () => 
    fetch('https://jsonplaceholder.typicode.com/posts'). then((response) => {
        if(!response.ok) {
            throw new Error('Network response was not okay')
        }
        return response.json();
    }));

    if(isLoading) return <div>Loading</div>;
    if (error) return <div>An error ocurred:{error.message}</div>;

    return(
        <div>
            <h2>Posts</h2>
            <ul>
                {data.map((post) =>(
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostComponent;