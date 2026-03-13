import { request } from "@/api/index";


export const getCategories = async () => {
    const res = await request.get("/categories")
    return res.data
}

export const createCategory = async (data: any) => {
    const res = await request.post("/category", data)
    return res.data
}

export const updateCategory = async ({id, data}: {id: number, data: any}) => {
    const res = await request.put(`/category/${id}`, data)
    return res.data
}

export const deleteCategory = async (id: number) => {
    const res = await request.delete(`/category/${id}`)
    return res.data
}