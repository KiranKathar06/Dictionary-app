import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import "../../App.css";
const Word = () => {
  return (
    <div>
      <Card
        sx={{
          textAlign: "center",
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",

          justifyContent: "center",
          margin: "auto",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <Typography
            className="card"
            sx={{
              fontSize: 25,
              mb: 1.5,
              mt: 0,
              fontWeight: "25px",
              backgroundColor: "",
              transitionDuration: "0.3s",
            }}
            color="text.secondary"
            gutterBottom
          >
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div" sx={{ fontWeight: 800 }}>
            Unionism
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            meaning
          </Typography>
          <Typography variant="body2">
            <ul>
              <li> The principle of union,</li>
              <li>
                The principle of union, especially trade unionism. attachment to
                a union.
              </li>
              <li>
                (initial capital letter) loyalty to the federal union of the
                United States of America, especially at the time of the Civil
                War.
              </li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Word;
