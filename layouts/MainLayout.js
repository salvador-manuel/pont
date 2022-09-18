import React from 'react';
import NavBar from '../components/NavBar';

export default function MainLayout({ children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>{children}</main>
        </div>
    );
}
