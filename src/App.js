import React, {useState, useEffect} from 'react'
import './App.css'

function App() {
  const[offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.scrollY)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <div className="App">
      <section className="Home">
        <div 
          className="background"
          style={{
            transform: `translateY(${offsetY * 0.5}px)`
          }}
        >
          <div className="glossy-window"/>
          <div className="navbar">
            <div className="navbar--circle"/>
            <div className="navbar--circle"/>
            <div className="navbar--circle"/>
            <div className="navbar--circle"/>
          </div>
        </div>

        <div 
          className="middleground"
          style={{
            transform: `translateY(${offsetY * 0.4}px)`
          }}
        >
          <div className="me"/>
        </div>

        <div 
          className="foreground"
          style={{
            transform: `translateY(${offsetY * 0.3}px)`
          }}
        >
          <div className="social-medias">
            <div className="social-medias--circle"/>
            <div className="social-medias--circle"/>
            <div className="social-medias--circle"/>
          </div>
          <text className="header">
            Angelus
          </text>
          <text className="subheader">
            Programador e design.
          </text>
        </div>
      </section>
      <section className="Intro">
        <div 
          className="background"
          style={{
            transform: `translateY(${offsetY * 0.5}px)`
          }}
        >
          <div className="glossy-button"/>
        </div>

        <div 
          className="middleground"
          style={{
            transform: `translateY(${offsetY * 0.4}px)`
          }}
        >
          <div className="me"/>
        </div>

        <div 
          className="foreground"
          style={{
            transform: `translateY(${offsetY * 0.3}px)`
          }}
        >
          <text className="header">
            Boa tarde!
          </text>
          <text className="subheader">
            Prazer, meu nome é Angelus Trindade e eu 
            tenho certeza que vou te surpreender! 
          </text>
          <text className="button">
            Vamos lá?
          </text>
        </div>
      </section>
      <section className="Presentation">
        <div 
          className="background"
          style={{
            transform: `translateY(${offsetY * 0.5}px)`
          }}
        >
          <div className="mountain"/>
        </div>

        <div 
          className="middleground"
          style={{
            transform: `translateY(${offsetY * 0.4}px)`
          }}
        >
          <div className="me"/>
        </div>

        <div 
          className="foreground"
          style={{
            transform: `translateY(${offsetY * 0.3}px)`
          }}
        >
          <text className="header">
            QUem soU eU?
          </text>
          <text className="subheader">
            Com 4 anos de experiência 
            em programação e 
            design, eu sou aquele 
            vai levar a sua empresa 
            para o próximo nível!
          </text>
        </div>
      </section>
      <section className="Skills">
        <div 
          className="background"
          style={{
            transform: `translateY(${offsetY * 0.5}px)`
          }}
        >
          <div className="frame"/>
        </div>

        <div 
          className="middleground"
          style={{
            transform: `translateY(${offsetY * 0.4}px)`
          }}
        >
          <div className="showcase"/>
        </div>

        <div 
          className="foreground"
          style={{
            transform: `translateY(${offsetY * 0.3}px)`
          }}
        >
          <text className="header">
            eU posso te oferecer
          </text>

          <div className="button">
            <text className="button--header">
              React.js
            </text>
            <text className="button--subheader">
              Sites Dinâmicos
            </text>
          </div>

          <div className="button">
            <text className="button--header">
              React Native e Expo
            </text>
            <text className="button--subheader">
              Apps responsivos
            </text>
          </div>

          <div className="button">
            <text className="button--header">
              Figma e Affinity Designer
            </text>
            <text className="button--subheader">
              Layouts UI/UX engajadores
            </text>
          </div>
          
          <div className="button">
            <text className="button--header">
              Node.js, Express.js e MongoDB.js
            </text>
            <text className="button--subheader">
              Servidores e bancos de dados
            </text>
          </div>
        </div>
      </section>
      <section className="Resume">
        {/* <div 
          className="background"
          style={{
            transform: `translateY(${offsetY * 0.5}px)`
          }}
        >
          <div className="frame"/>
        </div> */}

        <div 
          className="middleground"
          style={{
            transform: `translateY(${offsetY * 0.4}px)`
          }}
        >
          <div className="background"/>
        </div>

        <div 
          className="foreground"
          style={{
            transform: `translateY(${offsetY * 0.3}px)`
          }}
        >
          <text className="header">
            formacao cUrricUlar
          </text>
          
          <div className="button">
            <text className="button--header">
              Curso técnico
            </text>
            <text className="button--subheader">
              Programação de jogos digitais
            </text>
          </div>

          <div className="button">
            <text className="button--header">
              Instituição
            </text>
            <text className="button--subheader">
              ETE Cícero Dias
            </text>
          </div>

          <div className="button">
            <text className="button--header">
              Tempo de duração
            </text>
            <text className="button--subheader">
              Janeiro de 2018 até dezembro de 2020
            </text>
          </div>
        </div>
      </section>
      <section className="Languages">
        <div 
          className="background"
          style={{
            transform: `translateY(${offsetY * 0.5}px)`
          }}
        >
          <div className="glossy-window"/>
        </div>

        <div 
          className="middleground"
          style={{
            transform: `translateY(${offsetY * 0.4}px)`
          }}
        >
          <div className="showcase"/>
        </div>

        <div 
          className="foreground"
          style={{
            transform: `translateY(${offsetY * 0.3}px)`
          }}
        >
          <text className="header">
            idiomas
          </text>
          
          <div className="button">
            <text className="button--header">
              Nativo
            </text>
            <text className="button--subheader">
              Português
            </text>
          </div>

          <div className="button">
            <text className="button--header">
              Nível avançado
            </text>
            <text className="button--subheader">
              Inglês
            </text>
          </div>

          <div className="button">
            <text className="button--header">
              Nível básico
            </text>
            <text className="button--subheader">
              Alemão
            </text>
          </div>
        </div>
      </section>
      <section className="Contact">
        <div 
          className="background"
          style={{
            transform: `translateY(${offsetY * 0.5}px)`
          }}
        >
          <div className="line1"/>
          <div className="line2"/>
        </div>

        {/* <div 
          className="middleground"
          style={{
            transform: `translateY(${offsetY * 0.4}px)`
          }}
        >
          <div className="showcase"/>
        </div> */}

        <div 
          className="foreground"
          style={{
            transform: `translateY(${offsetY * 0.3}px)`
          }}
        >
          <text className="header">
            Contato
          </text>
          
          <div className="button">
            <text className="button--header">
              Telefone
            </text>
            <text className="button--subheader">
              (81) 99564-0616
            </text>
          </div>

          <div className="button">
            <text className="button--header">
              Email
            </text>
            <text className="button--subheader">
              angelusrt@gmail
            </text>
          </div>
        </div>
      </section>
      <div className="finale">
        <div/>
      </div>
    </div>
  )
}

export default App
