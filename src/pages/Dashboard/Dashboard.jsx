import "./Dashboard.css";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Calendario from "../../components/Calendario";

function Dashboard(){

    const [pacientes, setPacientes] = useState(0);
    const [vacinasAplicada, setVacinasAplicada] = useState(0);
    const [vacinasAtrasadas, setVacinasAtrasadas] = useState(0);
    const [eventos, setEventos] = useState([]);

     const idPacienteExemplo = 1;

     function formatarEventos(vacinas) {
    return vacinas.map(vacina => ({
        title: vacina.nome || "Vacina",
        start: new Date(vacina.dataAplicacao),
        end: new Date(vacina.dataAplicacao),
    }));
}

    useEffect(() => {
        // busca total de pacientes
        api.get('/paciente/consultar')
            .then(response => {
                setPacientes(response.data.length);
            });

    }, []);

    useEffect(() =>{
        api.get('/vacinas/consultar')
            .then(response => {
                setVacinasAplicada(response.data.length)
            });
    },[])

      useEffect(() =>{
        api.get(`/estatisticas/imunizacoes_atrasadas/paciente/${idPacienteExemplo}`)
            .then(response => {
                setVacinasAtrasadas(response.data.length)
            });
    },[])

    useEffect(() => {
  api.get("/vacinas")
    .then(res => {
      setEventos(formatarEventos(res.data));
    });
}, []);



    return(



        <div className="dashboard-container">
           <div>
            <h1> Dashboard - Carteira de Vacinas</h1>
            </div>
        <div className="cards-grid">
                <Card icone="👤" titulo="Pacientes cadastrados" valor={pacientes} />
                <Card icone="💉" titulo="Vacinas disponíveis" valor={vacinasAplicada} />
                <Card icone="⚠️" titulo="Imunizações registradas" valor={vacinasAtrasadas} />
                <Calendario eventos={eventos} />
            </div>
        </div>
        
    )
}
export default Dashboard;