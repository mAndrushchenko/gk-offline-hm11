export interface ITodo {
    text: string
    id: number
    completed: boolean
}

export type TTodosArray = ITodo[]


export interface ITodoComponent {
    todo: ITodo
    key: number
}

export interface IErrorIcon {
    message: string
}