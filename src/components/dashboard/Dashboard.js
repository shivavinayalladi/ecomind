import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import PieChartIcon from '@mui/icons-material/PieChart';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import ManIcon from '@mui/icons-material/Man';
import CssBaseline from '@mui/material/CssBaseline';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Divider from '@mui/material/Divider';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import IconButton from '@mui/material/IconButton';
import CelebrationIcon from '@mui/icons-material/Celebration';
import QuizIcon from '@mui/icons-material/Quiz';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ChaletIcon from '@mui/icons-material/Chalet';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useNavigate} from 'react-router-dom'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import {useAppStore} from './Appstore'
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
function Dashboard() {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(true);
  const navigate=useNavigate();
 
  const open=useAppStore((state)=>state.dopen);

 



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box height={40}/>
      <Drawer variant="permanent" open={open}>
         <DrawerHeader>
          <IconButton >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader> 
        <Divider />
      
         
      
        <List>
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/dashboard")}}>
              <ListItemButton
                sx={{
                  minHeight: 70,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <SpaceDashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/quiz")}}>
              <ListItemButton
                sx={{
                  minHeight: 70,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <QuizIcon/>
                </ListItemIcon>
                <ListItemText primary="Quiz" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
           
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/analytics")}}>
              <ListItemButton
                sx={{
                  minHeight: 70,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <PieChartIcon/>
                </ListItemIcon>
                <ListItemText primary="Analytics" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
           
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/quote")}}>
              <ListItemButton
                sx={{
                  minHeight: 70,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <FormatQuoteIcon/>
                </ListItemIcon>
                <ListItemText primary="Quote" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/riddle")}}>
              <ListItemButton
                sx={{
                  minHeight: 70,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <LowPriorityIcon/>
                </ListItemIcon>
                <ListItemText primary="Riddle" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/Hangman")}}>
              <ListItemButton
                sx={{
                  minHeight: 70,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    <ManIcon/>
                </ListItemIcon>
                <ListItemText primary="Hang man" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/")}}>
              <ListItemButton
                sx={{
                  minHeight: 70,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    <LogoutIcon/>
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            
        
        </List>
      </Drawer>
      
    </Box>
  );
}
export default Dashboard;