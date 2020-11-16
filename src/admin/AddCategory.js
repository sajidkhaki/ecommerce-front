import React, { useState } from 'react';
import Layout from '../core/Layout'
import { isAuthenticated } from '../auth/index'
import { Link } from 'react-router-dom';
import { addAdminCategory } from '../admin/apiAdmin'
import { Toast } from 'react-bootstrap';

const AddCategory = () => {

    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [toaster, setToaster] = useState(false)

    const [showtoaster, setShowtoaster] = useState(true);

    // destruct user and token from local storage

    const { user, token } = isAuthenticated()


    const handleChange = e => {
        setError('')
        setSuccess('')
        setToaster(false)
        setName(e.target.value)
    }

    const clickSubmit = event => {
        event.preventDefault()
        setShowtoaster(true)
        if (name.length > 2) {
            setError('')
            setSuccess(false)
            // make request to API
            addAdminCategory(user._id, token, { name })
                .then(data => {
                    console.log("Response from server end", data)
                    if (data.error) {
                        setError(true)
                    }
                    else {
                        setError('')
                        setSuccess(true)
                    }
                })
        } else {
            setToaster(true)
        }
    }

    const showSuccess = () => {
        if (success) {
            // return <h3 className="text-success">{name} is created</h3>
            return (
                <Toast show={showtoaster} onClose={toggleShowToaster} delay={3000} autohide>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                        <strong className="mr-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>{name} is created successfully</Toast.Body>
                </Toast>
            )
        }
    }
    const toggleShowToaster = () => {
        setShowtoaster(!showtoaster);
        setError('')
        setSuccess('')
        setName('')
    }

    const showToaster = () => {
        if (toaster) {
            return (
                <Toast show={showtoaster} onClose={toggleShowToaster} delay={3000} autohide>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                        <strong className="mr-auto">Error</strong>
                    </Toast.Header>
                    <Toast.Body>Category length should be greater than 2.</Toast.Body>
                </Toast>
            )
        }
    }

    const showError = () => {
        if (error) {
            return <h3 className="text-danger">Category {name} should be unique</h3>
        }
    }

    const goBack = () => (
        <div className="mt-5">
            <Link to="/admin/dashboard" className="text-warning">Dashboard</Link>
        </div>
    )


    const newCategoryForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Category Name</label>
                <input onChange={handleChange} type="name" className="form-control"
                    value={name} autoFocus required />
            </div>
            <button className="btn btn-outline-primary" onClick={clickSubmit} >
                Create Category
            </button>
        </form>
    )

    return (
        <Layout title="Add new category" description={`Welcome : ${user.name}`}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showToaster()}
                    {goBack()}
                    {showSuccess()}
                    {showError()}
                    {newCategoryForm()}
                </div>
            </div>
        </Layout>
    )
}

export default AddCategory