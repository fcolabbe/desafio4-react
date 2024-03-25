import React, { useState } from 'react'

function Noticias(props) {
    const [orden, setOrden] = useState(false)
    const handleOrden = () => {
        if (orden === false) {
            ordenarPorFechaASC()
            setOrden(true)
        } else {
            ordenarPorFechaDSC()
            setOrden(false)
        }
    }
    // Función para ordenar los artículos por fecha de publicación
    const ordenarPorFechaASC = () => {
        const noticiasOrdenadasASC = [...props.noticiasFiltradas].sort((a, b) => {
            return new Date(a.date) - new Date(b.date); // Ordena de más nuevo a más antiguo
        });
        props.setNoticiasFiltradas(noticiasOrdenadasASC);
    };
    const ordenarPorFechaDSC = () => {
        const noticiasOrdenadasDSC = [...props.noticiasFiltradas].sort((a, b) => {
            return new Date(b.date) - new Date(a.date); // Ordena de más nuevo a más antiguo
        });
        props.setNoticiasFiltradas(noticiasOrdenadasDSC);
    };

    return (
        <>
            <div class="col text-center">
                <button type="button" className="btn btn-link" onClick={handleOrden}>{orden ? '>> VER Mas nuevos primero <<' : '>> VER Mas antiguos primero <<'}</button>
            </div>
            <div className='carta'>
                <div className="row">
                    {props.noticiasFiltradas.map(noticia => (

                        <div className="card col-md-4 col-lg-3 mb-3" key={noticia.id}>
                            <a href={noticia.link}><img src={noticia.yoast_head_json.og_image[0].url} className="card-img-top" alt="..."></img></a>
                            <div className="card-body">
                                <h5 className="card-title"><a href={noticia.link} dangerouslySetInnerHTML={{ __html: noticia.title.rendered }}></a></h5>
                                <p className="card-text" dangerouslySetInnerHTML={{ __html: noticia.excerpt.rendered }} />
                                <p className="card-text"><small className="text-muted">{props.transformarFecha(noticia.date)}</small></p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Noticias