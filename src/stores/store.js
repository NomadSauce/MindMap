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
                    status: 'Todo',
                    subList: []
                },
                {
                    title: 'Trello clone',
                    status: 'Todo',
                    subList: []
                },
                {
                    title: 'Trello clone',
                    status: 'Todo',
                    subList: []
                }
            ]
        },
        {
            title: 'In-Progress',
            todos: [
                {
                    title: 'Trello clone',
                    status: 'In-Progress',
                    subList: []
                },
                {
                    title: 'Trello clone',
                    status: 'In-Progress',
                    subList: []
                }
            ]
        },
        {
            title: 'Done',
            todos: []
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




