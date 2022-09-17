import { useRouter } from 'next/router';
import { Box, Button, Icon, LinearProgress, Typography, Avatar } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Image from 'next/image';
import CauseCard from '../../components/CauseCard';

export default function Profile() {
    const router = useRouter();

    return (
        <div style={{ background: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ height: '300px', background: 'white', position: 'relative' }}>
                <Image
                    src="https://pxb.cdn.eldiariodelarepublica.com/republica/122018/1545763485907.jpeg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                />
            </Box>
            <Box sx={{ display: 'flex', flexGrow: '1' }}>
                <Box
                    sx={{
                        width: '27vw',
                        padding: '40px',
                        paddingTop: '80px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        position: 'relative',
                        maxHeight: '550px',
                    }}
                >
                    <Avatar
                        sx={{
                            width: 180,
                            height: 180,
                            position: 'absolute',
                            top: '-100px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            border: '1px solid black',
                        }}
                        alt="Remy Sharp"
                        src="https://i.imgur.com/TgR3k6k.png"
                    />
                    <Box>
                        <Typography sx={{ marginBottom: '8px' }}>Fundacion Wichi</Typography>
                        <Typography>@fundacionwichi</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography>0</Typography>
                            <Typography>Seguidores</Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography>0</Typography>
                            <Typography>Seguidores</Typography>
                        </Box>
                    </Box>
                    <Button variant="outlined" startIcon={<PersonAddAltIcon />}>
                        Seguir
                    </Button>

                    <Box>
                        <Typography>Objetivos de recaudacion en total de las campañas</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ width: '100%', mr: 1 }}>
                                <LinearProgress variant="determinate" value={80} sx={{ height: '10px', borderRadius: '10px' }} />
                            </Box>
                            <Box sx={{ minWidth: 35 }}>
                                <Typography variant="body2">{`${Math.round(80)}%`}</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Typography>Total de fondos reacaudados:</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                            <div style={{ display: 'grid', placeItems: 'center', marginRight: '8px' }}>
                                <Image
                                    src="https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png"
                                    width="30"
                                    height="30"
                                />
                            </div>
                            <Box
                                sx={{
                                    border: '1px solid #000',
                                    width: 'fit-content',
                                    paddingX: '16px',
                                    paddingY: '4px',
                                    borderRadius: '8px',
                                }}
                            >
                                <Typography variant="body2">200 USDC</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ padding: '40px' }}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
                        {data.map((item, index) => (
                            <CauseCard
                                avatar={item.avatar}
                                title={item.title}
                                subtitle={item.subtitle}
                                image={item.image}
                                content={item.content}
                                seguimiento={item.seguimiento}
                                description={item.description}
                                index
                                key={index}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

const data = [
    {
        avatar: 'https://i.imgur.com/TgR3k6k.png',
        subtitle: 'Septiembre 17, 2022',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6UU--9Nq4qmRpshpt4GmrzG0Vw9PX6rv_cA&usqp=CAU',
        seguimiento: false,
        title: 'Campamento infantil',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.',
    },
    {
        avatar: 'https://i.imgur.com/TgR3k6k.png',
        subtitle: 'Septiembre 17, 2022',
        image: 'https://www.siwok.org/wp-content/uploads/2019/12/agua1.jpg',
        seguimiento: true,
        title: 'Agua potable',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.',
    },
];
