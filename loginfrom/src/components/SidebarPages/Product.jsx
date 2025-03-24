import React from 'react'
import Sidebar from '../../layout/Sidebar'
import Navbar1 from '../../layout/Navbar'
import { Card, Button, Badge, Row, Col } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import axios from 'axios';


// const products = [
//     {
//         title: "Nike Air Force 1 NDEST",
//         price: "$35.17",
//         image: "https://free.minimals.cc/assets/images/product/product-1.webp",
//         label: "SALE",
//         colors: ["#000000", "#00FF00"]
//     },
//     {
//         title: "Nike Space Hippie 04",
//         price: "$57.22",
//         image: "https://free.minimals.cc/assets/images/product/product-2.webp",
//         colors: ["#000000"]
//     },
//     {
//         title: "Nike Air Zoom Pegasus 37",
//         price: "$64.78",
//         image: "https://free.minimals.cc/assets/images/product/product-13.webp",
//         label: "SALE",
//         oldPrice: "$64.78",
//         colors: ["#FFC0CB"]
//     },
//     {
//         title: "Nike Blazer Low 77 ",
//         price: "$50.79",
//         image: "https://free.minimals.cc/assets/images/product/product-3.webp",
//         label: "NEW",
//         colors: ["#FF0000", "#0000FF"]
//     },
//     {
//         title: "Nike Blazer Low 77 ",
//         price: "$50.79",
//         image: "https://free.minimals.cc/assets/images/product/product-8.webp",
//         label: "Sale",
//         colors: ["#000000", "#00FF00"]


//     },
//     {
//         title: "Nike Blazer Low 77 ",
//         price: "$50.79",
//         image: "https://free.minimals.cc/assets/images/product/product-6.webp",
//         label: "NEW",
//         colors: ["#FF0000", "#0000FF"]
//     },
//     {
//         title: "Nike Blazer Low 77 ",
//         price: "$50.79",
//         image: "https://free.minimals.cc/assets/images/product/product-4.webp",
//         colors: ["#000000", "#00FF00"]

//     },
//     {
//         title: "Nike Blazer Low 77 ",
//         price: "$50.79",
//         image: "https://free.minimals.cc/assets/images/product/product-10.webp",
//         label: "NEW",
//         colors: ["#FF0000", "#0000FF"]
//     },
// ];


function Products() {

     const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then((response) => {
                setProducts(response.data.products); 
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    

  return (
    
 <div className='d-flex mt-5'>
            <div className='col-2'>
                <Sidebar />
            </div>
            <div className='col-10'>
                <Navbar1 />
                <div className='d-flex justify-content-between align-items-center mt-4 mx-4 text-bold'>
                <h3>Products...</h3>
                </div>
                <div className="container mt-4">
            <Row xs={1} md={2} lg={4} className="g-4">
                {products.map((products, idx) => (
                    <Col key={idx}>
                        <Card className=" shadow-sm border-0 " style={{width:"270px", height:"380px"}}>
                            <div style={{ position: "relative" }}>
                                <Card.Img variant="top" src={products.thumbnail} className="rounded-top" />
                                {/* {products.label && (
                                    <Badge
                                       bg={products.label === "SALE" ? "danger" : "info"} 
                                        style={{ position: "absolute", top: "10px", right: "10px" }}
                                    >
                                        {products.label}
                                    </Badge> */}
                                {/* )} */}
                            </div>
                            <Card.Body>
                                <Card.Title>{products.title}</Card.Title>
                                
                            
                                <Card.Text>
                                    {products.oldPrice && <del className="me-2 text-muted">{products.oldPrice}</del>}
                                    <strong>{products.price}</strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
                </div>
       
    </div>
  )
}

export default Products;