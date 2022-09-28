// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { useState } from "react";
import { Box, TextField, FormControl, Button } from "@mui/material";

const ContactForm = ({ fnAddContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state input berupa objek sesuai dengan data yang ada

  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  const formInputOnChangeHandler = (e) => {
    setInput((state) => ({ ...state, [e.target.id]: e.target.value }));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    fnAddContact(input);
    setInput({
      name: "",
      phone: "",
      email: "",
      photo: "",
    });
  };
  return (
    <>
      <Box
        sx={{
          width: 500,
          height: "auto",
          backgroundColor: "#FAEBD7",
          flexGrow: 1,
          marginLeft: 10,
          marginTop: 4,
        }}
      >
        <form onSubmit={formSubmitHandler}>
          <TextField
            variant="filled"
            fullWidth
            sx={{ marginBottom: "1rem" }}
            id="name"
            label="Name *"
            value={input.name}
            onChange={formInputOnChangeHandler}
          />
          <TextField
            variant="filled"
            fullWidth
            sx={{ marginBottom: "1rem" }}
            id="phone"
            label="Phone *"
            value={input.phone}
            onChange={formInputOnChangeHandler}
          />
          <TextField
            variant="filled"
            fullWidth
            sx={{ marginBottom: "1rem" }}
            id="email"
            label="Email *"
            value={input.email}
            onChange={formInputOnChangeHandler}
          />
          <TextField
            variant="filled"
            fullWidth
            sx={{ marginBottom: "1rem" }}
            id="photo"
            label="Photo URL *"
            value={input.photo}
            onChange={formInputOnChangeHandler}
          />
          <Button color="primary" type="submit">
            Add
          </Button>
        </form>
      </Box>
    </>
  );
};

export default ContactForm;
