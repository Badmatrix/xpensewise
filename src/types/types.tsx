export type Metadata = {
  title: string;
  description: string;
};
export type Transaction = {
  id: number;
  budgetID?: number;
  created_at: string;
  name: string;
  avatar?: string;
  category: string;
  amount: number;
};
export interface Budgets {
  id: number;
  category: string;
  theme: string;
  maximum: number;
  created_at?: string;
}
export interface Pots {
  id: number;
  name: string;
  target: number;
  total: number;
  theme: string;
}
export interface TotalProps{
  amount?:number
  maximum?:number
  total?:number
}