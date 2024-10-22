import { useState } from 'react'
import './App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <main>
    <div className="containertitle">
        <h1 className="titlegamer">GAMER HUB</h1><br/>
        <p className="subtitle">Conectando você ao universo dos games! Gamer Hub é um site de notícias focado no universo dos games, trazendo atualizações sobre lançamentos, análises e eventos da indústria. Com conteúdo relevante e envolvente, atende a gamers de todos os níveis. Fique por dentro das últimas novidades e tendências em um só lugar!</p>
    </div>
   </main>
      </div>
        
       
    </>
  )
}

export default Home
