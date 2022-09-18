import Head from 'next/head';
import Image from 'next/image';
import { Typography, Link, Button, Box } from '@mui/material';
import Recurso3 from '../public/RECURSO3.png';
import Recurso from '../public/RECURSO.png';
import Recurso2 from '../public/RECURSO2.png';

export default function Home() {
    return (
        <>
            <Head>
                <meta name="description" content="Página de donaciones" />
            </Head>
            <Box
                sx={{
                    position: 'absolute',
                    zIndex: 2,
                    left: '0',
                    right: '0',
                    bottom: '25%',
                    margin: 'auto',
                    width: '120px',
                    height: '120px',
                    backgroundColor: 'white',
                    padding: '4px',
                    borderRadius: '50%',
                    display: { xs: 'none', md: 'block' },
                }}
            >
                <Image src={Recurso} width="120px" height="120px" />
            </Box>
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, background: 'red' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingY: { xs: '4px', md: '2px' },
                        width: '100%',
                        background: 'black',
                    }}
                >
                    <Typography sx={{ color: '#fff', textAlign: 'center' }}>
                        Dona con criptomonedas y recibi el NFT para hacer seguimiento de tu donación
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: { xs: 'column', md: 'row' } }}>
                    <Box
                        sx={{
                            width: { xs: '100vw', md: '50vw' },
                            background: 'white',
                            color: 'black',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: { xs: '700px', md: 'unset' },
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                flexGrow: 1,
                                justifyContent: 'space-between',
                                padding: '20px 30px 0px 30px',
                            }}
                        >
                            <Typography variant="h4">QUIERO RECAUDAR FONDOS EN TODO EL MUNDO</Typography>
                            <Typography variant="body1">
                                Todas las fundaciones que solicitan donaciones en nuestra plataforma PONT pasan por un proceso de
                                verificación previamente, donde deberan presentar un proyecto concreto y trayectoria real o una
                                causa que pueda verificarse
                            </Typography>
                            <Typography variant="body1">
                                Si usted desea recaudar fondos en criptomonedas con nuestra tecnologia, por favor llene el
                                formulario de inscripción:
                            </Typography>
                            <Link href="/mas-info" style={{ marginLeft: 'auto', textDecoration: 'none' }}>
                                <Button variant="contained" sx={{ background: '#72E744', color: 'white' }}>
                                    MAS INFO
                                </Button>
                            </Link>
                        </div>
                        <Box sx={{ height: { xs: '250px ', md: '55%' }, position: 'relative' }}>
                            <Image src={Recurso3} layout="fill" objectFit="cover" objectPosition="top" />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: { xs: '100vw', md: '50vw' },
                            display: 'flex',
                            flexDirection: 'column',
                            background: 'linear-gradient(90deg, rgba(82,162,195,1) 0%, rgba(15,83,170,1) 100%)',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                flexGrow: 1,
                                justifyContent: 'space-between',
                                padding: '20px 30px 0px 30px',
                            }}
                        >
                            <Box sx={{ color: 'white' }}>
                                <Typography variant="h4">DONA CON CRIPTOMONEDAS</Typography>
                                <Typography>Comenza a donar desde 1 dolar</Typography>
                            </Box>
                            <Box sx={{ padding: '8px', background: '#e2e2e2', color: '#000', borderRadius: '4px' }}>
                                <Typography>
                                    Tu ayuda podria hacer la diferencia, dentro de PONT, encontraras causas sociales que necesitan
                                    tu ayuda . La realidad en la que vivimos hoy en dia nos ata a un sistema economico en el que
                                    nuestra moneda se devalua, con tu aporte en criptomonedas podrias ayudar a las comunidades que
                                    lo necesiten pueden lograr que sus fondos se mantengan estables o crezcan con el tiempo.
                                </Typography>
                            </Box>
                            <Link href="/fundaciones" style={{ marginLeft: 'auto', marginTop: '8px', textDecoration: 'none' }}>
                                <Button variant="contained" sx={{ background: '#72E744', color: 'white' }}>
                                    EXPLORAR FUNDACIONES
                                </Button>
                            </Link>
                        </div>
                        <Box sx={{ height: { xs: '250px ', md: '55%' }, position: 'relative' }}>
                            <Image src={Recurso2} layout="fill" objectFit="cover" objectPosition="top" />
                        </Box>
                    </Box>
                </Box>
            </div>
        </>
    );
}
