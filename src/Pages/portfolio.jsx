import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import PortfolioInfoComponent from "../Components/PortfolioInfoComponent/index";
import { useStyle } from ".././Styles/PortfolioStyle";

export const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("portfolioData.json");
      const data = await res.json();
      setPortfolioData(data.data);
    };

    fetchData();
  }, []);
  const classes = useStyle();
  return (
    <div>
      <div>
        <Grid container className={classes.root}>
          {portfolioData.map(el => (
            <Grid
              item
              xs={12}
              sm={el.id >= 4 ? 6 : 4}
              key={el.id}
              className={classes.item}
            >
              <PortfolioInfoComponent
                image={el.image}
                title={el.title}
                link={el.link}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
