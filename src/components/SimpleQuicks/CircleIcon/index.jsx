import { Center, Image } from "@chakra-ui/react";

const CircleIcon = ({ logo, ...rest }) => {
  return (
    <Center w="50px" h="50px" borderRadius="full" cursor="pointer" {...rest}>
      <Image src={logo} />
    </Center>
  );
};

export default CircleIcon;
