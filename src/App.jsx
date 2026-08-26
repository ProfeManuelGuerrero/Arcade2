import React, { useState } from 'react'

const initialGames = [
  {
    id: 1,
    title: 'Aventuras Pixel',
    description: 'Plataformas y puzzles hechos por Ana.',
    image: 'https://placehold.co/600x400/png?text=Juego+1',
    url: 'https://example.com/juego-ana'
  },
  {
    id: 2,
    title: 'Carrera Cósmica',
    description: 'Juego de carreras creado por Luis.',
    image: 'https://placehold.co/600x400/png?text=Juego+2',
    url: 'https://example.com/juego-luis'
  },
  {
    id: 3,
    title: 'Rompecabezas AR',
    description: 'Rompecabezas interactivo por Sofía.',
    image: 'https://placehold.co/600x400/png?text=Juego+3',
    url: 'https://example.com/juego-sofia'
  }
]

function Card({ game }){
  return (
    <article className="card">
      <img src={game.image} alt={game.title} />
      <div className="card-body">
        <h3 className="card-title">{game.title}</h3>
        <p className="card-desc">{game.description}</p>
        <div className="card-actions">
          <a className="btn" href={game.url} target="_blank" rel="noopener noreferrer">Jugar</a>
          <div className="meta-pill">En línea</div>
        </div>
      </div>
    </article>
  )
}

export default function App(){
  const [games] = useState(initialGames)

  return (
    <div>
      <header className="site-header">
        <h1>Arcade — Juegos de Estudiantes</h1>
        <h2 className="rgb-title" data-text="Especialidad de Programación">Especialidad de Programación</h2>
        <p className="lead">Tarjetas con previsualizaciones y acceso a los juegos online.</p>
      </header>

      <main>
        <section className="cards-grid" aria-label="Galería de juegos">
          {games.map(g => <Card key={g.id} game={g} />)}
        </section>
      </main>
    </div>
  )
}
