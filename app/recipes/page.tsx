// "import" brings in the data array from your external data file
// It follows the path: up one level (..) to 'data', then 'recipes.ts'
import { recipes } from '../data/recipes';

// "export default" makes this function the primary thing this file sends to the app
// "function RecipesPage()" is the container for the entire page's logic and UI
export default function RecipesPage() {

    // "return" starts the block of HTML-like code (JSX) that will appear in the browser
    return (
        // <main> is a semantic tag telling the browser: "This is the primary content"
        <main style={{
            padding: '20px', // Adds 20px of breathing room around the edges
            fontFamily: 'sans-serif', // Sets the clean, modern font style
            width: '100%', // Makes the container fill the screen width
            margin: '0 auto' // Centers the content if the screen is wider than the content
        }}>
            {/* <h1> is the main heading. 🍳 is a decorative emoji */}
            <h1 style={{
                borderBottom: '2px solid #eee', // Draws a light line under the title
                paddingBottom: '10px' // Space between the text and the line
            }}>🍳 My Kitchen</h1>

            {/* This <div> is our Grid Container. It controls how the cards are positioned. */}
            <div style={{
                display: 'grid', // Switches from standard layout to "Grid" mode
                gap: '20px', // Sets a consistent 20px gap between every card
                // repeat(auto-fit...): This is the responsiveness "magic". 
                // It creates as many columns as fit, but ensures each is at least 300px wide.
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                width: '100%', // Allows the grid to use all available space
                maxWidth: '1200px', // Caps the width so cards don't stretch too thin on wide monitors
                margin: '0 auto', // Centers the grid within the <main> container
                boxSizing: 'border-box' // Ensures padding is included inside the width calculation
            }}>
                {/* {recipes.map...} is a "Loop". It looks at every item in your data list. */}
                {/* For every recipe it finds, it runs the code inside the parentheses. */}
                {recipes.map((recipe) => (
                    // "key" is a unique ID for React to track this specific card
                    <div key={recipe.id} style={{
                        border: '1px solid #ddd', // Adds a light gray outline
                        borderRadius: '12px', // Rounds the corners of the card
                        padding: '20px', // Space inside the card around the content
                        backgroundColor: '#f9f9f9' // Sets a very light gray background
                    }}>
                        {/* The Recipe Image */}
                        <img
                            src={recipe.image} // Pulls the image path from the data
                            alt={recipe.title} // Used by screen readers for accessibility
                            style={{
                                width: '100%', // Makes image fill the card width
                                height: '200px', // Fixes the height so all cards look uniform
                                objectFit: 'cover', // Crops the image nicely instead of squishing it
                                borderRadius: '8px', // Rounds the image corners
                                marginBottom: '15px' // Space below the image
                            }}
                        />
                        {/* The Recipe Title */}
                        <h2 style={{
                            margin: '0 0 10px 0', // Removes top margin, adds space below
                            color: '#333' // Dark gray color for readability
                        }}>{recipe.title}</h2>

                        {/* Meta Data Row: Time, Difficulty, Calories */}
                        <div style={{
                            display: 'flex', // Sits the three spans side-by-side
                            gap: '15px', // Space between the stats
                            fontSize: '14px', // Slightly smaller text for secondary info
                            color: '#666' // Lighter gray for less visual weight
                        }}>
                            <span>⏱ {recipe.prepTime} mins</span>
                            <span>📊 {recipe.difficulty}</span>
                            <span>🔥 {recipe.calories} kcal</span>
                        </div>

                        {/* Ingredients Section */}
                        <p style={{
                            marginTop: '10px', // Space above the "Ingredients" label
                            fontWeight: 'bold', // Makes the label stand out
                            color: '#333'
                        }}>Ingredients:</p>

                        {/* <ul> is the bulleted list. margin: 0 removes default spacing. */}
                        <ul style={{ fontSize: '14px', color: '#444', paddingLeft: '20px' }}>
                            {/* We loop again! This time through the ingredients of this one recipe. */}
                            {recipe.ingredients.map((ing, index) => (
                                // "ing.amount" and "ing.name" come from the nested list in your data
                                <li key={index}>{ing.amount} {ing.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </main>
    );
}