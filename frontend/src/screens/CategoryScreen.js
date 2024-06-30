import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getError } from '../utils';
import { toast } from 'react-toastify';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';

function CategoryScreen() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`/api/products?category=${category}`);
        setProducts(data);
        setLoading(false);
      } catch (err) {
        toast.error(getError(err));
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <div>
      <h1>{category}</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={6} md={4} lg={3} className="mb-3">
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default CategoryScreen;
