import {
  Box,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Skeleton,
} from "@chakra-ui/react";

import search from "../../../../assets/icon/search.png";
import { useEffect, useState } from "react";
import InboxListItem from "./inboxListItem";
import { getInboxList } from "../../../../data";
import { useSimpleQuicks } from "../../../../context/simpleQuicksContext";

const InboxList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { activeType, inboxId } = useSimpleQuicks();

  useEffect(() => {
    setIsLoading(true);
    getInboxList.then((value) => {
      setData(
        value.sort(
          (a, b) =>
            new Date(b.chat.slice(-1)[0].time) -
            new Date(a.chat.slice(-1)[0].time)
        )
      );
      setIsLoading(false);
    });
  }, [activeType, inboxId]);

  return (
    <Box py="16px" px="16px" h="70vh" minH="500px" maxH="700px">
      <InputGroup>
        <Input
          placeholder="Search"
          borderColor="primary.gray"
          _focus={{
            boxShadow: "none",
            borderColor: "primary.gray",
          }}
          _hover={{
            borderColor: "primary.gray",
          }}
        />
        <InputRightElement>
          <Image src={search} />
        </InputRightElement>
      </InputGroup>
      <Box
        overflowY="scroll"
        maxH="calc(100% - 45px)"
        pr="5px"
        mt="5px"
        sx={{
          "::-webkit-scrollbar": {
            width: "6px",
          },
          "::-webkit-scrollbar-track": {
            backgroundColor: "white",
          },
          "::-webkit-scrollbar-thumb": {
            background: "primary.gray",
            borderRadius: "3px",
          },
        }}
      >
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} w="100%" h="100px" my="3" />
            ))
          : data.map((d, i) => (
              <InboxListItem
                key={d.id}
                data={d}
                isLast={i === data.length - 1}
              />
            ))}
      </Box>
    </Box>
  );
};

export default InboxList;
