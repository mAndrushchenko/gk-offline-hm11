import { TTodosArray } from "../types/components-types"

export const defListForHooks: TTodosArray = [
    {
        text: 'bananas',
        id: Math.random() + Date.now(),
        completed: false
    },
    {
        text: 'oranges',
        id: Math.random() + Date.now(),
        completed: false
    }
]
