
import { QueryClient, QueryClientProvider } from 'react-query';
// 1. import `ChakraProvider` component
import { ChakraProvider, GlobalStyle } from '@chakra-ui/react';

import theme from './styles/theme';
import { Nav } from './components/common/Nav';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';



const App = () => {
  const queryClient = new QueryClient();

  let msg = '%c What\'s up? 🤙🏽 ! Welcome to my challenge!';
  let styles = [
    'font-size: 12px',
    'font-family: monospace',
    'background: white',
    'display: inline-block',
    'color: black',
    'padding: 8px 19px',
    'border: 1px dashed;'
  ].join(';')
  console.log(msg, styles);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </ChakraProvider>
    </QueryClientProvider>
  )
};

export default App;
