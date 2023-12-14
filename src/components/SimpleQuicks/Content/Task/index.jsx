import { Accordion, Button, Flex, Select, Spacer } from "@chakra-ui/react";
import TaskItem from "./taskItem";
import { useEffect, useState } from "react";
import { getTask } from "../../../../data";

const Task = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTask.then((value) => setData(value));
  }, []);

  return (
    <Flex
      py="16px"
      px="16px"
      gap="16px"
      direction="column"
      h="70vh"
      minH="500px"
      maxH="700px"
    >
      <Flex>
        <Select
          w="150px"
          size="sm"
          borderColor="primary.gray"
          _focus={{
            boxShadow: "none",
            borderColor: "primary.gray",
          }}
          _hover={{
            borderColor: "primary.gray",
          }}
        >
          <option value="my-task">My Task</option>
          <option value="personal-errands">Personal Errands</option>
          <option value="urgent-to-do">Urgent To-Do</option>
        </Select>
        <Spacer />
        <Button
          size="sm"
          bgColor="primary.blue"
          textColor="white"
          onClick={() =>
            setData([
              {
                id: -1,
                title: "",
                time: "",
                description: "",
                category: "my-task",
                isDone: false,
              },
              ...data,
            ])
          }
          _hover={{
            bgColor: "primary.blue",
          }}
        >
          New Task
        </Button>
      </Flex>
      <Accordion
        allowMultiple
        flex="1"
        maxH="calc(100% - 40px)"
        overflowY="scroll"
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
        {data?.map((d) => (
          <TaskItem key={d.id} data={d} />
        ))}
      </Accordion>
    </Flex>
  );
};

export default Task;
