import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";

export const CustomSelect = styled(Select)`
  width: 100%;
  color: white;
  border: 1px solid white;
  outline: 0;
  margin-bottom: 25px;

  & svg {
    color: white;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

export const CustomTextField = styled(TextField)`
  width: 100%;
  outline: 0;

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid white !important;
  }

  label {
    color: white !important;
  }

  input {
    color: white;
  }

  .MuiOutlinedInput-notchedOutline:hover {
    border: none;
  }

  & .MuiOutlinedInput-root:hover {
    & > fieldset {
      border-color: white;
    }
  }
`;