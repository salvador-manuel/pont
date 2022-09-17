import React from 'react';
import { Box, Button, TextField, Paper } from '@mui/material';

export default function Form() {
    return (
        <div style={{ paddingTop: '40px', height: '100%' }}>
            <Paper
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '40%',
                    marginX: 'auto',
                    gap: '20px',
                    padding: '60px',
                    borderRadius: '8px',
                }}
                elevation={3}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={{ color: 'black', marginBottom: '8px' }}>Nombre y apellido</label>
                    <input
                        style={{
                            background: 'transparent',
                            outline: 'none',
                            border: '1px solid black',
                            padding: '8px',
                            borderRadius: '4px',
                        }}
                    ></input>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={{ color: 'black', marginBottom: '8px' }}>Email</label>
                    <input
                        style={{
                            background: 'transparent',
                            outline: 'none',
                            border: '1px solid black',
                            padding: '8px',
                            borderRadius: '4px',
                        }}
                    ></input>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={{ color: 'black', marginBottom: '6px' }}>Nombre de la fundacion o causa</label>
                    <input
                        style={{
                            background: 'transparent',
                            outline: 'none',
                            border: '1px solid black',
                            padding: '8px',
                            borderRadius: '4px',
                        }}
                    ></input>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={{ color: 'black', marginBottom: '8px' }}>Objetivo del proyecto (Breve descripción)</label>
                    <textarea
                        style={{
                            background: 'transparent',
                            outline: 'none',
                            border: '1px solid black',
                            padding: '8px',
                            borderRadius: '4px',
                        }}
                        cols="40"
                        rows="5"
                    ></textarea>
                </div>
                <Button variant="contained" sx={{ background: '#72E744', width: 'fit-content', marginLeft: 'auto' }}>
                    Enviar
                </Button>
            </Paper>
        </div>
    );
}
