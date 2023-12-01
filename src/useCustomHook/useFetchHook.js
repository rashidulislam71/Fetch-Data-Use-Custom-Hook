/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"


export const useFetchData = (url) => {
    const [fetchData, setFetchData] = useState([])
    const [err, setErr] = useState([])

    useEffect(()=>{
        const fetchDataAsync = async (url) =>{
            try{
                const req = await fetch(url)
                const res = await req.json()
                setFetchData(res)
            }
            catch(err){
                setErr(err);
            }
        }
        fetchDataAsync(url)
        
    },[url])

    return{
        fetchData,
        err
    }
}