export interface MenuType {
  id: number;
  title: string;
  page : string;
  father: number;
  divider: boolean;
  type: string;
  quantity?: number;
  icon?: string;
}


