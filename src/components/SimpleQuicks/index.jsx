import logo from "../../assets/icon/logo.png";

import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import CircleIcon from "./CircleIcon";
import Menu from "./Menu";
import Content from "./Content";
import { useSimpleQuicks } from "../../context/simpleQuicksContext";

const SimpleQuicks = () => {
  const { data, activeType, setActiveType, setInboxId } = useSimpleQuicks();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Flex
        position="fixed"
        bottom="16px"
        right={activeType ? "24px" : "16px"}
        gap="16px"
        alignItems="flex-end"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {data.map(({ type, color, icon, icon_active }) => (
          <Menu
            key={type}
            text={type}
            logo={activeType === type ? icon_active : icon}
            bgColor={activeType === type ? color : "white"}
            isHovered={isHovered}
            position={
              activeType === type || (!isHovered && !activeType)
                ? "absolute"
                : "static"
            }
            right={activeType === type ? "-8px" : "0"}
            zIndex={4}
            onClick={() => {
              setInboxId();
              if (activeType === type) {
                setActiveType();
              } else {
                setActiveType(type);
              }
            }}
            display={!isHovered && !activeType ? "none" : "block"}
          />
        ))}

        <CircleIcon
          logo={logo}
          bgColor={activeType ? "primary.black" : "primary.blue"}
          zIndex={isHovered || activeType ? 1 : 1 + 4}
        />
      </Flex>

      <Content />
    </>
  );
};

export default SimpleQuicks;
