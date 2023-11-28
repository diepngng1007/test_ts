import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const [name, setName] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [description, setDescription] = useState<string>('')
    const navigate = useNavigate()
    console.log(name)
    const submitForm = async () => {
        const api = await axios.post("http://localhost:3001/products", {
            name, price, desc: description
        })
        console.log(api.data)
        navigate('/')
    }
    return (
        <div className='container'>
            <h2>Add Product</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Ten sp</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Gia sp</Form.Label>
                    <Form.Control type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Mo ta sp</Form.Label>
                    <Form.Control type="textarea" value={description} onChange={(e) => setDescription(e.target.value)}></Form.Control>
                </Form.Group>
            </Form>
            <Button onClick={submitForm}>Submit</Button>
        </div>
    )
}

export default AddProduct