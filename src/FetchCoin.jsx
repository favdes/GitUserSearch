import React, {useEffect} from "react";
import axios from "axios";

const FetchCoin = () => {
  const handleFetchCoin = async () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": "11286476camsh21a72f9ea6e55bep1d8d3djsnab0b968b2894",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=>{
    handleFetchCoin()
  }, [])

  return (
    <div>
      <h1> This Is My Coin App</h1>
    </div>
  );
};

export default FetchCoin;