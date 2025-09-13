import { useEffect, useState } from "react";

const Card = ({ name, flag}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid gray",
        borderRadius: "10px",
        height: "200px",
        width: "200px",
        gap: "4px",
        margin: "10px",
      }}
    >
      <img src={flag} alt={`Flag of ${name}`} height={"85px"} width={"85px"} />
      <h4>{name}</h4>
    </div>
  );
};

const API = "https://xcountries-backend.azurewebsites.net/all";
export default function Countries() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setCountryData(data))
      .catch((err) => {
        console.error("Error fetching data: ",err)
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Countries of the World</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center"
        }}
      >
        {countryData.map(({ name, flag},e) => (
          <Card key={e} name={name} flag={flag} />
        ))}
      </div>
    </div>
  );
}
