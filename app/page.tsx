import { recipes } from './data/recipes';

export default function Home() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>🍳 Erkut's Recipe App</h1>
      
      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '20px', backgroundColor: '#f9f9f9' }}>
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