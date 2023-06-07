import { useQuery } from "@tanstack/react-query"
import { get } from "../api/api";
import { GET_PRODUCTS } from "../api/endpoint";

export default function Home(){
    
    const { isLoading, isError, error, data: products  } = useQuery( {queryKey: ['developerData'],  queryFn:() => get(`${GET_PRODUCTS}`)});
      console.log('data', products);

    return(
        <div>

        </div>
    )
}