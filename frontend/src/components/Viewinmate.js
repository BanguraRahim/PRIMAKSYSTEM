//import React, { useState, useEffect } from 'react';
//import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Modal, Button, Form } from 'react-bootstrap';
//import Footer from './Footer.js'
//import './App.css';
//
//const ViewInmate = () => {
//    const [inmates, setInmates] = useState([]);
//    const [editInmate, setEditInmate] = useState(null);
//    const [showModal, setShowModal] = useState(false);
//    const [imageFile, setImageFile] = useState(null);
//
//    useEffect(() => {
//        fetchInmates();
//    }, []);
//
//    const fetchInmates = async () => {
//        const response = await axios.get('http://localhost:8000/api/inmates/');
//        setInmates(response.data);
//    };
//
//    const handleDelete = async (id) => {
//        await axios.delete(`http://localhost:8000/api/inmates/${id}/delete/`);
//        fetchInmates();
//    };
//
//    const handleUpdate = async (inmate) => {
//        const formData = new FormData();
//        formData.append('full_name', inmate.full_name);
//        formData.append('inmate_id', inmate.inmate_id);
//        formData.append('gender', inmate.gender);
//        formData.append('date_of_birth', inmate.date_of_birth);
//        formData.append('crime_committed', inmate.crime_committed);
//        formData.append('sentence_year', inmate.sentence_year);
//        if (imageFile) {
//            formData.append('image', imageFile);
//        }
//
//        await axios.put(`http://localhost:8000/api/inmates/${inmate.id}/update/`, formData, {
//            headers: {
//                'Content-Type': 'multipart/form-data',
//            },
//        });
//        setEditInmate(null);
//        setImageFile(null);
//        setShowModal(false);
//        fetchInmates();
//    };
//
//    const handleEditClick = (inmate) => {
//        setEditInmate(inmate);
//        setShowModal(true);
//    };
//
//    const handleModalClose = () => {
//        setEditInmate(null);
//        setImageFile(null);
//        setShowModal(false);
//    };
//
//    const handleImageChange = (e) => {
//        setImageFile(e.target.files[0]);
//    };
//
//    return (
//        <div className="container mt-4">
//            <h1>Inmate List</h1>
//            <table className="table table-striped">
//                <thead>
//                    <tr>
//                        <th>Full Name</th>
//                        <th>Inmate ID</th>
//                        <th>Gender</th>
//                        <th>Date of Birth</th>
//                        <th>Crime Committed</th>
//                        <th>Sentence Year</th>
//                        <th>Image</th>
//                        <th>Actions</th>
//                    </tr>
//                </thead>
//                <tbody>
//                    {inmates.map((inmate) => (
//                        <tr key={inmate.id}>
//                            <td>{inmate.full_name}</td>
//                            <td>{inmate.inmate_id}</td>
//                            <td>{inmate.gender}</td>
//                            <td>{inmate.date_of_birth}</td>
//                            <td>{inmate.crime_committed}</td>
//                            <td>{inmate.sentence_year}</td>
//                            <td>
//                                {inmate.image ? (
//                                    <img src={inmate.image} alt={inmate.full_name} style={{ maxWidth: '100px' }} />
//                                ) : (
//                                    'No image'
//                                )}
//                            </td>
//                            <td>
//                                <Button variant="warning" onClick={() => handleEditClick(inmate)}>
//                                    Edit
//                                </Button>{' '}
//                                <Button variant="danger" onClick={() => handleDelete(inmate.id)}>
//                                    Delete
//                                </Button>
//                            </td>
//                        </tr>
//                    ))}
//                </tbody>
//            </table>
//
//            {editInmate && (
//                <Modal show={showModal} onHide={handleModalClose}>
//                    <Modal.Header closeButton>
//                        <Modal.Title>Edit Inmate</Modal.Title>
//                    </Modal.Header>
//                    <Modal.Body>
//                        <Form
//                            onSubmit={(e) => {
//                                e.preventDefault();
//                                handleUpdate(editInmate);
//                            }}
//                        >
//                            <Form.Group controlId="formFullName">
//                                <Form.Label>Full Name</Form.Label>
//                                <Form.Control
//                                    type="text"
//                                    value={editInmate.full_name}
//                                    onChange={(e) => setEditInmate({ ...editInmate, full_name: e.target.value })}
//                                />
//                            </Form.Group>
//                            <Form.Group controlId="formInmateId">
//                                <Form.Label>Inmate ID</Form.Label>
//                                <Form.Control
//                                    type="text"
//                                    value={editInmate.inmate_id}
//                                    onChange={(e) => setEditInmate({ ...editInmate, inmate_id: e.target.value })}
//                                />
//                            </Form.Group>
//                            <Form.Group controlId="formGender">
//                                <Form.Label>Gender</Form.Label>
//                                <Form.Control
//                                    type="text"
//                                    value={editInmate.gender}
//                                    onChange={(e) => setEditInmate({ ...editInmate, gender: e.target.value })}
//                                />
//                            </Form.Group>
//                            <Form.Group controlId="formDateOfBirth">
//                                <Form.Label>Date of Birth</Form.Label>
//                                <Form.Control
//                                    type="date"
//                                    value={editInmate.date_of_birth}
//                                    onChange={(e) => setEditInmate({ ...editInmate, date_of_birth: e.target.value })}
//                                />
//                            </Form.Group>
//                            <Form.Group controlId="formCrimeCommitted">
//                                <Form.Label>Crime Committed</Form.Label>
//                                <Form.Control
//                                    type="text"
//                                    value={editInmate.crime_committed}
//                                    onChange={(e) => setEditInmate({ ...editInmate, crime_committed: e.target.value })}
//                                />
//                            </Form.Group>
//                            <Form.Group controlId="formSentenceYear">
//                                <Form.Label>Sentence Year</Form.Label>
//                                <Form.Control
//                                    type="number"
//                                    value={editInmate.sentence_year}
//                                    onChange={(e) => setEditInmate({ ...editInmate, sentence_year: e.target.value })}
//                                />
//                            </Form.Group>
//                            <Form.Group controlId="formImage">
//                                <Form.Label>Image</Form.Label>
//                                <Form.Control type="file" onChange={handleImageChange} />
//                            </Form.Group>
//                            <Button variant="primary" type="submit">
//                                Save Changes
//                            </Button>{' '}
//                            <Button variant="secondary" onClick={handleModalClose}>
//                                Cancel
//                            </Button>
//                        </Form>
//                    </Modal.Body>
//                </Modal>
//            )}
//        </div>
//    );
//};
//
//export default ViewInmate;

//import React, { useState, useEffect } from 'react';
//import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Modal, Button, Form } from 'react-bootstrap';
//import Footer from './Footer.js';
//import './App.css';
//
//const ViewInmate = () => {
//    const [inmates, setInmates] = useState([]);
//    const [editInmate, setEditInmate] = useState(null);
//    const [showModal, setShowModal] = useState(false);
//    const [imageFile, setImageFile] = useState(null);
//
//    useEffect(() => {
//        fetchInmates();
//    }, []);
//
//    const fetchInmates = async () => {
//        const response = await axios.get('http://localhost:8000/api/inmates/');
//        setInmates(response.data);
//    };
//
//    const handleDelete = async (id) => {
//        await axios.delete(`http://localhost:8000/api/inmates/${id}/delete/`);
//        fetchInmates();
//    };
//
//    const handleUpdate = async (inmate) => {
//        const formData = new FormData();
//        formData.append('full_name', inmate.full_name);
//        formData.append('inmate_id', inmate.inmate_id);
//        formData.append('gender', inmate.gender);
//        formData.append('date_of_birth', inmate.date_of_birth);
//        formData.append('crime_committed', inmate.crime_committed);
//        formData.append('sentence_year', inmate.sentence_year);
//        if (imageFile) {
//            formData.append('image', imageFile);
//        }
//
//        await axios.put(`http://localhost:8000/api/inmates/${inmate.id}/update/`, formData, {
//            headers: {
//                'Content-Type': 'multipart/form-data',
//            },
//        });
//        setEditInmate(null);
//        setImageFile(null);
//        setShowModal(false);
//        fetchInmates();
//    };
//
//    const handleEditClick = (inmate) => {
//        setEditInmate(inmate);
//        setShowModal(true);
//    };
//
//    const handleModalClose = () => {
//        setEditInmate(null);
//        setImageFile(null);
//        setShowModal(false);
//    };
//
//    const handleImageChange = (e) => {
//        setImageFile(e.target.files[0]);
//    };
//
//    return (
//        <div className="d-flex flex-column" >
//            <div className="container mt-4" style={{ height: '82vh'}}>
//                <h1>Inmate List</h1>
//                <table className="table table-striped">
//                    <thead>
//                        <tr>
//                            <th>Full Name</th>
//                            <th>Inmate ID</th>
//                            <th>Gender</th>
//                            <th>Date of Birth</th>
//                            <th>Crime Committed</th>
//                            <th>Sentence Year</th>
//                            <th>Image</th>
//                            <th>Actions</th>
//                        </tr>
//                    </thead>
//                    <tbody>
//                        {inmates.map((inmate) => (
//                            <tr key={inmate.id}>
//                                <td>{inmate.full_name}</td>
//                                <td>{inmate.inmate_id}</td>
//                                <td>{inmate.gender}</td>
//                                <td>{inmate.date_of_birth}</td>
//                                <td>{inmate.crime_committed}</td>
//                                <td>{inmate.sentence_year}</td>
//                                <td>
//                                    {inmate.image ? (
//                                        <img src={inmate.image} alt={inmate.full_name} style={{ maxWidth: '100px' }} />
//                                    ) : (
//                                        'No image'
//                                    )}
//                                </td>
//                                <td>
//                                    <Button variant="warning" onClick={() => handleEditClick(inmate)}>
//                                        Update
//                                    </Button>{' '}
//                                    <Button variant="danger" onClick={() => handleDelete(inmate.id)}>
//                                        Delete
//                                    </Button>
//                                </td>
//                            </tr>
//                        ))}
//                    </tbody>
//                </table>
//
//                {editInmate && (
//                    <Modal show={showModal} onHide={handleModalClose}>
//                        <Modal.Header closeButton>
//                            <Modal.Title>Update Inmate</Modal.Title>
//                        </Modal.Header>
//                        <Modal.Body>
//                            <Form
//                                onSubmit={(e) => {
//                                    e.preventDefault();
//                                    handleUpdate(editInmate);
//                                }}
//                            >
//                                <Form.Group controlId="formFullName">
//                                    <Form.Label>Full Name</Form.Label>
//                                    <Form.Control
//                                        type="text"
//                                        value={editInmate.full_name}
//                                        onChange={(e) => setEditInmate({ ...editInmate, full_name: e.target.value })}
//                                    />
//                                </Form.Group>
//                                <Form.Group controlId="formInmateId">
//                                    <Form.Label>Inmate ID</Form.Label>
//                                    <Form.Control
//                                        type="text"
//                                        value={editInmate.inmate_id}
//                                        onChange={(e) => setEditInmate({ ...editInmate, inmate_id: e.target.value })}
//                                    />
//                                </Form.Group>
//                                <Form.Group controlId="formGender">
//                                    <Form.Label>Gender</Form.Label>
//                                    <Form.Control
//                                        type="text"
//                                        value={editInmate.gender}
//                                        onChange={(e) => setEditInmate({ ...editInmate, gender: e.target.value })}
//                                    />
//                                </Form.Group>
//                                <Form.Group controlId="formDateOfBirth">
//                                    <Form.Label>Date of Birth</Form.Label>
//                                    <Form.Control
//                                        type="date"
//                                        value={editInmate.date_of_birth}
//                                        onChange={(e) => setEditInmate({ ...editInmate, date_of_birth: e.target.value })}
//                                    />
//                                </Form.Group>
//                                <Form.Group controlId="formCrimeCommitted">
//                                    <Form.Label>Crime Committed</Form.Label>
//                                    <Form.Control
//                                        type="text"
//                                        value={editInmate.crime_committed}
//                                        onChange={(e) => setEditInmate({ ...editInmate, crime_committed: e.target.value })}
//                                    />
//                                </Form.Group>
//                                <Form.Group controlId="formSentenceYear">
//                                    <Form.Label>Sentence Year</Form.Label>
//                                    <Form.Control
//                                        type="number"
//                                        value={editInmate.sentence_year}
//                                        onChange={(e) => setEditInmate({ ...editInmate, sentence_year: e.target.value })}
//                                    />
//                                </Form.Group>
//                                <Form.Group controlId="formImage">
//                                    <Form.Label>Image</Form.Label>
//                                    <Form.Control type="file" onChange={handleImageChange} />
//                                </Form.Group>
//                                <Button variant="primary" type="submit">
//                                    Save Changes
//                                </Button>{' '}
//                                <Button variant="secondary" onClick={handleModalClose}>
//                                    Cancel
//                                </Button>
//                            </Form>
//                        </Modal.Body>
//                    </Modal>
//                )}
//            </div>
//            <Footer />
//        </div>
//    );
//};
//
//export default ViewInmate;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form, Table, Container } from 'react-bootstrap';
import Footer from './Footer.js';
import './App.css';

const ViewInmate = () => {
    const [inmates, setInmates] = useState([]);
    const [editInmate, setEditInmate] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        fetchInmates();
    }, []);

    const fetchInmates = async () => {
        const response = await axios.get('http://localhost:8000/api/inmates/');
        setInmates(response.data);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8000/api/inmates/${id}/delete/`);
        fetchInmates();
    };

    const handleUpdate = async (inmate) => {
        const formData = new FormData();
        formData.append('full_name', inmate.full_name);
        formData.append('inmate_id', inmate.inmate_id);
        formData.append('gender', inmate.gender);
        formData.append('date_of_birth', inmate.date_of_birth);
        formData.append('crime_committed', inmate.crime_committed);
        formData.append('sentence_year', inmate.sentence_year);
        if (imageFile) {
            formData.append('image', imageFile);
        }

        await axios.put(`http://localhost:8000/api/inmates/${inmate.id}/update/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        setEditInmate(null);
        setImageFile(null);
        setShowModal(false);
        fetchInmates();
    };

    const handleEditClick = (inmate) => {
        setEditInmate(inmate);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setEditInmate(null);
        setImageFile(null);
        setShowModal(false);
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    return (
        <div className="d-flex flex-column">
            <Container className="mt-4" style={{ height: '82vh' }}>
                <h1 className="mb-4">Inmate List</h1>
                <Table striped bordered hover responsive>
                    <thead className=".thead-info">
                        <tr>
                            <th>Full Name</th>
                            <th>Inmate ID</th>
                            <th>Gender</th>
                            <th>Date of Birth</th>
                            <th>Crime Committed</th>
                            <th>Sentence Year</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inmates.map((inmate) => (
                            <tr key={inmate.id}>
                                <td>{inmate.full_name}</td>
                                <td>{inmate.inmate_id}</td>
                                <td>{inmate.gender}</td>
                                <td>{inmate.date_of_birth}</td>
                                <td>{inmate.crime_committed}</td>
                                <td>{inmate.sentence_year}</td>
                                <td>
                                    {inmate.image ? (
                                        <img src={inmate.image} alt={inmate.full_name} style={{ maxWidth: '100px' }} />
                                    ) : (
                                        'No image'
                                    )}
                                </td>
                                <td>
                                    <Button variant="warning" className="me-2" onClick={() => handleEditClick(inmate)}>
                                        Update
                                    </Button>
                                    <Button variant="danger" onClick={() => handleDelete(inmate.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {editInmate && (
                    <Modal show={showModal} onHide={handleModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Update Inmate</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleUpdate(editInmate);
                                }}
                            >
                                <Form.Group controlId="formFullName">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={editInmate.full_name}
                                        onChange={(e) => setEditInmate({ ...editInmate, full_name: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formInmateId">
                                    <Form.Label>Inmate ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={editInmate.inmate_id}
                                        onChange={(e) => setEditInmate({ ...editInmate, inmate_id: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formGender">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={editInmate.gender}
                                        onChange={(e) => setEditInmate({ ...editInmate, gender: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formDateOfBirth">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={editInmate.date_of_birth}
                                        onChange={(e) => setEditInmate({ ...editInmate, date_of_birth: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formCrimeCommitted">
                                    <Form.Label>Crime Committed</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={editInmate.crime_committed}
                                        onChange={(e) => setEditInmate({ ...editInmate, crime_committed: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formSentenceYear">
                                    <Form.Label>Sentence Year</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={editInmate.sentence_year}
                                        onChange={(e) => setEditInmate({ ...editInmate, sentence_year: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formImage">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="file" onChange={handleImageChange} />
                                </Form.Group>
                                <div className="d-flex justify-content-end mt-3">
                                    <Button variant="secondary" className="me-2" onClick={handleModalClose}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" type="submit">
                                        Save Changes
                                    </Button>
                                </div>
                            </Form>
                        </Modal.Body>
                    </Modal>
                )}
            </Container>
            <Footer />
        </div>
    );
};

export default ViewInmate;

