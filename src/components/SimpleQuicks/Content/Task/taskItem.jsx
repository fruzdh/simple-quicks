import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Textarea,
} from "@chakra-ui/react";
import edit_black from "../../../../assets/icon/edit-black.png";
import edit_blue from "../../../../assets/icon/edit-blue.png";
import more_vert from "../../../../assets/icon/more-vert.png";
import schedule_black from "../../../../assets/icon/schedule-black.png";
import schedule_blue from "../../../../assets/icon/schedule-blue.png";
import { useMemo, useState } from "react";

const TaskItem = ({ data }) => {
  const [isDone, setIsDone] = useState(data?.isDone);

  const visibility = useMemo(() => {
    if (data?.time) {
      return data?.time.getFullYear() === new Date().getFullYear() &&
        data?.time.getMonth() === new Date().getMonth() &&
        data?.time.getDate() - new Date().getDate() < 8 &&
        !isDone
        ? "visible"
        : "hidden";
    } else {
      return "hidden";
    }
  }, [isDone, data?.time]);

  return (
    <AccordionItem>
      <AccordionButton gap="16px" p="8px">
        <Checkbox
          cursor="pointer"
          isChecked={isDone}
          onChange={() => setIsDone(!isDone)}
          h="16px"
          __css={{
            "& .chakra-checkbox__control": {
              background: "white",
              borderColor: "primary.gray",
            },
          }}
          _checked={{
            "& .chakra-checkbox__control": {
              background: "white",
              borderColor: "primary.gray",
            },
            "& .chakra-checkbox__control:hover": {
              background: "white",
              borderColor: "primary.gray",
            },
            "& .chakra-checkbox__control svg": {
              stroke: "primary.gray !important",
            },
          }}
        />
        <Editable
          value={data?.title}
          onChange={() => {}}
          placeholder="Type Task Title"
          flex="1"
          textAlign="start"
          onClick={(e) => e.stopPropagation()}
        >
          <EditablePreview
            noOfLines={2}
            textDecoration={isDone ? "line-through" : "none"}
          />
          <EditableInput />
        </Editable>
        {data?.time && (
          <Text
            fontSize="14px"
            textColor="indicator.red"
            minW="75px"
            visibility={visibility}
          >
            {data?.time.getDate() - new Date().getDate() < 0
              ? "Late"
              : `${data?.time.getDate() - new Date().getDate()} Days left`}
          </Text>
        )}
        <Text fontSize="14px" minW="75px">
          {data?.time.toLocaleString(undefined, {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </Text>
        <AccordionIcon />
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
            <MenuItem textColor="indicator.red">Delete</MenuItem>
          </MenuList>
        </Menu>
      </AccordionButton>
      <AccordionPanel pl="40px" pb="3">
        <Flex alignItems="center" gap="3" mb="3">
          <Image
            src={data?.time ? schedule_blue : schedule_black}
            w="16px"
            h="16px"
          />
          <Input
            type="date"
            value={
              data?.time
                ? `${data?.time.getFullYear()}-${data?.time.getMonth()}-${
                    data?.time.getDate() < 10
                      ? "0" + data?.time.getDate()
                      : data?.time.getDate()
                  }`
                : ""
            }
            onChange={() => {}}
            size="sm"
            w="200px"
            borderColor="primary.gray"
            _hover={{
              borderColor: "primary.gray",
            }}
            _focus={{
              boxShadow: "none",
            }}
          />
        </Flex>
        <Flex alignItems="flex-start" gap="3">
          <Image
            src={data?.description ? edit_blue : edit_black}
            w="16px"
            h="16px"
            mt="3"
          />
          <Textarea
            placeholder="No Description"
            value={data?.description}
            onChange={() => {}}
            border="none"
            _focus={{
              borderColor: "primary.blue",
            }}
          />
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default TaskItem;
