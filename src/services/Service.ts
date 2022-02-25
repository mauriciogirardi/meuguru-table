import axios, { AxiosResponse } from "axios"

const Http = axios.create()

export class Service {
    protected static Http = Http
    protected static getDate = getDate
}

function getDate<T>(response: AxiosResponse<T>) {
    return response.data
}

Http.defaults.baseURL = 'https://api.meuguru.net/global'
