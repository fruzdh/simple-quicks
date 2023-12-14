import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

import close from "../../../../assets/icon/close.png";
import { useSimpleQuicks } from "../../../../context/simpleQuicksContext";

const InboxDetailFooter = () => {
  const { reply, setReply } = useSimpleQuicks();

  return (
    <Flex pb="16px" px="16px" gap="16px" fontSize="14px">
      <Input
        placeholder="Type a new message"
        borderColor="primary.gray"
        size="sm"
        borderRadius="md"
        borderTopRadius={reply ? "none" : "md"}
        _focus={{
          boxShadow: "none",
          borderColor: "primary.gray",
        }}
        _hover={{
          borderColor: "primary.gray",
        }}
      />
      <Button
        size="sm"
        w="50px"
        minW="50px"
        bgColor="primary.blue"
        textColor="white"
        _hover={{
          bgColor: "primary.blue",
        }}
      >
        Send
      </Button>

      {reply && (
        <Box
          bgColor="primary.white"
          p="2"
          borderTopRadius="md"
          border="1px solid"
          borderColor="primary.gray"
          w="calc(100%  - 98px)"
          position="absolute"
          bottom="48px"
          borderBottom="none"
        >
          <Flex justifyContent="flex-end">
            <IconButton
              icon={<Image src={close} />}
              w="12px"
              h="12px"
              minW="unset"
              variant="unstyled"
              onClick={() => setReply()}
            />
          </Flex>
          <Text noOfLines={1} fontWeight="bold">
            Replying to {reply.name}
          </Text>
          <Text noOfLines={3}>{reply.message}</Text>
        </Box>
      )}
    </Flex>
  );
};

export default InboxDetailFooter;
