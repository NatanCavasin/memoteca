//Modelo de retorno da API
export interface Thought {
    id?: number;
    content: string;
    autorship: string;
    model: string;
    favorite: boolean;
}