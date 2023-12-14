import { Center, Text } from "@chakra-ui/react";
import CircleIcon from "../CircleIcon";

const Menu = ({ text, logo, bgColor, isHovered, ...rest }) => {
  return (
    <Center flexDirection="column" {...rest}>
      <Text
        color="primary.white"
        fontWeight="bold"
        display={isHovered ? "block" : "none"}
      >
        {text}
      </Text>
      <CircleIcon logo={logo} bgColor={bgColor} />
    </Center>
  );
};

export default Menu;
