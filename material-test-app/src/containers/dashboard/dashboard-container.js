import React, { useEffect, useState } from "react";
import ChartComponent from "./components/chartComponent";
import GhostContentAPI from "@tryghost/content-api";
import { Box, Container, Grid } from "@material-ui/core";
import CardComponent from "../../shared/components/card";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../../redux/actions/posts.js";
import { isTemplateExpression } from "typescript";

const DashboardContainer = (props) => {
  const dispatch = useDispatch();
  const [authors, setAuthors] = useState([]);
  const appState = useSelector((state) => state);
  let postsState = appState.posts;
  const [dashboardCards, setDashboardCards] = useState([]);
  console.log("appState :", appState);

  const api = new GhostContentAPI({
    url: "https://ghost-blog.ipxp.in",
    key: "8196190b08906dda0ebf6e6f5d",
    version: "v3",
  });
  let authList = [];
  const getAuthours = (list) => {};

  useEffect(() => {
    if (appState.posts?.postList?.length) {
      console.log("need to set");
    } else {
      api.posts
        .browse({ include: "tags,authors" })
        .then((res) => {
          console.log("res:", res);
          postsState = {
            ...postsState,
            postList: [...res],
            ...{ numberOfPostst: res.length },
          };
          console.log("post:", postsState);
          getAuthours(res);
          dispatch(setPosts(postsState));
          setDashboardCards((current) => [
            ...current,
            ...[
              { body: { content: "Number of Posts", value: res.length } },
              { body: { content: "Number of Authors", value: 5 } },
              { body: { content: "Number of Tags", value: 25 } },
            ],
          ]);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);
  useEffect(() => {
    console.log("authlist :", authList);
  });

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 3,
      }}
    >
      <Container maxWidth={false}>
      <Grid container spacing={3}>
      {
        dashboardCards.length? dashboardCards.map((card, cardIndex) =>{
          return (
            
          <Grid item lg={3} sm={6} xl={3} xs={12} key={cardIndex}>
            <CardComponent data={card}/>
          </Grid>
       
          )
        }): ""
      }
      </Grid>
        
      </Container>
    </Box>
  );
};

export default DashboardContainer;
