export default function Home() {
  return (
    <main style={{ padding: '80px 40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '3rem', color: '#ffffff' }}>Welcome to ErkutCooks</h1>
      <p style={{ fontSize: '1.2rem', color: '#cccccc', marginTop: '20px' }}>
        A personal space for culinary experiments and learning.
      </p>
      <div style={{ marginTop: '40px' }}>
        <a href="/recipes" style={{
          padding: '15px 30px',
          backgroundColor: '#ff4b2b',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '30px',
          fontWeight: 'bold'
        }}>
          View My Recipes
        </a>
      </div>
    </main>
  );
}