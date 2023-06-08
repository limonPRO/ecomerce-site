import { useQuery } from "@tanstack/react-query";
import { get } from "../api/api";
import { GET_PRODUCTS } from "../api/endpoint";
import { Card } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

interface DataType {
  id: React.Key;
  images: string[];
  title: string;
  description: string;
  price: string;
}
export default function Home() {
  const { Meta } = Card;
  const [products, setProducts] = useState<DataType[]>([]);
  const {
    isLoading,
    isError,
    error,
    data: productsData,
  } = useQuery({
    queryKey: ["developerData"],
    queryFn: () => get(`${GET_PRODUCTS}`),
    onSuccess: (data) => {
      setProducts(data.products); // Update the products state with the received data
    },
  });
  console.log("data", productsData);
  console.log("stateData", products);

  return (
    <div className="flex justify-center">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {products.map((product) => (
          <Link to={`/details/${product.id}`} key={product.id}>
            <Card
              key={product.id}
              hoverable
              style={{ width: 200, height: 350, marginTop: 30 }}
              cover={
                <img
                  alt="example"
                  src={product.images[0]}
                  style={{ height: "200px", objectFit: "cover" }}
                  // Assuming the product object has an "image" property that contains the image URL
                />
              }
            >
              <Meta
                title={product.title}
                description={
                  <div style={{ maxHeight: "3.4em", overflow: "hidden" }}>
                    {product.description}
                  </div>
                }
              />
              <div className="mt-[4px]">
                <p>{product.price.toLocaleString()}$</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
