import './App.css';
import Card from './Card';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Meditation Resources</h1>
      </header>
      <main>
        <div class="container">
        <Card
          title="Meditation Timer"
          description="Website I made in Codepath 101"
          imageUrl="https://pristine-spaceblue-programmer-210.vscodeedu.app/img/headerimg.png"
          url = "https://pristine-spaceblue-programmer-210.vscodeedu.app/"
        />
        <Card
          title="5 min Guided Meditation"
          description="A video to help you get started"
          imageUrl="https://img.youtube.com/vi/WUASVHlfXeI/maxresdefault.jpg"
          url = "https://www.youtu.be/WUASVHlfXeI"
        />
        
        <Card
          title="How To Meditate"
          description="A simple step-by-step guide, made by me"
          imageUrl="https://i.imgur.com/NAS4buo.jpeg"
          url = "https://imgur.com/a/CYQvZOE"
        />

        <Card
          title="Breath Meditation"
          description="A detailed explanation of breath meditation, by my favorite monk"
          imageUrl="https://img.youtube.com/vi/fdSalC1yZFY/maxresdefault.jpg"
          url = "https://youtu.be/fdSalC1yZFY"
        />
                
        <Card
          title="One Hour Guided Meditation"
          description="A meditation challenge for advanced practitioners."
          imageUrl="https://img.youtube.com/vi/bg2OkGPLC1o/maxresdefault.jpg"
          url = "https://youtu.be/bg2OkGPLC1o"
        />

        <Card
          title="Medical Benefits"
          description="An article about the medical benefits of meditation."
          imageUrl="https://my.clevelandclinic.org/-/scassets/images/onbrand/guidelines/cc-alt-300x251.jpg"
          url = "https://my.clevelandclinic.org/health/articles/17906-meditation"
        />

        <Card
          title="Basics of Buddhist Philosophy"
          description="Deep but simple talk about the nature of suffering according to Buddhism."
          url = "https://youtu.be/7BwkXJhUgtg"
          imageUrl="https://img.youtube.com/vi/7BwkXJhUgtg/maxresdefault.jpg"
        />

        <Card
          title="Types of Meditation"
          description="Article by Medical News Today"
          url = "https://www.medicalnewstoday.com/articles/320392#types"
          imageUrl="https://imgs.search.brave.com/9JDG_BaxnBSqqTJhwW4Ch--z4nNwQoDw1Z74rUwU2Yo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2xpcGFydG1heC5j/b20vcG5nL21pZGRs/ZS8yODUtMjg1NDM2/MV9tZWRpY2FsLW5l/d3MtdG9kYXktbG9n/by5wbmc"
        />

        <Card
          title="The Happiness Trap (Book)"
          description="Self-help book for beginners about ACT (Acceptance and Commitment Therapy)"
          url = "https://www.amazon.com/Happiness-Trap-Struggling-Start-Living/dp/1590305841"
          imageUrl="https://m.media-amazon.com/images/I/41ti8k2+OOL._SY445_SX342_.jpg"
        />

        <Card
          title="True Meditation (Book)"
          description="A book about meditation for intermidiate practitioners."
          url = "https://www.amazon.com/True-Meditation-Discover-Freedom-Awareness/dp/1591794676"
          imageUrl="https://m.media-amazon.com/images/I/4104lYIHwrL._SY445_SX342_.jpg"
        />
        </div>
      </main>
    </div>
  )
}

export default App