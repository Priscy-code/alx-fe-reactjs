import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css'
import PostComponent from './components/PostsComponent';


const queryClient = new QueryClient();

function App() {
 

  return (
    <>
    <h1>My App</h1>
    <QueryClientProvider client={queryClient}>
      <PostComponent/>
    </QueryClientProvider>
    </>
  )
}

export default App
