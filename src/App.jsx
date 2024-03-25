
import './App.css'
import MiApi from './componennts/MiApi';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div className='contenedor'>
            <MiApi />
            <footer className="bg-light text-center text-lg-start">
                <div className="text-center p-3" >
                    © 2024 El Reporte Diario
                </div>
            </footer>
        </div>
    )
}

export default App
