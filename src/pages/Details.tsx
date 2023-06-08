import { useQuery } from "@tanstack/react-query";
import { Card, Carousel } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCTS } from "../api/endpoint";
import { get } from "../api/api";

interface DataType {
  id: React.Key;
  images: string[];
  title: string;
  description: string;
  price: string;
}

export default function Details() {
  const { id } = useParams();
  console.log("id", id);
  const [productsDetails, setProductsDetails] = useState<DataType[]>([]);
  const {
    isLoading,
    isError,
    error,
    data: productsDetailsData,
  } = useQuery({
    queryKey: ["ProductsDetails"],
    queryFn: () => get(`${GET_PRODUCTS}/${id}`),
    onSuccess: (data) => {
      setProductsDetails(data); // Update the products state with the received data
    },
  });
  console.log(productsDetailsData);
  console.log(productsDetails);
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "460px",
    color: "black",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const {brand,category, images, title, description, price ,rating,stock} = productsDetails;
  return (
    <div className="flex flex-col sm:flex-row mt-3 items-center justify-center space-x-4 ">
      <div className="w-[400px]">
        {images && images.length > 0 ? (
          <Carousel afterChange={onChange}>
            {images.map((image, index) => (
              <div key={index}>
                <img style={contentStyle} src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        ) : (
          <div>No images available</div>
        )}
      </div>

      <div className="">
        {" "}
        <Card
          title={brand}
          bordered={false}
          style={{ width: 400, height: "460px" }}
        > 
          <p>Product Name:{title}</p>
          <p>Details:{description}</p>
          <p>Price:{price} $</p>
          <p>Ratings:{rating}/5</p>
          <p>Stock :{stock}</p>
        </Card>
      </div>
    </div>
  );
}
