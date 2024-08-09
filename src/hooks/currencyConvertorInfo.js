//API Fetching and Controlling Hook

import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setdata] = useState("");
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setdata(res));
    console.log(data);
  }, [currency]);
  return data;
};

export default useCurrencyInfo;
