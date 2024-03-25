import React, { useState } from 'react'

function Buscador(props) {
    const [busqueda, setBusqueda] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!busqueda) {
            props.setNoticiasFiltradas(props.noticias);
            return;
        }
        const noticiaFiltrada = props.noticias.filter((noticia)=>
            noticia.title.rendered.toLowerCase().includes(busqueda) ||
            noticia.excerpt.rendered.toLowerCase().includes(busqueda)
        );
        props.setNoticiasFiltradas(noticiaFiltrada)
    }

    return (
        <div className='buscador' onSubmit={handleSubmit} >
            <form action="">
                <input type="text"
                    placeholder='Buscar noticia'
                    className='buscador-input'
                    onChange={(e) => { setBusqueda(e.target.value) }} />
                <button type='submit' className='buscador-boton'>Buscar</button>
            </form>
        </div>
    )
}

export default Buscador