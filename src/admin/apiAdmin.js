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


export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET",
    })
        .then(response => {
            console.log("Response", response)
            return response.json()
        }).catch(err => {
            console.log("Error", err)
        })
}

export const listOrders = (userId, token) => {
    return fetch(`${API}/order/list/${userId}`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json()
        }).catch(err => {
            console.log("Error", err)
        })
}

export const getStatusValues = (userId, token) => {
    return fetch(`${API}/order/shippingStatus/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateOrderStatus = (userId, token, orderId, status) => {
    return fetch(`${API}/order/${orderId}/updateStatus/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status, orderId })
    })
        .then(response => {
            console.log("Response of update status", response)
            return response.json();
        })
        .catch(err => console.log(err));
};
