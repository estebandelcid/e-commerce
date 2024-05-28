import { useEffect, useState } from "react";

export const useFetchData = (url) => {
    const [data, setData] = useState([]);
    useEffect(() =>{
        const fetchData = async () => {
            try{
                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error(`Error: ${response.statusText}`)
                }
                const dataRes = await response.json();
                setData(dataRes);
            } catch (error) {
                console.error('There was an error: ', error);
            }
        }
        fetchData();
    }, [url])
    return { data };
};
