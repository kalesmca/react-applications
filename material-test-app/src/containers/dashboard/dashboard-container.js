import React,{useEffect, useState} from "react";
import ChartComponent from "./components/chartComponent";
import GhostContentAPI from '@tryghost/content-api'
import { Box, Container, Grid } from '@material-ui/core';
import CardComponent from "./components/cardComponent";
import {useSelector,useDispatch} from 'react-redux';
import {setPosts} from '../../redux/actions/posts.js';
import { isTemplateExpression } from "typescript";


const DashboardContainer = (props) => {
   const dispatch = useDispatch();
   const [authors, setAuthors] = useState([])
   const appState = useSelector((state) => state)
   let postsState = appState.posts;
   console.log('appState :', appState);

  const api = new GhostContentAPI({
    url: 'https://ghost-blog.ipxp.in',
    key: '8196190b08906dda0ebf6e6f5d',
    version: "v3"
  });
  let authList = [];
  const getAuthours = (list)=>{
    debugger
     list.map((post)=>{
      //  if(!authors.length){
      //    setAuthors(post.authors)
      //    authList.push(post.authors)
      //  } else {
      //   let newList =  post.authors.filter((tmpAuth) => {
      //     return authors.filter((newAuth) => {
      //       return newAuth.id !== tmpAuth.id
      //     })
         
      //   })
      //   authList = [...authList, ...newList]
      //    setAuthors((current)=> [...current, ...newList])
      //  }
      if(!authors.length){
           setAuthors(post.authors)
           authList.push(post.authors)
         } else {
          let result = post.authors.filter(o1 => authList.some(o2 => o1.id === o2.id));
          authList.push(result)
         }
       
      
    })
    console.log(authList)
  }

  useEffect(()=>{
    if(appState.posts?.postList?.length){
      console.log("need to set")
    } else {
      api.posts
      .browse({include: 'tags,authors'})
      .then((res) => {
          console.log('res:', res);
          postsState = {...postsState, postList: [...res], ...{numberOfPostst: res.length}}
          console.log('post:', postsState)
          getAuthours(res)
          dispatch(setPosts(postsState));
      })
      .catch((err) => {
          console.error(err);
      });
      
      

    }
    
  },[])
  useEffect(()=>{
    console.log('authlist :', authList)
  })
 
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >

<Container maxWidth={false}>
      
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <CardComponent />
          </Grid>
          </Grid>
          </Container>
    </Box>


  )
};

export default DashboardContainer;
