import { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";
import "./Countries.css";

const Countries = () => {
    const [apiData,setApiData] = useState([]);

    const fetchUrl = async() => {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        return response;
    }

    useEffect(()=>{
        fetchUrl()
        .then(res => {
            setApiData(res.data);
        })
        .catch(err => console.log(err));
        
    },[]);

    return ( 
        <div id="countries">
            {apiData?.map((card)=> (
                <CountryCard cardData={card} key={card.name.common} />
            ))}      
        </div>
     );
}
 
export default Countries;