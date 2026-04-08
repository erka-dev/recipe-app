"use client"; // This is required to use hooks like usePathname

import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    // Helper function to set the color based on the current page
    const getLinkStyle = (path: string) => ({
        textDecoration: 'none',
        color: pathname === path ? '#ff4b2b' : '#333', // Orange if active, dark gray if not
        fontWeight: pathname === path ? 'bold' : '500',
        transition: 'color 0.2s'
    });

    return (
        <header style={{
            padding: '20px 40px',
            backgroundColor: '#fff',
            borderBottom: '1px solid #eaeaea',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '15px'
        }}>
            <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#ff4b2b' }}>🥘 ErkutCooks</h2>
            <nav>
                <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0 }}>
                    <li><a href="/" style={getLinkStyle('/')}>Home</a></li>
                    <li><a href="/recipes" style={getLinkStyle('/recipes')}>My Recipes</a></li>
                    <li><a href="/spanish" style={getLinkStyle('/spanish')}>Spanish Lessons</a></li>
                </ul>
            </nav>
        </header>
    );
}