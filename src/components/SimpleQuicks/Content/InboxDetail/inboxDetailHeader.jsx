import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useSimpleQuicks } from "../../../../context/simpleQuicksContext";

import arrow_left from "../../../../assets/icon/arrow-left.png";
import close from "../../../../assets/icon/close.png";

const InboxDetailHeader = ({ data }) => {
  const { setActiveType, setInboxId } = useSimpleQuicks();

  return (
    <Flex
      alignItems="center"
      gap="16px"
      py="16px"
      px="16px"
      borderBottom="1px solid"
      borderBottomColor="primary.gray"
    >
      <IconButton
        icon={<Image src={arrow_left} />}
        w="24px"
        h="24px"
        minW="unset"
        variant="unstyled"
        onClick={() => setInboxId()}
      />

      <Box>
        <Heading
          fontSize="16px"
          fontWeight="bold"
          textColor="primary.blue"
          noOfLines={1}
        >
          {data?.title}
        </Heading>
        {data?.type === "group" && (
          <Text fontSize="14px">{data?.total_participant} participants</Text>
        )}
      </Box>
      <Spacer />
      <IconButton
        icon={<Image src={close} />}
        w="14px"
        h="14px"
        minW="unset"
        variant="unstyled"
        onClick={() => {
          setInboxId();
          setActiveType();
        }}
      />
    </Flex>
  );
};

export default InboxDetailHeader;
