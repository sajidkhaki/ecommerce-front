import { API } from '../config'

export const addAdminCategory = (userId, token, category) => {
    console.log("Data", category)
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            console.log("Response", response)
            return response.json()
        }).catch(err => {
            console.log("Error", err)
        })
}


export const createProduct = (userId, token, product) => {
    console.log("Data", product)
    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            console.log("Response", response)
            return response.json()
        }).catch(err => {
            console.log("Error", err)
        })
}