import { request } from "@/api/index";


export const getBanners= async () => {
    const res = await request.get("/banneries")
    return res.data
}


export const createBanner = async (data: any) => {
    const res = await request.post("/banner", data)
    return res.data
}

export const updateBanner = async ({id, data}: {id:number, data: any}) => {
    const res = await request.put(`/banner/${id}`, data)
    return res.data
}

export const deleteBanner = async (id: number) => {
    const res = await request.delete(`/banner/${id}`)
    return res.data
}