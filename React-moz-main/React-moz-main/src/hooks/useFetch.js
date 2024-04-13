import { useState, useEffect } from "react";
const useFetch = (url)=>{
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null)
    const [data, setData] = useState(null);
}