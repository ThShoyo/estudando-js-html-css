// src\assets\components\InfoCurso\index.jsx

import './style.css';

function InfoCurso() {
    const nome = "Programação de Aplicativos";
    const CargaHorária = "90 horas";
    const local = "Senai Dedezeiros";
    const datadeInicio = "04/08/2025";
    const datadeTermino = "22/11/2025";


    return (
        <div className="info-curso">
            <h2>Dados do Curso </h2>
            <p>Nome do Curso: { nome }</p>
            <p>Carga Horária: { CargaHorária } horas</p>
            <p>Local: { local }</p>
            <p>Data de Início: { datadeInicio }</p>
            <p>Data de Término: { datadeTermino }</p>
        </div>
    );
}
export default InfoCurso;

