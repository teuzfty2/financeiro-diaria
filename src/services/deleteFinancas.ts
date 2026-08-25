import api from "./api";

export const deleteFinancas = async (id: string) => {

  // Geralmente o ID é enviado na URL para deleção
  const response = await api.delete(`/money/financas/${id}`);
  return response.data;
};
