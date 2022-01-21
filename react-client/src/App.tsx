
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Home from './components/Home';

function App() {

  const queryClient = new QueryClient();
  
  return (
  <QueryClientProvider client={queryClient}>
    <div>
      <Home/>
    </div>
  </QueryClientProvider>
  )
};





export default App;
