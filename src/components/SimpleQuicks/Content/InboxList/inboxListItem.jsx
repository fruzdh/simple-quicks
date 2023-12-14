import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ChatIcon from "./chatIcon";
import { useSimpleQuicks } from "../../../../context/simpleQuicksContext";

const InboxListItem = ({ data, isLast }) => {
  const { setInboxId } = useSimpleQuicks();

  return (
    <Flex
      key={data.id}
      py="22px"
      borderBottom={isLast ? "none" : "1px solid"}
      borderBottomColor="primary.gray"
      cursor="pointer"
      gap="16px"
      onClick={() => setInboxId(data.id)}
    >
      <ChatIcon type={data.type} />
      <Box maxW="calc(100% - 212px)" flex="1">
        <Heading
          fontWeight="bold"
          fontSize="16px"
          textColor="primary.blue"
          noOfLines={2}
        >
          {data.title}
        </Heading>
        {data.type === "group" && (
          <Flex fontWeight="bold" fontSize="14px">
            <Text noOfLines={1}>{data.chat.slice(-1)[0].from}</Text>
            <Text>:</Text>
          </Flex>
        )}
        <Text fontSize="14px" noOfLines={1}>
          {data.chat.slice(-1)[0].message}
        </Text>
      </Box>
      <Text fontSize="14px">
        {data.chat.slice(-1)[0].time.toLocaleString(undefined, {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        })}
      </Text>
    </Flex>
  );
};

export default InboxListItem;
