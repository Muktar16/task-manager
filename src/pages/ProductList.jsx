import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

export const ProductList = () => {
  // let products = [];
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(2);
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  // 1. get data from backend
  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://dummyjson.com/products", {
        params: {
          limit: limit,
          skip: limit * (pageNo - 1),
        },
      });
      // products = convertedData.products;
      setProducts(response?.data?.products);
      setTotal(response?.data?.total);
      // if(response.data && response.data.products) {
      //     setProducts(response.data.products);
      // }
    } catch (err) {
      alert("Something is wrong!!!!!");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  // this funciton should be called only once
  // getProducts();

  useEffect(() => {
    getProducts();
  }, [limit, pageNo]);

  console.log(products);

  return (
    <div style={{ margin: "20px" }}>
      <button
        onClick={() => {
          if (pageNo !== 1) setPageNo(pageNo - 1);
        }}
      >
        prev
      </button>
      <select
        value={limit}
        onChange={(event) => {
          const value = event.target.value;
          setLimit(value);
        }}
        style={{ marginBottom: "10px" }}
      >
        <option value={2}>2</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
      <button
        onClick={() => {
          setPageNo(pageNo + 1);
        }}
      >
        Next
      </button>

      <div style={{display: 'flex', flexDirection: 'row', gap: '5px'}}>
        <p>Page No: {pageNo}, Total Products: {total}, </p>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))
      )}
    </div>
  );
};
