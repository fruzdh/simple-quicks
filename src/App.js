import "./App.css";
import { Box } from "@chakra-ui/react";
import SimpleQuicks from "./components/SimpleQuicks";
import { SimpleQuicksProvider } from "./context/simpleQuicksContext";

function App() {
  return (
    <Box w="100vw" h="100vh" bgColor="#333333">
      <SimpleQuicksProvider>
        <SimpleQuicks />
      </SimpleQuicksProvider>
    </Box>
  );
}

export default App;
