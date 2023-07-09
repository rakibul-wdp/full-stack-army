export const task = {
  id: 1,
  subtitle: "Subtitle",
  tags: [
    {
      id: 1,
      text: "Its done",
      icon: "T"
    },
    {
      id: 2,
      text: "Its ancelled",
      icon: "X"
    },
    {
      id: 3,
      text: "Its in progress",
      icon: "P"
    },
    {
      id: 4,
      text: "Just wrote this",
      icon: "C"
    },
  ],
  comments: [
    {
      id: 1,
      user: {
        id: 1,
        avatar: "xyz.com",
        name: "Viraj",
      },
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam nulla debitis ullam libero!"
    }
  ],
  tasks: [
    {
      id: 1,
      title: "Foggy Nelson",
      text: "Here to clean the streets of Hell's Kitchen",
      status: "done"
    },
    {
      id: 2,
      title: "Louis CK",
      text: "Here to clean the streets of Hell's Kitchen",
      status: "cancelled"
    },
    {
      id: 3,
      title: "Albert Einstein",
      text: "Here to clean the streets of Hell's Kitchen",
      status: "progress"
    },
    {
      id: 4,
      title: "Progress",
      text: "Here to clean the streets of Hell's Kitchen",
      status: "done"
    },
  ]
}