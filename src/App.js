import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import { Grid } from "@mui/material";
// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
const App = () => {
  const [contacts, setContacts] = useState(contactsJSON);
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const addContact = (data) => {
    const contact = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      photo: data.photo,
    };

    setContacts([...contacts, contact]);
  };
  return (
    <div className="App">
      <Header />
      <Grid container>
        <Grid item xs={6}>
          <ContactForm fnAddContact={addContact}></ContactForm>
        </Grid>
        <Grid item xs={6}>
          {contacts.map((data, i) => (
            <Contact key={i} data={data} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
