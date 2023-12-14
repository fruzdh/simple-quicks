import { Flex } from "@chakra-ui/react";
import InboxDetailHeader from "./inboxDetailHeader";
import InboxDetailItem from "./inboxDetailItem";
import InboxDetailFooter from "./inboxDetailFooter";
import { useEffect, useRef, useState } from "react";
import { useSimpleQuicks } from "../../../../context/simpleQuicksContext";
import { getInboxDetail } from "../../../../data";

const InboxDetail = () => {
  const { inboxId } = useSimpleQuicks();
  const [data, setData] = useState();
  const ref = useRef();

  useEffect(() => {
    getInboxDetail(inboxId).then((value) => setData(value));
  }, [inboxId]);

  useEffect(() => {
    ref.current?.lastElementChild?.scrollIntoView();
  }, [data]);

  return (
    <Flex direction="column" gap="16px" h="100%">
      <InboxDetailHeader data={data} />
      <Flex
        ref={ref}
        flex="1"
        px="16px"
        direction="column"
        overflowY="scroll"
        gap="16px"
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
        {data?.chat?.map((d, i) => (
          <InboxDetailItem
            key={d.id}
            data={d}
            participants={data?.participants}
            dateBefore={i > 0 ? data?.chat[i - 1]?.time : undefined}
          />
        ))}
      </Flex>
      <InboxDetailFooter />
    </Flex>
  );
};

export default InboxDetail;
