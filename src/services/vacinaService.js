import axios from "axios";

const api = axios.create({
  baseURL: "/api"
});

const normalizarVacina = (vacina) => ({
  id: vacina.id ?? vacina.idVacina,
  nome: vacina.nome ?? vacina.nomeVacina ?? "",
  fabricante: vacina.fabricante ?? "Nao informado",
  publicoAlvo: vacina.publicoAlvo ?? "",
  doses: Array.isArray(vacina.doses) ? vacina.doses : []
});

export const listarVacinas = async () => {
  const response = await api.get("/vacina/consultar");
  return Array.isArray(response.data)
    ? response.data.map(normalizarVacina)
    : [];
};

export const buscarPorFaixaEtaria = async (faixa) => {
  const response = await api.get(
    `/vacina/consultar/faixa_etaria/${encodeURIComponent(faixa)}`
  );

  return Array.isArray(response.data)
    ? response.data.map(normalizarVacina)
    : [];
};
