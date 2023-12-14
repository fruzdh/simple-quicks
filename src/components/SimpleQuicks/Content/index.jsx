import { Box } from "@chakra-ui/react";
import Task from "./Task";
import { useSimpleQuicks } from "../../../context/simpleQuicksContext";
import InboxDetail from "./InboxDetail";
import InboxList from "./InboxList";

const Content = () => {
  const { activeType, inboxId } = useSimpleQuicks();

  return (
    <Box
      display={activeType ? "block" : "none"}
      w="80vh"
      h="70vh"
      maxW="900px"
      maxH="800px"
      minW="600px"
      minH="500px"
      position="fixed"
      bottom="90px"
      right="16px"
      bgColor="white"
      borderRadius="sm"
    >
      {activeType === "Task" && <Task />}
      {activeType === "Inbox" && (inboxId ? <InboxDetail /> : <InboxList />)}
    </Box>
  );
};

export default Content;
