import axios from "axios";
import React, { useState, useEffect} from "react";
import { Button, Table } from "react-bootstrap";

type Product = {
    id: number;
    name: string;
    price: number;
    desc: string;
}
type ProductListProps = {
    showForm: () => void;
  };
  

const ProductList : React.FC<ProductListProps>  = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [isOpenForm, setIsOpenForm] = useState<boolean>(false)

    useEffect(() => {
        axios.get<Product[]>("http://localhost:3001/products")
        .then((response) => {
            setProducts(response.data)
        })
        .catch((error) => console.log(error))
    },[])

    // const showForm = () => {
    //     setIsOpenForm(!isOpenForm)
    //     console.log(isOpenForm)
    // }
    return (
        <div className="container mt-2">
           <div className="row">
                <div className="col-12">
                    <h2>Product Form</h2>
                    <Button className="btn btn-primary mb-2">
                        {isOpenForm ? "Close" : "Open"}
                    </Button>
                </div>
                <div className="col-12">
                <h1 className="text-center">Products List</h1>
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
                                <td>{items.name}</td>
                                <td>{items.price}</td>
                                <td>{items.desc ? items.desc : "Mô tả đang cập nhật"}</td>
                                <td>
                                    <Button className="btn btn-warning">Update</Button>
                                    <Button className="btn btn-danger">Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                </div>
            </div>
        </div>
    )
}

export default ProductList;