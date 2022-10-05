import axios from "axios";
import Alert from "@mui/material/Alert";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import Converter from "./components/Converter";

function App() {
  const [error, setError] = useState(false);
  const [headerCurrencies, setHeaderCurrencies] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((res) => {
        const USD = res.data.find((el) => el.cc === "USD");
        const EUR = res.data.find((el) => el.cc === "EUR");

        setHeaderCurrencies([USD, EUR]);
        setCurrencies([
          ...res.data,
          {
            cc: "UAH",
            rate: 1,
            txt: "Гривня",
          },
        ]);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box maxWidth="100%" sx={{ bgcolor: "#c0c0c0", height: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </Box>
    );
  }

  return (
    <Box maxWidth="100%" sx={{ bgcolor: "#c0c0c0", height: "100vh" }}>
      {error ? (
        <Alert severity="error">Error! Something went wrong :(</Alert>
      ) : (
        <>
          <Header currencies={headerCurrencies} />
          <Converter currencies={currencies} />
        </>
      )}
    </Box>
  );
}

export default App;
