import { useEffect, useState } from "react";

const Card = ({name, flag}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid gray",
                borderRadius: "10px",
                margin: "10px",
                height: "200px",
                width: "200px",
                textAlign: "center"
            }}
        >
            <img 
                src={flag}
                alt={`Flag of ${name}`}
                width={"85px"}
                height={"85px"}
             />
            <h2>{name}</h2>
        </div>
    )
} 

const API = "https://xcountries-backend.azurewebsites.net/all";
export default function Countries () {
    const [countriesData , setCountriesData] = useState([]);

    useEffect(() => {
        fetch(API)
        .then((res) => res.json())
        .then((data) => setCountriesData(data))
        .catch((error) => console.log("Error fetching data: " + error))
    }, [])


    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>World of Country Flags</h1>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "center"
                }}
            >
                {countriesData.map(({name, flag, abbr},e) => (
                    <Card key={e} name={name} flag={flag} abbr={abbr}/>
                ))}
            </div>
        </div>
    )
}