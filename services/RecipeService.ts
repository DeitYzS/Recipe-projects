import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { RecipeItem} from '@/utils/types'
import apiClient from "./AxiosClient"


const RecipeService = {
    getRecipes(perPage: number, page: number): Promise<AxiosResponse<RecipeItem[]>> {
        return apiClient.get<RecipeItem[]>('/recipes?_limit=' + perPage + '&_page=' + page)
    },
    getRecipeById(id: number): Promise<AxiosResponse<RecipeItem>> {
        return apiClient.get<RecipeItem>('/recipes/' + id.toString())
    },
    getAllRecipes(): Promise<AxiosResponse<RecipeItem[]>> {
        return apiClient.get<RecipeItem[]>('/recipes')
    }
}

export default RecipeService

// export default {
//   getEvent(perPage: number, page: number): Promise<AxiosResponse<EventItem[]>> {
//     return apiClient.get<EventItem[]>('/events?_limit=' + perPage + '&_page=' + page)
//   },
//   getEventById(id: number): Promise<AxiosResponse<EventItem>> {
//     return apiClient.get<EventItem>('events/' + id.toString())
//   },
//   saveEvent (event:EventItem) : Promise<AxiosResponse<EventItem>> {
//     return apiClient.post<EventItem>('/events', event)
//   },
//   getEventsByKeyword(keyword: string, perPage: number, page: number): Promise<AxiosResponse<EventItem[]>> {
//     return apiClient.get<EventItem[]>('/events?title=' + keyword + '&_limit=' + perPage + '&_page=' + page)

//   }
// LoginUser(username: string, password: string): Promise<AxiosResponse<UserItem>> {
//     return apiAuth.post<UserItem>('/auth/login', {username, password}) 
//     }
// }
