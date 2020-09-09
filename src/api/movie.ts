import {Request} from "@/utils/request";
import {AxiosRequestConfig}from "axios"
class Movie extends Request{
    constructor(config:AxiosRequestConfig){
        super(config)
    };
    async getMovies(data:{keyWords:string,pageNum:number,pageSize:number}){
        return await this.post("/movie/getMovies",data)
    }
}
export default Movie