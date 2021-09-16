import React, { useEffect, useState } from "react";
import GhostContentAPI from "@tryghost/content-api";
import { Box, Container, Grid } from "@material-ui/core";
import CardComponent from "../../shared/components/card";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../../redux/actions/posts.js";
import { isTemplateExpression } from "typescript";
import BarChartComponent from "../../shared/components/barChart";
import {getAuthourAndTags, getOrderdPosts, getChartData} from './utils/dashboard-utils';

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
  
  

  useEffect(() => {
    if (appState.posts?.postList?.length) {
      console.log("need to set");
    } else {
      api.posts
        .browse({ include: "tags,authors" })
        .then((res) => {
          postsState = {
            ...postsState,
            postList: [...getOrderdPosts(res)],
            ...{ numberOfPostst: res.length }, ...{authorList : getAuthourAndTags(res).authList},
            ...{tagList : getAuthourAndTags(res).tagList}
          };
          
          dispatch(setPosts(postsState));
          setDashboardCards((current) => [
            ...current,
            ...[
              { body: { content: "Number of Posts", value: res.length } },
              { body: { content: "Number of Authors", value: postsState.authorList.length } },
              { body: { content: "Number of Tags", value:  postsState.tagList.length} },
            ],
          ]);
          getChartData(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);
  

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
          {dashboardCards.length
            ? dashboardCards.map((card, cardIndex) => {
                return (
                  <Grid item lg={3} sm={6} xl={3} xs={12} key={cardIndex}>
                    <CardComponent data={card} />
                  </Grid>
                );
              })
            : ""}
        </Grid>
        {
          postsState.postList.length ? (<div style={{marginTop: "2rem", width: "66rem"}}>
          <BarChartComponent  chartData={getChartData(postsState.postList)}/>
        </div>) : ""
        }
        
      </Container>
    </Box>
  );
};

export default DashboardContainer;
