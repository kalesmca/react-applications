import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteBorderSharp from '@material-ui/icons/FavoriteBorderSharp';
import FavoriteSharp from '@material-ui/icons/FavoriteSharp';
import PersonOutlineSharp from '@material-ui/icons/PersonOutlineSharp';
import CardGiftcardSharp from '@material-ui/icons/CardGiftcardSharp';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

import Speed from '@material-ui/icons/Speed';
import HeaderContainer from '../header/header-container';
import DashboardContainer from '../dashboard/dashboard-container';
import FavoritesContainer from '../favorites/favorites-container';
import IconBreadcrumbs from '../../shared/components/breadcrumbs';

const drawerWidth = 240;
const sideNavList = ['Dashboard', "Favorite", "Client360", "Greetings", "Files Sync and Share", "PII", "Managements", "Reports", "Pre Order Assessment", "Omni-channel Routing", "Payments"]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function LayoutContainer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderContainer 
          handleDrawerOpen={handleDrawerOpen}
          classes={classes}
          open = {open}
      />
      
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          
            <ListItem button>
              <ListItemIcon> <Speed /> </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
              {/* <ListItemIcon> <FavoriteBorderSharp/> </ListItemIcon> */}
              
              
            </ListItem>
            <ListItem button>
              <ListItemIcon> <FavoriteSharp /> </ListItemIcon>
              <ListItemText primary={"Favorite"} />
              {/* <ListItemIcon> <FavoriteSharp/> </ListItemIcon> */}
            </ListItem>
            <ListItem button>
              <ListItemIcon> <PersonOutlineSharp /> </ListItemIcon>
              <ListItemText primary={"Client 360"} />
              <ListItemIcon> <FavoriteBorderSharp/> </ListItemIcon>
              
            </ListItem>
            <ListItem button>
              <ListItemIcon> <CardGiftcardSharp /> </ListItemIcon>
              <ListItemText primary={"Greetings"} />
              <ListItemIcon> <FavoriteBorderSharp/> </ListItemIcon>
              
              
            </ListItem>
           
         
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <IconBreadcrumbs/>
        <Switch>
          <Route 
            exact 
            path="/" 
            render ={()=> {
              return(
              <Redirect to="dashboard"/>
              )
            }}
            >
            </Route>
            <Route path="/dashboard" component={DashboardContainer}/>
            <Route path="/favorites" component={FavoritesContainer} />
        </Switch>
      </main>
    </div>
  );
}
