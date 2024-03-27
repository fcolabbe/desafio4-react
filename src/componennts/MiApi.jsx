import React, { useEffect, useState } from 'react'
import Buscador from './Buscador';
import Noticias from './Noticias';

function MiApi() {

  const [noticias, setNoticias] = useState([])
  const [noticiasFiltradas, setNoticiasFiltradas] = useState([])


  useEffect(() => {
    fetchNoticias()
  }, [])

  //const url = "https://pisapapeles.net/wp-json/wp/v2/posts?per_page=12"
  //const url = "https://chocale.cl/wp-json/wp/v2/posts?per_page=12" 
  const url = "https://reportediario.cl/wp-json/wp/v2/posts?per_page=12"

  const fetchNoticias = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('No se puedo conectar con la API')
      }
      const data = await response.json()
      setNoticias(data)
      setNoticiasFiltradas(data)
    } catch (error) {
      console.error('Error al obtener noticias:', error);
    }
  }
  const transformarFecha = (fecha) => {
    const fechaHora = new Date(fecha);
    const diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const diaSemana = diasSemana[fechaHora.getDay()];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const mes = meses[fechaHora.getMonth()];
    const dia = fechaHora.getDate();
    const horas = fechaHora.getHours();
    let minutos = fechaHora.getMinutes();
    if (minutos < 10) {
      minutos = '0' + minutos
    } else {
      minutos
    }
    const fechaHoraFormateada = `${diaSemana} ${dia} de ${mes} de ${fechaHora.getFullYear()} - ${horas}:${minutos}`;
    // Output: "jueves 21 de marzo de 2024 - 11:41"
    return fechaHoraFormateada
  }
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#"><img src="./logo.webp" alt="" /></a>
          <Buscador noticias={noticias} setNoticiasFiltradas={setNoticiasFiltradas} />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Noticias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Noticias noticiasFiltradas={noticiasFiltradas} transformarFecha={transformarFecha} setNoticiasFiltradas={setNoticiasFiltradas} />
    </>
  )
}

export default MiApi