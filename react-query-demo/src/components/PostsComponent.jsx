import { useQuery } from "react-query";

function PostComponent(){
    const {isLoading, isError, fetchPosts} = useQuery(['posts'], () => 
    fetch('https://jsonplaceholder.typicode.com/posts'). then((response) => {
        if(!response.ok) {
            throw new Error('Network response was not okay')
        }
        return response.json();
    }));

    if(isLoading) return <div>Loading</div>;
    if (isError) return <div>An error ocurred:{isError.message}</div>;
    if(fetchPosts) return <div>Successful </div>

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