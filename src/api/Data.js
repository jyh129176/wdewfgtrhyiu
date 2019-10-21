import { Req } from "../uit/hang"
//当前城市
export const shou= data =>Req.getData({
    url:`/aa/`,
    method:"get",
    data,
})
//热门城市
export const sho= data =>Req.getData({
    url:`/aa/`,
    method:"get",
    data,
})
//所有城市
export const sh= data =>Req.getData({
    url:`/aa/`,
    method:"get",
    data,
})
//获取所选城市信息
export const huo= (data,id) =>Req.getData({
    url:`/aa/`+id,
    method:"get",
    data,
})
//获取所选城市信息
export const jwd= (data,id) =>Req.getData({
    url:`/aa/`+id,
    method:"get",
    data,
})