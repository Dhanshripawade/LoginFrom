import React, { useEffect, useState } from 'react';
import Sidebar from '../../layout/Sidebar';
import Navbar1 from '../../layout/Navbar';
import Form from "react-bootstrap/Form";
import { FormControl, Card, Pagination } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { BsThreeDotsVertical } from 'react-icons/bs';

function User() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(8);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/users")
            .then((response) => {
                setUsers(response.data.users);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = users.slice(firstPostIndex, lastPostIndex);

    const totalPages = Math.ceil(users.length / postPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='d-flex mt-5'>
            <div className='col-2'>
                <Sidebar />
            </div>
            <div className='col-10'>
                <Navbar1 />
                <div className='d-flex justify-content-between align-items-center mt-4 mx-4'>
                    <h4>Users</h4>
                    <button className='btn btn-dark'>+ New User</button>
                </div>

                <Card className='mt-4 mx-4 shadow-sm border-0 bg-light'>
                    <Card.Body>
                        <Form className="mb-4">
                            <div className="position-relative w-50">
                                <FaSearch
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "15px",
                                        transform: "translateY(-50%)",
                                        color: "#6c757d"
                                    }}
                                />
                                <FormControl
                                    type="search"
                                    placeholder="Search user..."
                                    style={{
                                        paddingLeft: "40px",
                                        borderRadius: "30px",
                                        border: "1px solid #ced4da",
                                        boxShadow: "none"
                                    }}
                                />
                            </div>
                        </Form>

                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Name</th>
                                        <th>Company</th>
                                        <th>Role</th>
                                        <th>Verified</th>
                                        <th>Gender</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr>
                                            <td colSpan="6" className="text-center">Loading...</td>
                                        </tr>
                                    ) : (
                                        currentPosts.map((user) => (
                                            <tr key={user.id}>
                                                <td>{user.firstName} {user.lastName}</td>
                                                <td>{user.company?.name}</td>
                                                <td>{user.company?.title}</td>
                                                <td>{user.bank?.cardType}</td>
                                                <td>
                                                    <span className={`badge ${user.gender === 'male' ? 'bg-success' : 'bg-danger'}`}>
                                                        {user.gender === 'male' ? 'Male' : 'Female'}
                                                    </span>
                                                </td>
                                                <td><BsThreeDotsVertical size={18} /></td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination Right Aligned */}
                        <div className="d-flex justify-content-end mt-3">
                            <Pagination>
                                <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
                                <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <Pagination.Item
                                        key={index + 1}
                                        active={index + 1 === currentPage}
                                        onClick={() => paginate(index + 1)}
                                    >
                                        {index + 1}
                                    </Pagination.Item>
                                ))}
                                <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
                                <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
                            </Pagination>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default User;
