import { recipes } from '../data/recipes';

export default function RecipesPage() {
    return (
        <main style={{ padding: '20px', fontFamily: 'sans-serif', width: '100%', margin: '0 auto' }}>
            <h1 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>🍳 BOOM IT WORKS</h1>
            <div style={{
                display: 'grid',
                gap: '20px',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                width: '100%',
                maxWidth: '1200px', // Allow it to be wider on desktop
                margin: '0 auto',   // Center the grid
                boxSizing: 'border-box'
            }}>
                {recipes.map((recipe) => (
                    <div key={recipe.id} style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '20px', backgroundColor: '#f9f9f9' }}>
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                marginBottom: '15px'
                            }}
                        />
                        <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>{recipe.title}</h2>
                        <div style={{ display: 'flex', gap: '15px', fontSize: '14px', color: '#666' }}>
                            <span>⏱ {recipe.prepTime} mins</span>
                            <span>📊 {recipe.difficulty}</span>
                            <span>🔥 {recipe.calories} kcal</span>
                        </div>
                        <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#333' }}>Ingredients:</p>
                        <ul style={{ fontSize: '14px', color: '#444' }}>
                            {recipe.ingredients.map((ing, index) => (
                                <li key={index}>{ing.amount} {ing.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </main>
    );
}