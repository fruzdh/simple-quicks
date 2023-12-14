const chatRoom = [
  {
    id: 0,
    participants: {
      0: {
        name: "Person 0",
        color_light: "chats.blue.light",
        color_dark: "chats.blue.dark",
      },
      1: {
        name: "Person 1",
        color_light: "chats.orange.light",
        color_dark: "chats.orange.dark",
      },
    },
    total_participant: 2,
    type: "private",
    title: "Person 1",
    chat: Array.from({ length: 10 })
      .map((_, i) => ({
        id: i,
        from: i % 3 === 0 ? 0 : 1,
        message: `${i} - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate lacus nulla, in dignissim augue placerat mattis.`,
        time: new Date(2023, 11, Math.random() * 31, Math.random() * 23),
        read: i < 5 ? [i % 3 === 0 ? 1 : 0] : [],
        reply_to: "",
      }))
      .sort((a, b) => new Date(a.time) - new Date(b.time)),
  },
  {
    id: 1,
    participants: {
      0: {
        name: "Person 0",
        color_light: "chats.blue.light",
        color_dark: "chats.blue.dark",
      },
      2: {
        name: "Person 2",
        color_light: "chats.orange.light",
        color_dark: "chats.orange.dark",
      },
    },
    total_participant: 2,
    type: "private",
    title: "Person 2",
    chat: Array.from({ length: 10 })
      .map((_, i) => ({
        id: i,
        from: i % 3 === 0 ? 2 : 0,
        message: `${i} - Lorem ipsum dolor sit amet`,
        time: new Date(2023, 11, Math.random() * 31, Math.random() * 23),
        read: [],
        reply_to: i > 0 ? `${i - 1} - Lorem ipsum dolor sit amet.` : "",
      }))
      .sort((a, b) => new Date(a.time) - new Date(b.time)),
  },
  {
    id: 2,
    participants: {
      0: {
        name: "Person 0",
        color_light: "chats.blue.light",
        color_dark: "chats.blue.dark",
      },
      1: {
        name: "Person 1",
        color_light: "chats.orange.light",
        color_dark: "chats.orange.dark",
      },
      3: {
        name: "Person 3",
        color_light: "chats.green.light",
        color_dark: "chats.green.dark",
      },
    },
    total_participant: 3,
    type: "group",
    title: "Group Chat 0",
    chat: Array.from({ length: 10 })
      .map((_, i) => ({
        id: i,
        from: [0, 1, 3][i % 3],
        message: `${i} - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate lacus nulla, in dignissim augue placerat mattis.`,
        time: new Date(2023, 11, Math.random() * 31, Math.random() * 23),
        read: [],
        reply_to:
          i > 3 && i < 7
            ? `${
                i - 1
              } - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate lacus nulla, in dignissim augue placerat mattis..`
            : "",
      }))
      .sort((a, b) => new Date(a.time) - new Date(b.time)),
  },
  {
    id: 3,
    participants: {
      0: {
        name: "Person 0",
        color_light: "chats.blue.light",
        color_dark: "chats.blue.dark",
      },
      2: {
        name: "Person 2",
        color_light: "chats.orange.light",
        color_dark: "chats.orange.dark",
      },
      3: {
        name: "Person 3",
        color_light: "chats.green.light",
        color_dark: "chats.green.dark",
      },
    },
    total_participant: 3,
    type: "group",
    title: "Group Chat 1",
    chat: Array.from({ length: 10 })
      .map((_, i) => ({
        id: i,
        from: [0, 2, 3][i % 3],
        message: `${i} - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate lacus nulla, in dignissim augue placerat mattis.`,
        time: new Date(2023, 11, Math.random() * 31, Math.random() * 23),
        read: [],
        reply_to: "",
      }))
      .sort((a, b) => new Date(a.time) - new Date(b.time)),
  },
];

const task = Array.from({ length: 10 })
  .map((_, i) => ({
    id: i,
    title: `${i} - Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    time: new Date(2023, 11, Math.random() * 31, Math.random() * 23),
    description: `${i} - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate lacus nulla, in dignissim augue placerat mattis.`,
    category: "my-task",
    isDone: i < 5,
  }))
  .sort((a, b) => {
    if (a.isDone && !b.isDone) {
      return 1;
    } else if (!a.isDone && b.isDone) {
      return -1;
    } else {
      return new Date(b.time) - new Date(a.time);
    }
  });

const getInboxList = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(chatRoom);
  }, 3000);
});

const getInboxDetail = (cid) => {
  return new Promise((resolve, reject) => {
    resolve(chatRoom.find(({ id }) => id === cid));
  });
};

const getTask = new Promise((resolve, reject) => {
  resolve(task);
});

export { getInboxList, getInboxDetail, getTask };
