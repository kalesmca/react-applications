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
  
  const getAuthourAndTags = (list) => {
    let obj = {
      authList: [],
      tagList:[]
    }
    
    let allAuthors = [];
    let allTags = [];
    list.map((post) => {
      allAuthors = [...allAuthors, ...post.authors];
      allTags = [...allTags, ...post.tags];
    });

    obj.authList = allAuthors.reduce((unique, o) => {
      if (!unique.some((obj) => obj.id === o.id)) {
        unique.push(o);
      }
      return unique;
    }, []);

    obj.tagList = allTags.reduce((unique, o) => {
      if (!unique.some((obj) => obj.id === o.id)) {
        unique.push(o);
      }
      return unique;
    }, []);

    return obj;
  };

  useEffect(() => {
    if (appState.posts?.postList?.length) {
      console.log("need to set");
    } else {
      api.posts
        .browse({ include: "tags,authors" })
        .then((res) => {
          postsState = {
            ...postsState,
            postList: [...res],
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
      </Container>
    </Box>
  );
};

export default DashboardContainer;
