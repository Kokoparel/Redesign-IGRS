import React from 'react';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>IGRS Redesign</h1>
        <p>Menunggu desain UI/UX, kerangka awal sudah siap.</p>
      </header>
      
      <main className="main-content">
        <section className="placeholder-section">
          <h2>Area Konten Utama</h2>
          <p>Komponen-komponen halaman akan diletakkan di sini.</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} IGRS Redesign Project</p>
      </footer>
    </div>
  );
}

export default App;
