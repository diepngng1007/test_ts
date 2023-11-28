import axios from "axios";
import { useState, useEffect} from "react";
import { Button, Table } from "react-bootstrap";
import {Link} from "react-router-dom"
 
type Product = {
    id: string;
    name: string;
    price: number;
    desc: string;
}

const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([])

    const [activeUpdate, setActiveUpdate] = useState('')
    const [name, setName] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [description, setDescription] = useState<string>('')
    const getProdcuts = ()=>{
        axios.get<Product[]>("http://localhost:3001/products")
        .then((response) => {
            setProducts(response.data)
        })
        .catch((error) => console.log(error))
    }
    useEffect(() => {
        getProdcuts()
    },[])
    return (
        <div className="container mt-2">
            <h1 className="text-center">Products List</h1>
            <Link className="btn btn-primary mb-2" to="/add-product">Add New</Link>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((items) => (
                        <tr key={items.id}>
                            <td>{items.id}</td>
                            {items.id == activeUpdate ? 
                                <>
                                <td><input type="text" value={name} onChange={(e) => setName(e.target.value)}/></td>
                                <td><input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))}/></td>
                                <td><input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/></td>
                                </>
                            : 
                                <>
                                <td>{items.name}</td>
                                <td>{items.price}</td>
                                <td>{items.desc ? items.desc : "Mô tả đang cập nhật"}</td>
                                </>
                            }
                            <td className="d-flex gap-2">
                                {items.id == activeUpdate ? 
                                 <Button className="btn btn-success" onClick={async () => {
                                    const data = await axios.put("http://localhost:3001/products/" + items.id, {
                                        name, price, desc: description
                                    })
                                    if(data.status ==200){
                                        getProdcuts()
                                        setActiveUpdate('-2')
                                    }
                                 
                                }}>Success</Button>
                            :
                            <Button className="btn btn-warning" onClick={() => {
                                setActiveUpdate(items.id)
                                setName(items.name)
                                setPrice(items.price)
                                setDescription(items.desc)
                            }}>Update</Button>
                            }        
                           <Button className="btn btn-danger" onClick={async function(){
                                    const response = await axios.delete("http://localhost:3001/products/" + items.id)
                                    if(response.status == 200){
                                        getProdcuts()
                                    }
                                }}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default ProductList;