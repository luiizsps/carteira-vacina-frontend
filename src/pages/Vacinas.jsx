import { useEffect, useState } from "react";
import { listarVacinas, buscarPorFaixaEtaria } from "../services/vacinaService";

function Vacinas() {
  const [vacinas, setVacinas] = useState([]);
  const [faixa, setFaixa] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  const carregar = async () => {
    try {
      setCarregando(true);
      setErro("");
      const dados = await listarVacinas();
      setVacinas(dados);
    } catch (error) {
      console.error(error);
      setErro("Erro ao carregar vacinas. Verifique se o backend está rodando.");
    } finally {
      setCarregando(false);
    }
  };

  const filtrar = async () => {
    try {
      setCarregando(true);
      setErro("");

      if (!faixa.trim()) {
        const dados = await listarVacinas();
        setVacinas(dados);
      } else {
        const dados = await buscarPorFaixaEtaria(faixa);
        setVacinas(dados);
      }
    } catch (error) {
      console.error(error);
      setErro("Erro ao filtrar vacinas.");
    } finally {
      setCarregando(false);
    }
  };

  const limpar = async () => {
    setFaixa("");
    await carregar();
  };

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div style={{ padding: "24px", fontFamily: "Arial" }}>
      <h1>Vacinas</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Digite a faixa etária"
          value={faixa}
          onChange={(e) => setFaixa(e.target.value)}
          style={{ padding: "8px", minWidth: "220px" }}
        />
        <button onClick={filtrar}>Filtrar</button>
        <button onClick={limpar}>Limpar</button>
      </div>

      {carregando && <p>Carregando...</p>}
      {erro && <p>{erro}</p>}

      {!carregando && !erro && vacinas.length === 0 && (
        <p>Nenhuma vacina encontrada.</p>
      )}

      {!carregando && !erro && vacinas.length > 0 && (
        <table
          border="1"
          cellPadding="8"
          cellSpacing="0"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Fabricante</th>
              <th>Público-alvo</th>
              <th>Doses</th>
            </tr>
          </thead>
          <tbody>
            {vacinas.map((vacina) => (
              <tr key={vacina.id}>
                <td>{vacina.id}</td>
                <td>{vacina.nome}</td>
                <td>{vacina.fabricante}</td>
                <td>{vacina.publicoAlvo}</td>
                <td>
                  {vacina.doses && vacina.doses.length > 0 ? (
                    <ul style={{ margin: 0, paddingLeft: "18px" }}>
                      {vacina.doses.map((dose) => (
                        <li key={dose.id}>
                          Dose {dose.numeroDose} - {dose.idadeRecomendadaMeses} meses
                        </li>
                      ))}
                    </ul>
                  ) : (
                    "Sem doses cadastradas"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Vacinas;