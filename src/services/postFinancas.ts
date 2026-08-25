import api from './api';
import type { FinanceEntry } from '../types/finance';

export const postFinancas = async (entry: FinanceEntry) => {
  const response = await api.post('/money/financas', entry);
  return response.data;
};