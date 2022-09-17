import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import Pont from '../public/PONT.png';

const pages = [
    {
        label: 'fundaciones',
        path: 'fundaciones',
    },
    {
        label: 'Nuestro proposito',
        path: 'nuestro-proposito',
    },
];
const settings = ['Perfil', 'Cuenta', 'Dashboard', 'Salir'];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ background: '#c8d9e6' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link href="/" style={{ height: '100%', display: 'block' }}>
                        <a>
                            <Box
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    width: '100px',
                                }}
                            >
                                <Image src={Pont} objectFit="contain" />
                            </Box>
                        </a>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <Link href={`/${page.path}`} key={page.path}>
                                    <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" color="#000">
                                            {page.label.toUpperCase()}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Link href="/" style={{ height: '100%', display: 'block' }}>
                        <a>
                            <Box
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    width: '70px',
                                }}
                            >
                                <Image src={Pont} objectFit="contain" />
                            </Box>
                        </a>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link href={`/${page.path}`} key={page.path}>
                                <Button
                                    key={page.path}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#000', display: 'block', mx: 2 }}
                                >
                                    {page.label.toUpperCase()}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <ConnectButton label="Conectar Wallet" />
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography
                                        textAlign="center" /* onClick={setting === 'Salir' ? disconnectWallet : undefined} */
                                    >
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
