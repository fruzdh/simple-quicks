import {
  Box,
  Divider,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

import more_vert from "../../../../assets/icon/more-vert.png";
import { useSimpleQuicks } from "../../../../context/simpleQuicksContext";

const InboxDetailItem = ({ data, participants, dateBefore }) => {
  const { setReply } = useSimpleQuicks();

  return (
    <Flex
      fontSize="14px"
      direction="column"
      alignItems={data?.from === 0 ? "end" : "start"}
    >
      {(data?.time.toDateString() !== dateBefore?.toDateString() ||
        !dateBefore) && (
        <Flex alignItems="center" gap="16px" w="100%">
          <Divider opacity="1" borderColor="black" />
          <Text minW="150px" textAlign="center">
            {data?.time.toDateString() === new Date().toDateString() &&
              "Today "}
            {data?.time.toDateString()}
          </Text>
          <Divider opacity="1" borderColor="black" />
        </Flex>
      )}
      <Text>{participants[data?.from]?.name}</Text>
      {data?.reply_to && (
        <Box
          bgColor="primary.white"
          p="2"
          borderRadius="md"
          border="1px solid"
          borderColor="primary.gray"
          maxW="70%"
          mb="3"
        >
          <Text noOfLines={3}>{data?.reply_to}</Text>
        </Box>
      )}
      <Flex gap="3" direction={data?.from === 0 ? "row-reverse" : "row"}>
        <Box
          bgColor={`var(--chakra-colors-${participants[
            data?.from
          ]?.color_light.replaceAll(".", "-")})`}
          p="2"
          borderRadius="md"
          maxW="50%"
        >
          <Text>{data?.message}</Text>
          <Text mt="3">
            {data?.time.toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric",
            })}
          </Text>
        </Box>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<Image src={more_vert} />}
            variant="unstyled"
            onClick={(e) => e.stopPropagation()}
            size="sm"
          />
          <MenuList>
            {data?.from === 0 ? (
              <>
                <MenuItem textColor="indicator.blue">Edit</MenuItem>
                <MenuItem textColor="indicator.red">Delete</MenuItem>
              </>
            ) : (
              <>
                <MenuItem textColor="indicator.blue">Share</MenuItem>
                <MenuItem
                  textColor="indicator.blue"
                  onClick={() => {
                    setReply({
                      name: participants[data?.from]?.name,
                      message: data?.message,
                    });
                  }}
                >
                  Reply
                </MenuItem>
              </>
            )}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default InboxDetailItem;
