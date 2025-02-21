export type Metadata = {
  title: string;
  description: string;
};
export type Transaction = {
  id?: number;
  created_at: Date
  name: string;
  category: string;
  avatar?: string;
  amount: number;
  recurring?: Boolean;
};
export interface Budgets {
  id?: number;
  created_at: Date
  category: string;
  theme: string;
  maximum: number;
}
export interface Pots {
  id: number;
  created_at: Date
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
