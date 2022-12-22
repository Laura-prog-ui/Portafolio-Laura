import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <img className='Logo' src="../Logo.png" alt="" />
        <nav className='menu'>
        <ul>
          <li><a>Inicio</a></li>
          <li><a>Servicio</a></li>
          <li><a>Portafolio</a></li>
          <li><a>Blog</a></li>
          <li><a>Contacto</a></li>
          <button class="boton">Acceso</button>
        </ul>
        </nav>
      </header>
      

      <section className='titulo'>
        <p>Hola</p>
        <h1>Soy Laura Duarte</h1>
        <p>Desarrolladora Front-end</p>
      </section>

      <section className='logros'>
        <img src="../HTML.png" width={100} alt="" />
        <img src="../CSS.png" width={100} alt="" />
        <img src="../JS.png" width={100} alt="" />
        <img src="../React.png" width={100} alt="" />
      </section>
      <section className='text1'>
        <h1>Sobre mí</h1>
        <h2>Desarrolladora Front-end</h2>
        <p>Soy Laura Duarte Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria. Ha sobrevivido no solo cinco siglos, sino también al salto a la electrónica, pero también al salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían</p>
        <img src="../Mujer.jpg" width={400} alt="" />
        <button class="boton2">Contactame</button>
        <button class="boton2">Descargar currículum</button>
      </section>

      <section className='titulo2'>
        <h1>Que estoy haciendo</h1>
        <p>Yo amo lo que hago. Me enorgullezco mucho de lo que hago.</p>
        <h2 class="linea">_____________________</h2>
      </section>

      <section className='titulo2'>
        <h1>Mi Portafolio</h1>
        <p>Desarrolladora Front-end</p>
        <h2 class="linea">_____________________</h2>
        <button class="boton2">TODOS</button>
        <button class="boton2">Diseño Web</button>
        <button class="boton2">Desarrollo</button>
        <button class="boton2">Marketing</button>
      </section>

      <section className='titulo2'>
        <h1>Nuestro Blog</h1>
        <p>Desarrolladora Front-end</p>
        <h2 class="linea">_____________________</h2>
        
      </section>

      <section className='text'>
      <h1>Datos de contacto</h1>
      <section className='datos'>
        <img src="../Correo.png" alt="" />
        <p>duarterivera@gmail.com</p>
        <img src="../Maps.png" alt="" />
        <p>Bogotá, Colombia</p>
        <img src="../Telefono.png" alt="" />
        <p>+57 325889556</p>
      </section>
      </section>

      <footer>
        <img className='Logo2' src="../Logo.png" alt="" />
        <p>Hecho por Laura Duarte</p>
        <img src="../Facebook.png" alt="" />
        <img src="../Twitter.png" alt="" />
        <img src="../Pinterest.png" alt="" />
        <img src="../Linkedin.png" alt="" />
      </footer>

    </div>
  )
}

export default App 
