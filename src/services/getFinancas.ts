import api from './api';
import type { FinanceEntry } from '../types/finance';

export const getFinancas = async (): Promise<FinanceEntry[]> => {
  const response = await api.get('/money/financas');
  return response.data;
};