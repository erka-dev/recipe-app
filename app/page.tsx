// "import" brings in the Link component from Next.js
// This allows for "client-side navigation" (switching pages without a full browser refresh)
import Link from 'next/link';

// "export default" shares this main page function with the rest of the application
export default function Home() {

  // "return" starts the visual output for the home screen
  return (
    // <main> centers the content and adds padding for a clean look
    <main style={{
      padding: '80px 20px', // Large top/bottom padding to create a "Hero" section feel
      textAlign: 'center', // Centers all text and buttons horizontally
      fontFamily: 'sans-serif' // Keeps the font consistent with the rest of the app
    }}>
      {/* The Main Headline */}
      <h1 style={{
        fontSize: '3rem', // Large font size for impact
        marginBottom: '20px', // Space between the title and the subtitle
        color: '#333' // Dark gray for high contrast
      }}>
        Welcome to 🥘 ErkutCooks
      </h1>

      {/* The Subheadline / Value Proposition */}
      <p style={{
        fontSize: '1.2rem', // Slightly larger than standard body text
        color: '#666', // Lighter gray to indicate it is secondary info
        maxWidth: '600px', // Prevents the text from stretching too wide
        margin: '0 auto 40px auto' // Centers the text block and adds 40px space below
      }}>
        Explore a collection of curated recipes and track your progress
        in learning Spanish—all in one place.
      </p>

      {/* A Container for our Call-to-Action buttons */}
      <div style={{
        display: 'flex', // Sits buttons side-by-side
        gap: '20px', // Adds space between the buttons
        justifyContent: 'center' // Centers the button group
      }}>
        {/* <Link> is the Next.js version of a "Smart Link" */}
        {/* href="/recipes" tells the app which folder/route to go to */}
        <Link href="/recipes" style={{
          backgroundColor: '#ff4b2b', // Brand orange color
          color: 'white', // White text for readability
          padding: '15px 30px', // Makes the link look like a large, clickable button
          borderRadius: '30px', // Rounds the corners completely (pill shape)
          textDecoration: 'none', // Removes the default underline
          fontWeight: 'bold', // Makes the button text stand out
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)' // Adds a subtle "lift" effect
        }}>
          View Recipes
        </Link>

        <Link href="/spanish" style={{
          backgroundColor: '#fff', // White background
          color: '#ff4b2b', // Orange text to match the brand
          padding: '15px 30px',
          borderRadius: '30px',
          border: '2px solid #ff4b2b', // Adds an orange outline
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Spanish Lessons
        </Link>
      </div>
    </main>
  );
}