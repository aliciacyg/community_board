import './App.css';
import Card from './Card';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Meditation Resources</h1>
      </header>
      <main>
        <Card
          title="Meditation for Beginners"
          description="A comprehensive guide to getting started with meditation."
          imageUrl="https://example.com/image1.jpg"
        />
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 Community Board</p>
      </footer>
      
    </div>
  )
}

export default App