import { writable, Writable } from "svelte/store";

export const nodeStore = writable(
    {
        nodes: [
            {
                id: 'A',
                label: 'Root'
            },
            {
                id: 'B',
                label: 'Node-1'
            },
            {
                id: 'C',
                label: 'Node-2'
            }
        ],
        links: [
            {
                start: 'A',
                target: 'B',
                weight: 10
            },
            {
                start: 'A',
                target: 'C',
                weight: 15

            }
        ]
    }
)

export const nodeStore2 = writable(
    {
        name: 'Root', 
        children: [
            {
                name: 'B-1',
                children: [
                    {
                        name: 'SB-1',
                        children: []
                    },
                    {
                        name: 'SB-2',
                        children: []
                    }
                ]
            },
            {
                name: 'B-2',
                children: []
            },
            {
                name: 'B-2',
                children: []
            },
            {
                name: 'B-2',
                children: []
            },
            
            
        ]
    }
)




