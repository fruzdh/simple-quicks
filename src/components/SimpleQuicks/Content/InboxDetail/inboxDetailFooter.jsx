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
import { useState } from "react";

const InboxDetailFooter = ({ data, setData }) => {
  const { reply, setReply } = useSimpleQuicks();
  const [message, setMessage] = useState("");

  console.log(data);

  return (
    <Flex pb="16px" px="16px" gap="16px" fontSize="14px">
      <Input
        placeholder="Type a new message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
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
        isDisabled={message === ""}
        onClick={() =>
          setData({
            ...data,
            chat: [
              ...data?.chat,
              {
                id: -1,
                from: 0,
                message: message,
                time: new Date(),
                read: [],
                reply_to: reply?.message,
              },
            ],
          })
        }
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
