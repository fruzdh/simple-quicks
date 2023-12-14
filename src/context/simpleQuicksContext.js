import { createContext, useContext, useMemo, useState } from "react";

import inbox from "../assets/icon/inbox.png";
import inbox_active from "../assets/icon/inbox-active.png";
import task from "../assets/icon/task.png";
import task_active from "../assets/icon/task-active.png";

const SimpleQuicksContext = createContext({
  data: [],
  activeType: undefined,
  setActiveType: () => {},
  inboxId: undefined,
  setInboxId: () => {},
  reply: undefined,
  setReply: () => {},
});
SimpleQuicksContext.displayName = "SimpleQuicksContext";

const SimpleQuicksProvider = (props) => {
  const data = useMemo(() => {
    return [
      {
        type: "Task",
        color: "indicator.orange",
        icon: task,
        icon_active: task_active,
      },
      {
        type: "Inbox",
        color: "indicator.blue",
        icon: inbox,
        icon_active: inbox_active,
      },
    ];
  }, []);

  const [activeType, setActiveType] = useState();
  const [inboxId, setInboxId] = useState();
  const [reply, setReply] = useState();

  return (
    <SimpleQuicksContext.Provider
      value={{
        data,
        activeType,
        setActiveType,
        inboxId,
        setInboxId,
        reply,
        setReply,
      }}
      {...props}
    />
  );
};

const useSimpleQuicks = () => {
  const context = useContext(SimpleQuicksContext);
  if (!context) {
    throw new Error(
      "useSimpleQuicks must be used within a SimpleQuicksProvider"
    );
  }

  return context;
};

export { SimpleQuicksContext, SimpleQuicksProvider, useSimpleQuicks };
