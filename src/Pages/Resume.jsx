import React from "react";
import Grid from "@material-ui/core/Grid";
import ResumeInfo from ".././Components/ResumeComponent/ResumeInfoComponent/index";
import { useStyle } from ".././Styles/ResumeStyle";

export const Resume = () => {
  let sentance1 =
    "I worked at freelancer website with team have 10 members like a Front-End Developer and Back-End Developer , those members from all over the arab world.";
  let sentance2 =
    "I trained with View Platform company in Front End field , then worked with them .";
  let sentance3 =
    "I am one of the participants in the initiative of one million Arab programmers in the field of website development and one of the people who got creative and professional evaluation in the field in which I was";
  let sentance4 =
    "Now I am still studying at the university in the field of computer science, and when I get my bachelor's degree I am in the master's degree";

  const classes = useStyle();
  return (
    <div>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <h1 className={classes.h1}>Experience</h1>
          <Grid container>
            <Grid item xs={12} sm={6} className={classes.itemGrid}>
              <ResumeInfo
                headline="Full Stack Developer"
                date="17/08/2017 - 21/02/2019 | Freelancer"
                subject={sentance1}
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.itemGrid}>
              <ResumeInfo
                headline="Front-End Developer"
                date="11/01/2018 - to now | View Platform Company"
                subject={sentance2}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <h1 className={classes.h1}>Eduation</h1>
          <Grid container>
            <Grid item xs={12} sm={6} className={classes.itemGrid}>
              <ResumeInfo
                headline="Full Stack Developer (python)"
                date="18/02/2018 - 27/03/2018 | One Million Aeab Programmer"
                subject={sentance3}
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.itemGrid}>
              <ResumeInfo
                headline="Computer Science"
                date="07/02/2016 - to now | PTUK"
                subject={sentance4}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

/*
<ResumeInfo headline="Full Stack Developer" date="17/08/2017 - 21/02/2019 | Freelancer" subject={sentance1} />
<ResumeInfo headline="Front-End Developer" date="11/01/2018 - to now | View Platform Company" subject={sentance2} />
<ResumeInfo headline="Full Stack Developer (python)" date="18/02/2018 - 27/03/2018 | One Million Aeab Programmer" subject={sentance3} />
<ResumeInfo headline="Computer Science" date="07/02/2016 - to now | PTUK" subject={sentance4} />
*/
