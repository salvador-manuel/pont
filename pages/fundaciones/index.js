import { Typography, Box } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Recurso from '../../public/RECURSO.png';
import NewCard from '../../components/NewCard';

export default function Fundaciones() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'linear-gradient(90deg, rgba(152,243,225,1) 0%, rgba(15,83,170,1) 100%);',
                    py: '40px',
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Image src={Recurso} width="200px" height="200px" />
                    </Box>
                    <Box sx={{ color: 'white', textAlign: { md: 'right', xs: 'center' } }}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="h2">
                            CONOCE LAS FUNDACIONES
                        </Typography>
                        <Typography variant="h3">que necesitan de tu ayuda</Typography>
                        <Typography
                            sx={{ width: '70vw', marginLeft: { xs: 'unset', md: 'auto' }, marginX: { xs: 'auto', md: 'unset' } }}
                            variant="h6"
                        >
                            Tu aporte de $1 USDC, es equivalente a 1 plato de comida. Explora las diferentes fundaciones y
                            adentrate en sus causas, podras visitar sus perfiles y formar parte de un cambio con herramientas
                            tecnologicas.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '90vw',
                        marginX: 'auto',
                        marginTop: '60px',
                    }}
                    flexDirection={{ xs: 'column', md: 'row' }}
                    alignItems={{ xs: 'center', md: 'start' }}
                    gap={{ xs: '20px' }}
                >
                    {data.map((item, index) => (
                        <NewCard
                            avatar={item.avatar}
                            title={item.title}
                            subtitle={item.subtitle}
                            image={item.image}
                            content={item.content}
                            causas={item.causas}
                            key={item.id}
                            index={index}
                        />
                    ))}
                </Box>
            </Box>
        </>
    );
}

const data = [
    {
        id: '0x01',
        avatar: 'https://i.imgur.com/TgR3k6k.png',
        title: 'Fundacion Wichi',
        subtitle: 'Salta, Argentina',
        image: 'https://i.imgur.com/2uOiVKW.jpeg',
        content: 'DEFINICION DEL PROBLEMA, OBJETIVOS, BREVE DESCRIPCION',
        causas: [
            {
                title: 'Caso 1',
                description: 'Descripcion 1',
            },
            {
                title: 'Caso 2',
                description: 'Descripcion 2',
            },
        ],
    },
    {
        id: '0x02',
        avatar: 'https://i.imgur.com/LA4PRbq.png',
        title: 'Fundacion Empate',
        subtitle: '',
        image: 'https://i.imgur.com/KdrcxTj.jpeg',
        content: 'La Fundacion Empate acompaña a persona con Sindrome de Down para que puedan desarrollarse deportivamente',
        causas: [
            {
                title: 'Caso 1',
                description: 'Descripcion 1',
            },
        ],
    },
    {
        id: '0x03',
        avatar: 'https://i.imgur.com/tsEE9uu.png',
        title: 'Fundacion Niños del Sol',
        subtitle: 'Santa fe',
        image: 'https://i.imgur.com/gwnNCae.jpeg',
        content:
            'Atendemos las necesidades mas urgentes de los mas de 200 niños y adultos que asisten en situacion de vulnerabilidad a nuestra institucion.',
        causas: [
            {
                title: 'Caso 1',
                description: 'Descripcion 1',
            },
            {
                title: 'Caso 2',
                description: 'Descripcion 2',
            },
            {
                title: 'Caso 3',
                description: 'Descripcion 3',
            },
        ],
    },
];
