import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getCategories, deleteCategory } from "./apiAdmin";
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom'

const ManageCategory = () => {
    const [category, setCategory] = useState([]);
    const [redirection, setRedirect] = useState(false);
    const { user, token } = isAuthenticated();

    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setCategory(data);
            }
        });
    };

    const destroy = categoryId => {
        swal({
            title: "Warning",
            text: "Are you sure you want to delete this category ?",
            icon: "warning",
            dangerMode: true,
        }).then(willDelete => {
            if (willDelete) {
                deleteCategory(categoryId, user._id, token).then(data => {
                    if (data.error && data.code) {
                        setRedirect(true)
                    }
                    else if (data.error) {
                        console.log(data.error);
                    }
                    else {
                        swal("Updated!", "Your category has been deleted successfully!", "success")
                        loadCategories();
                    }
                });
            } else {
                swal("cancelled!", "Operation cancelled!", "info")
            }
        });
    };

    useEffect(() => {
        loadCategories();
    }, []);


    const redirectUser = () => {
        if (redirection) {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('jwt') // Remove token from local storage
                //alert("session timeout")
                swal("warning!", "Session Timeoout!!!! Invalid Authorization!", "info")
                return <Redirect to="/signin" />
            }
        }
    }
    return (
        <Layout
            title="Manage Categries"
            description="Perform CRUD on categories"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center">
                        {redirectUser()}
                        Total {category.length} Categories
                    </h2>
                    <hr />
                    <ul className="list-group">
                        {category.map((p, i) => (
                            <li
                                key={i}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <strong>{p.name}</strong>
                                <Link to={`/admin/category/update/${p._id}`}>
                                    <span className="badge badge-warning badge-pill">
                                        Update
                                    </span>
                                </Link>
                                <span
                                    onClick={() => destroy(p._id)}
                                    className="badge badge-danger badge-pill"
                                >
                                    Delete
                                </span>
                            </li>
                        ))}
                    </ul>
                    <br />
                </div>
            </div>
        </Layout>
    );
};

export default ManageCategory;
