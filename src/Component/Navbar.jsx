import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';  
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import { FaUserCircle } from "react-icons/fa";

const drawerWidth = 240;
const navItems = [
  
  { Name: "Header", URL: "Header" },
  { Name: "Skills", URL: "Skills" },
  { Name: "Project", URL: "/projects" },
  { Name: "Resume", URL: "Project" },
  { Name: "Contact", URL: "Project" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2,  ml:7}}>
      <img className='nav_img_logo' src='./media/logo-1.png' alt='error' style={{
             width:"200px",
           
          }}/>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link to={item.URL} key={item.Name} style={{ textDecoration: 'none' }}>
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.Name} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <div className='container1'>
<Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{
        display:'flex',
        justifyContent: 'center',
        backgroundColor:"rgb(33 36 40 / 0%)",
        // backgroundColor:'black',
        height:'17vh',
        // width:'100%'
      }}>
        <Toolbar>
      
        <img className='nav_logo-1' src='./media/logo-1.png' alt='error' style={{
              width:"200px",
               
            //   marginLeft:'50px',
            //   backgroundColor:'pink'
          }}/>
{/* img2 */}

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // backgroundColor='white'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, }}
         className='icons_btn' >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          <img src='./media/logo-1.png' alt='error' style={{
              width:"200px",
              marginLeft:'60px',
              //  backgroundColor:'yellow'
          }}/>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block',} }}>
            {navItems.map((item) => (
              <Link to={item.URL} key={item.Name} style={{ textDecoration: 'none',color:'black', }}>
              <Button key={item} sx={{ color: '#fff'}}>
                {item.Name}
              </Button>
              </Link>
            ))}
            
          </Box>
          <div className='nav_icons'>
         
         <div className='icons_use'> <Link className=' cursor-pointer' to={''}><FaUserCircle/></Link></div>
         <div className='cursor-pointer '> <Link className='no-underline text-slate-900' to={''}>Login</Link></div>
         <Button className='nav_btn-bt' variant="contained">Book Now</Button>

       
         </div>

        
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
</div>

  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};


export default Navbar;
