"use client"; // High-level instruction: Tells Next.js this file needs to handle clicks and browser logic

import { usePathname } from 'next/navigation'; // "Import" brings in a pre-made tool from the Next.js library

// "export" makes this function available to other files (like your main layout)
// "default" means this is the main thing being shared from this file
// "function Header()" defines a reusable block of UI code
export default function Header() {

    // "const" defines a variable that won't be reassigned (a constant)
    // Here, we are storing the current browser path in a variable called 'pathname'
    const pathname = usePathname();

    // This is a "helper function" that calculates the CSS styles for our links
    // (path: string) means this function expects a piece of text as input
    const getLinkStyle = (path: string) => ({
        textDecoration: 'none', // Removes the default blue underline from links
        // Ternary Operator: "Is current path equal to link path? If yes, use orange; if no, use gray"
        color: pathname === path ? '#ff4b2b' : '#333',
        // Logic: "Is current path equal to link path? If yes, make it bold; if no, use medium weight"
        fontWeight: pathname === path ? 'bold' : '500',
        transition: 'color 0.2s' // Smoothly fades the color change over 0.2 seconds
    });

    // "return" tells the function exactly what HTML-like code to send to the screen
    return (
        // The <header> tag defines the top section of the page
        <header style={{
            padding: '20px 40px', // Adds 20px space on top/bottom and 40px on left/right
            backgroundColor: '#fff', // Sets the background color to white
            borderBottom: '1px solid #eaeaea', // Draws a light gray line at the bottom
            display: 'flex', // Enables "Flexbox" layout (items sit in a row)
            justifyContent: 'space-between', // Pushes the logo to the left and nav to the right
            alignItems: 'center', // Aligns the logo and links perfectly in the vertical center
            flexWrap: 'wrap', // Allows items to wrap to a new line if the screen is too narrow
            gap: '15px' // Adds 15px of space between items when they wrap
        }}>
            {/* The <h2> is your logo/title. 🥘 is an emoji treated as text */}
            <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#ff4b2b' }}>🥘 ErkutCooks</h2>

            {/* <nav> tells screen readers and Google that this contains navigation links */}
            <nav>
                {/* <ul> is an "Unordered List" (bullet points, though we hide the dots) */}
                <ul style={{
                    display: 'flex', // Makes the list items sit horizontally in a row
                    gap: '20px', // Adds 20px space between each link
                    listStyle: 'none', // Removes the default bullet points
                    margin: 0 // Removes default browser spacing around the list
                }}>
                    {/* <li> is a "List Item". <a> is an "Anchor" (the actual clickable link) */}
                    {/* style={getLinkStyle('/')} calls our function above to decide the color */}
                    <li><a href="/" style={getLinkStyle('/')}>Home</a></li>
                    <li><a href="/recipes" style={getLinkStyle('/recipes')}>My Recipes</a></li>
                    <li><a href="/spanish" style={getLinkStyle('/spanish')}>Spanish Lessons</a></li>
                </ul>
            </nav>
        </header>
    );
}