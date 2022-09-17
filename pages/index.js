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
            <div
                style={{
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
                }}
            >
                <Image src={Recurso} width="120px" height="120px" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '30px',
                        width: '100%',
                        background: 'black',
                    }}
                >
                    <Typography sx={{ color: '#fff' }}>
                        Dona con criptomonedas y recibi el NFT para hacer seguimiento de tu donación
                    </Typography>
                </div>
                <div style={{ display: 'flex' }}>
                    <div
                        style={{
                            width: '50vw',
                            background: 'white',
                            color: 'black',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <Typography variant="h3">QUIERO RECAUDAR FONDOS</Typography>
                            <Typography>
                                Todas las fundaciones que solicitan donaciones en nuestra plataforma PONT pasan por un proceso de
                                verificación previamente, donde deberan presentar un proyecto concreto y trayectoria real o una
                                causa que pueda verificarse
                            </Typography>
                            <Typography>
                                Si usted desea recaudar fondos en criptomonedas con nuestra tecnologia, por favor llene el
                                formulario de inscripción:
                            </Typography>
                            <Link href="/mas-info" style={{ marginLeft: 'auto' }}>
                                <Button variant="contained" sx={{ background: '#72E744', color: 'white' }}>
                                    MAS INFO
                                </Button>
                            </Link>
                        </div>
                        <Image src={Recurso3} />
                    </div>
                    <div
                        style={{
                            width: '50vw',
                            display: 'flex',
                            flexDirection: 'column',
                            background: 'linear-gradient(90deg, rgba(82,162,195,1) 0%, rgba(15,83,170,1) 100%)',
                            gap: '20px',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <Box sx={{ color: 'white' }}>
                                <Typography variant="h3">DONA CON CRIPTOMONEDAS</Typography>
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
                            <Link href="/fundaciones" style={{ marginLeft: 'auto', marginTop: '-10px' }}>
                                <Button variant="contained" sx={{ background: '#72E744', color: 'white' }}>
                                    EXPLORAR FUNDACIONES
                                </Button>
                            </Link>
                        </div>
                        <Image src={Recurso2} />
                    </div>
                </div>
            </div>
        </>
    );
}
