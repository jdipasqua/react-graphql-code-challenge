
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './components/Home';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>

    <ChakraProvider>
        <div>
          <Home/>
        </div>
    </ChakraProvider>
    </QueryClientProvider>

  )
};

export default App;
