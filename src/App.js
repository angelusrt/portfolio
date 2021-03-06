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
            Prazer, meu nome ?? Angelus Trindade e eu 
            tenho certeza que vou te surpreender! 
          </text>
          <text className="button">
            Vamos l???
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
            Com 4 anos de experi??ncia 
            em programa????o e 
            design, eu sou aquele 
            vai levar a sua empresa 
            para o pr??ximo n??vel!
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
              Sites Din??micos
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
              Curso t??cnico
            </text>
            <text className="button--subheader">
              Programa????o de jogos digitais
            </text>
          </div>

          <div className="button">
            <text className="button--header">
              Institui????o
            </text>
            <text className="button--subheader">
              ETE C??cero Dias
            </text>
          </div>

          <div className="button">
            <text className="button--header">
              Tempo de dura????o
            </text>
            <text className="button--subheader">
              Janeiro de 2018 at?? dezembro de 2020
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
              Portugu??s
            </text>
          </div>

          <div className="button">
            <text className="button--header">
              N??vel avan??ado
            </text>
            <text className="button--subheader">
              Ingl??s
            </text>
          </div>

          <div className="button">
            <text className="button--header">
              N??vel b??sico
            </text>
            <text className="button--subheader">
              Alem??o
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
