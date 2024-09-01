import { useQuery } from "react-query";

function PostComponent(){
    const {fetchPosts, iserror, data} = useQuery(['posts'], () => 
    fetch('https://jsonplaceholder.typicode.com/posts'). then((response) => {
        if(!response.ok) {
            throw new Error('Network response was not okay')
        }
        return response.json();
    }));

    if(fetchPosts) return <div>Loading</div>;
    if (iserror) return <div>An error ocurred:{iserror.message}</div>;

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