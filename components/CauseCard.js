import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Link from 'next/link';
import NewModal from './NewModal';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CauseCard({ avatar, title, subtitle, image, content, index, description }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [expanded, setExpanded] = React.useState(-1);

    const handleExpandClick = (index) => {
        setExpanded(expanded === index ? -1 : index);
    };

    return (
        <Card
            sx={{
                maxWidth: 345,
                height: 'fit-content',
                minHeight: '460px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <NewModal open={open} handleClose={handleClose} />
            <CardHeader
                avatar={<Avatar src={avatar} />}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />
            <CardMedia component="img" height="194" image={image} alt="Paella dish" />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', padding: '0px 12px' }}>
                <div onClick={handleOpen}>
                    <Button variant="contained" disabled sx={{ background: '#72E744' }}>
                        <Link href="/">
                            <a style={{ color: 'black' }}>Seguimiento</a>
                        </Link>
                    </Button>
                </div>
                <div>
                    <Link href="#">
                        <a>
                            <Button variant="contained" sx={{ background: '#72E744' }}>
                                Donar
                            </Button>
                        </a>
                    </Link>
                </div>
            </div>
            <CardContent>
                <Typography variant="body2" color="black">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={() => handleExpandClick(index)}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{content}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
