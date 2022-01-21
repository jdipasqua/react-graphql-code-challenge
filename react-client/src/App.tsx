
import { QueryClient, QueryClientProvider } from 'react-query';
// 1. import `ChakraProvider` component
import { ChakraProvider, GlobalStyle } from '@chakra-ui/react';

import theme from './styles/theme';
import { Nav } from './components/Nav';
import Home from './components/Home/Home';

const App = () => {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Home />
      </ChakraProvider>
    </QueryClientProvider>
  )
};

export default App;
