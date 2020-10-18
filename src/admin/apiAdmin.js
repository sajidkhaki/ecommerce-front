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