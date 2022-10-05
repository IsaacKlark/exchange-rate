import { Box } from "@mui/system";
import { useState } from "react";
import Card from "@mui/material/Card";
import { CustomSelect, CustomTextField } from "./styles";
import MenuItem from "@mui/material/MenuItem";

const Converter = ({ currencies }) => {
  const [currency1, setCurrency1] = useState(
    currencies.find((el) => el.cc === "UAH")
  );
  const [currency1Value, setCurrency1Value] = useState(
    currencies.find((el) => el.cc === "USD").rate
  );
  const [currency2, setCurrency2] = useState(
    currencies.find((el) => el.cc === "USD")
  );
  const [currency2Value, setCurrency2Value] = useState(1);

  const changeCurrency1 = (value) => {
    const newCurrency = currencies.find((el) => el.txt === value);
    setCurrency1(newCurrency);

    const UAHRate = currency1Value * newCurrency.rate;
    setCurrency2Value((UAHRate / currency2.rate).toFixed(4));
  };

  const changeCurrency2 = (value) => {
    const newCurrency = currencies.find((el) => el.txt === value);
    setCurrency2(newCurrency);

    const UAHRate = currency2Value * newCurrency.rate;
    setCurrency1Value((UAHRate / currency1.rate).toFixed(4));
  };

  const changeCurrencyValue1 = (value) => {
    if (!isNaN(value)) {
      setCurrency1Value(value);
      const UAHRate = value * currency1.rate;
      setCurrency2Value((UAHRate / currency2.rate).toFixed(4));
    }
  };

  const changeCurrencyValue2 = (value) => {
    if (!isNaN(value)) {
      setCurrency2Value(value);
      const UAHRate = value * currency2.rate;
      setCurrency1Value((UAHRate / currency1.rate).toFixed(4));
    }
  };

  if (!Object.keys(currency1).length) return null;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        mt: "100px",
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: "100%",
          padding: "20px",
          background: "#706785",
        }}
      >
        <CustomSelect
          id="currency1"
          value={currency1.txt}
          label="Currency"
          onChange={(e, el) => changeCurrency1(el.props.value)}
        >
          {currencies.map((el) => (
            <MenuItem
              key={el.txt}
              value={el.txt}
            >{`${el.txt}, ${el.cc}`}</MenuItem>
          ))}
        </CustomSelect>
        <CustomTextField
          id="outlined-basic"
          label={currency1.cc}
          variant="outlined"
          value={currency1Value}
          onChange={(e) => changeCurrencyValue1(e.target.value)}
          autoComplete="off"
        />
      </Card>
      <Card
        sx={{
          maxWidth: 500,
          width: "100%",
          padding: "20px",
          background: "#706785",
        }}
      >
        <CustomSelect
          id="currency2"
          value={currency2.txt}
          label="Currency"
          onChange={(e, el) => changeCurrency2(el.props.value)}
        >
          {currencies.map((el) => (
            <MenuItem
              key={el.txt}
              value={el.txt}
            >{`${el.txt}, ${el.cc}`}</MenuItem>
          ))}
        </CustomSelect>
        <CustomTextField
          id="outlined-basic"
          label={currency2.cc}
          variant="outlined"
          value={currency2Value}
          onChange={(e) => changeCurrencyValue2(e.target.value)}
          autoComplete="off"
        />
      </Card>
    </Box>
  );
};

export default Converter;
