import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function index() {
    return (
        <div style={{ paddingLeft: '20px' }}>
            <div>
                <p>Insripcion y requisitos</p>
                <ul>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit</li>
                </ul>
            </div>
            <div>
                <p>Conectate con la DAO</p>
                <Button variant="contained" sx={{ background: '#72E744' }}>
                    Ir a la DAO
                </Button>
            </div>

            <div>
                <p style={{ fontWeight: 'bold', marginTop: '40px', marginBottom: '4px' }}>
                    Si no sabes como, conectate con soporte técnico
                </p>
                <Link href="/form">Hace click aqui</Link>
            </div>
        </div>
    );
}
