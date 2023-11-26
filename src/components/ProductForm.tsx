import React from 'react'
import { Button, Form } from 'react-bootstrap'

type ProductFormProps = {
    showForm: () => void;
  };
const ProductForm : React.FC<ProductFormProps> = ({showForm}) => {
    return (
        <div className="container">
            <h1>ProductForm</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Product Name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Product Price"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Product Description"/>
                </Form.Group>
                <Button onClick={showForm}>Close Form</Button>
            </Form>
        </div>
      )
}

export default ProductForm