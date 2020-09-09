import {Request} from "@/utils/request";
import {AxiosRequestConfig} from "axios"
 class User extends Request{
    constructor(config:AxiosRequestConfig){
        super(config)
    };
    async login(params:{userName:string,password:string}){
        return await this.post("/users/login",params)
    }
}
export default User