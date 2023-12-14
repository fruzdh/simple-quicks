import { Box } from "@chakra-ui/react";
import CircleIcon from "../../CircleIcon";

import person_black from "../../../../assets/icon/person_black.png";
import person_white from "../../../../assets/icon/person_white.png";

const ChatIcon = ({ type }) => {
  return (
    <Box position="relative" w="60px">
      <CircleIcon
        logo={person_black}
        bgColor="primary.white"
        cursor="unset"
        w="40px"
        h="40px"
        visibility={type === "group" ? "visible" : "hidden"}
      />
      <CircleIcon
        logo={person_white}
        bgColor="primary.blue"
        cursor="unset"
        w="40px"
        h="40px"
        position="absolute"
        top="0"
        left="20px"
      />
    </Box>
  );
};

export default ChatIcon;
