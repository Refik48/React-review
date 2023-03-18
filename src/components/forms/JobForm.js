import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "./JobForm.css";

function JobForm() {
 const [formData, setFormData] = useState({
  title: "",
  type: "",
  description: "",
  responsibilities: "",
  numberOfGitCommits: "",
  codewarKataLevel: "",
  codewarPoints: "",
  category: "",
  salaryRange: "",
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  companyName: "",
  companyWebSite: "",
  companyLogo: "",
  requirements: "",
  applicationsDeadline: "",
  numberOfStudentsCanApply: "",
 });

 const handleForm = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
 };

 useEffect(() => {
  fetch("/api")
   .then((res) => {
    if (!res.ok) {
     throw new Error(res.statusText);
    }
    return res.json();
   })
   .then((body) => {
    console.log({ body });
   })
   .catch((err) => {
    console.error(err);
   });
 }, []);

 return (
  <Container className="mt-5">
   <Row className="justify-content-center">
    <Col md={5}>
     <Form noValidate onSubmit={handleSubmit}>
      <div>
       <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
         name="title"
         type="text"
         placeholder="Enter title"
         value={formData.title}
         onChange={handleForm}
        />
       </Form.Group>
       <Form.Group className="mb-3" controlId="type">
        <Form.Label>Type</Form.Label>
        <Form.Control
         name="type"
         type="text"
         placeholder="Enter type"
         value={formData.type}
         onChange={handleForm}
        />
       </Form.Group>

       <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
         name="description"
         type="text"
         placeholder="Enter description"
         value={formData.description}
         onChange={handleForm}
        />
       </Form.Group>

       <Form.Group className="mb-3" controlId="responsibilities">
        <Form.Label>responsibilities</Form.Label>
        <Form.Control
         name="responsibilities"
         type="text"
         placeholder="Enter responsibilities"
         value={formData.responsibilities}
         onChange={handleForm}
        />
       </Form.Group>

       <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select disabled>
         <option>Disabled select</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
        </Form.Select>
       </Form.Group>

       <Form.Group className="mb-3">
        <Form.Label>SalaryRange</Form.Label>
        <Form.Select disabled>
         <option>Disabled select</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
        </Form.Select>
       </Form.Group>
      </div>

      <div>
       <Form.Group className="mb-3">
        <Form.Label>numberOfGitCommits</Form.Label>
        <Form.Control
         name="numberOfGitCommits"
         type="number"
         placeholder="Enter responsibilities"
         value={formData.numberOfGitCommits}
        />
       </Form.Group>

       <Form.Group className="mb-3">
        <Form.Label>numberOfGitCommits</Form.Label>
        <Form.Control
         name="numberOfGitCommits"
         type="number"
         placeholder="Enter responsibilities"
         value={formData.numberOfGitCommits}
        />
       </Form.Group>
      </div>

      <Button variant="primary" type="submit">
       PREVIEWS
      </Button>
      <Button variant="primary" type="submit">
       PUBLISH
      </Button>
     </Form>
    </Col>
   </Row>
  </Container>
 );
}

export default JobForm;
