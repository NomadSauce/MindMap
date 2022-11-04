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

export const nodeStore2 = writable(
    [
        {
            id: 0,
            name: '',
            parent: '',
        }
    ]
)




