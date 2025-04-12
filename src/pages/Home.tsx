import '../App.css'
import diagnosticoImg from '../images/Diagnostico.png'
import alianzasImg from '../images/Alianzas.png'

const Home = () => {
  return (
    <>
     <h1>CONSULTAS</h1>
            
            <div className="cards-container">
                <div className="card">
                    <img src={diagnosticoImg} alt="Diagnóstico"/>
                    <div className="card-content">
                        <h2>DIAGNÓSTICO INICIAL Y DEFINICIÓN DE OBJETIVOS</h2>
                        <p>60-120 MIN</p>
                        <button className="more-options">
                            <span className="material-icons">more_vert</span>
                        </button>
                    </div>
                </div>

                <div className="card">
                    <img src={alianzasImg} alt="Alianzas"/>
                    <div className="card-content">
                        <h2>ALIANZAS ESTRATÉGICAS PARA IMPACTO SOCIAL</h2>
                        <p>60-120 MIN</p>
                        <button className="more-options">
                            <span className="material-icons">more_vert</span>
                        </button>
                    </div>
                </div>
            </div>

    </>
  )
}

export default Home