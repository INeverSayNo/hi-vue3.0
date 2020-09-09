import axios ,{AxiosInstance,AxiosRequestConfig,AxiosResponse}from "axios";
import store from "@/store"
export class Request{
    private api:AxiosInstance;
    constructor(config:AxiosRequestConfig){
        this.api=axios.create(config);
        this.api.interceptors.request.use((params:AxiosRequestConfig)=>{
            console.log(store);
            
            return params
        });
        this.api.interceptors.response.use((params:AxiosResponse)=>{
            return params
        })
   
    };
    public get<T,R=AxiosResponse<T>>(url:string,config?:AxiosResponse):Promise<R>{
        return this.api.get(url,config)
    };
    public post<T,R=AxiosResponse<T>>(url:string,data?:any,config?:AxiosRequestConfig):Promise<R>{
        return this.api.post(url,data,config)
    }
}