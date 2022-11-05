import { writable, Writable } from "svelte/store";

export const nodeStore = writable(
    {
        name: "A",
        children: [
          { name: "D" },
          { 
            name: "C", 
            children: [
                { 
                    name: "F",
                    children: [
                        {
                            name: 'L',
                            value: 'Test'
                        }
                    ]
                }, 
                { name: "E" }
                ] 
            },
          { name: "B" },
        ],
      }
)

export const trelloStore = writable(
    [
        {
            title: 'Todo',
            todos: [
                {
                    title: 'Trello clone',
                    id: 1,
                    subList: [
                        {
                            title: 'Trello clone',
                            id: 2,
                            subList: []
                        },
                    ]
                },
                {
                    title: 'Trello clone',
                    id: 3,
                    subList: []
                },
                {
                    title: 'Trello clone',
                    id: 4,
                    subList: []
                }
            ]
        },
        {
            title: 'In-Progress',
            todos: [
                {
                    title: 'Trello clone',
                    id: 5,
                    subList: []
                },
                {
                    title: 'Trello clone',
                    id: 6,
                    subList: []
                }
            ]
        },
        {
            title: 'Done',
            todos: [
                {
                    title: 'Trello clone',
                    id: 7,
                    subList: []
                }
            ]
        },
        {
            title: 'On-Hold',
            todos: []
        }
    ]
)

export const nodeStore2 = writable(
    [
        {
            id: 0,
            name: '',
            parent: '',
        }
    ]
)




