import AllRoutes from "./routes/AllRoutes";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <AllRoutes />
    </ChakraProvider>
  );
}

export default App;
