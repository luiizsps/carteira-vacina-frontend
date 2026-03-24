import "./Dashboard.css";
import Card from "../../components/Card";

function Dashboard(){
    return(
        <div className="dashboard-container">
           <div>
            <h1> Dashboard - Carteira de Vacinas</h1>
            </div>
        <div className="cards-grid">
                <Card icone="👤" titulo="Pacientes cadastrados" valor={0} />
                <Card icone="💉" titulo="Vacinas aplicadas" valor={0} />
                <Card icone="⚠️" titulo="Vacinas atrasadas" valor={0} />
                <Card icone="⏳" titulo="Próximas vacinas" valor={0} />
            </div>
        </div>
        
    )
}
export default Dashboard;