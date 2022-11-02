import { writable, Writable } from "svelte/store";

export const nodeStore = writable(
    {
        nodes: [
            {
                id: 'A',
                Label: 'Start'
            }
        ],
        links: []
    }
)




