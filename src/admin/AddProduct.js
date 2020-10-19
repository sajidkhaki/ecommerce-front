import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout'
import { isAuthenticated } from '../auth/index'
import { Link } from 'react-router-dom';
import { createProduct } from '../admin/apiAdmin'


const AddProduct = () => {
    const { user, token } = isAuthenticated()
    return (
        <Layout title="Add new product" description={`Welcome :  ${user.name.toUpperCase()}`}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                </div>
            </div>
        </Layout>
    )
}

export default AddProduct