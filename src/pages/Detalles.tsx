
import { MoreVertical } from 'lucide-react';
import '../css/Detalles.css'; 
import fileIcon from "../images/file.png"
import homeIcon from "../images/Houseicon.png"
const Detalles = () => {
    return (
        <div className="detalles-container">
            <div className="breadcrumb">
                <img src={homeIcon} alt="Icon" className='home-icon' />
                <span className="breadcrumb-separator">&gt;</span>
                <span className="breadcrumb-current">Diagnóstico Inicial y Definición de Objetivos</span>
            </div>
            <div className="main-content-details">
                <div className="header-section">
                    <div className="header-icon">
                        <img src={fileIcon} alt="icon"  className='icon-file'/>
                        
                    </div>
                    <h1 className="header-title">Asesoría N°1</h1>
                    <div className="header-details">
                        Ricardo Millian - 13 Mayo 2025
                    </div>
                    <div className="header-menu">
                    <button className="more-options-button">
                    <MoreVertical size={20} />
                  </button>
                    </div>
                </div>
                <div className="body-section">
                    <p className="body-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="document-preview">
                        <div className="document-placeholder">
                            Nombre del documento.docx
                        </div>
                    </div>
                    <div className="comments-section">
                        <h2 className="comments-title">Comentarios:</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detalles;
