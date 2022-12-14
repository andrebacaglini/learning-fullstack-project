import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/ConfigureStore";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
]

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    topography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}
export default function Header({ darkMode, handleThemeChange }: Props) {
    
    const { basket } = useAppSelector(state => state.basket); //using redux

    const itemsCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <AppBar position='static' sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    <Typography variant='h6' component={NavLink} to='/' sx={navStyles} >MY STORE</Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange} />
                </Box>
                <Box display='flex' alignItems='center'>
                    <List sx={{ display: 'flex' }}>
                        {midLinks.map(({ title, path }) => {
                            return (
                                <ListItem
                                    component={NavLink}
                                    to={path}
                                    key={path}
                                    sx={navStyles}>
                                    {title.toUpperCase()}
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
                <Box display='flex' alignItems='center'>
                    <IconButton component={Link} to='/basket' size='large' sx={navStyles}>
                        <Badge badgeContent={itemsCount} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: 'flex' }}>
                        {rightLinks.map(({ title, path }) => {
                            return (
                                <ListItem component={NavLink}
                                    to={path} key={path} sx={navStyles}>
                                    {title.toUpperCase()}
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}