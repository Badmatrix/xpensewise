export type Metadata = {
  title: string;
  description: string;
};
export type Transaction = {
  id?: number;
  created_at: string;
  name: string;
  category: string;
  avatar?: string;
  amount: number;
  recurring?: string;
};
export interface Budgets {
  id?: number;
  created_at?: string;
  category: string;
  theme: string;
  maximum: number;
}
export interface Pots {
  id?: number;
  created_at?: string;
  target: number;
  theme: string;
  name: string;
  total: number;
}
export interface TotalProps {
  amount?: number;
  maximum?: number;
  total?: number;
}
