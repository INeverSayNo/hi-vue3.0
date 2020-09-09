/*
 * @Author: your name
 * @Date: 2020-08-23 16:10:19
 * @LastEditTime: 2020-08-30 23:13:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\hi-vue3.0\src\api\index.ts
 */
import {config} from "@/config";
import User from "./user";
import Movies from "./movie"
import { AxiosRequestConfig } from 'axios';

export const  Connector={
    user:new User(config),
    movie:new Movies(config)
}
