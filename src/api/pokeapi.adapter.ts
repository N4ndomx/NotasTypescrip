import axios from "axios";
// import { PokeapiResponse } from "../interface/pokeapi-responce.interface";

export interface HttpAdapter {
    // No es necesario el async a la hora de declarar 
    get<T>(url: string): Promise<T>
}




export class PokeApiFecthAdapter implements HttpAdapter {

    async get<T>(url: string): Promise<T> {
        const res = await fetch(url);
        const data: T = await res.json();
        console.log('Hola Fetch')
        return data
    }

}
export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios;
    // Generico <T>
    async get<T>(url: string): Promise<T> {
        const { data } = await this.axios.get<T>(url);
        console.log('Hola Axios')
        return data
    }

}