// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt={data.name}
            src={data.photo}
            sx={{ width: 64, height: 64 }}
          ></Avatar>
        </ListItemAvatar>
        <ListItemText sx={{ ml: 2 }}>
          <Typography style={{ fontWeight: 600 }}>{data.name}</Typography>
          <Typography>{data.phone}</Typography>
          <Typography>{data.email}</Typography>
        </ListItemText>
      </ListItem>
      <Divider variant="middle" />
    </>
  );
};

export default Contact;
