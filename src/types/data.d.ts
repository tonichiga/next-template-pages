import { ICrmUser } from "./crm-user.type";

interface ITableExampleRowData {
  id: string;
  time: Date;
  user: TUser;
  createdAt: Date;
}

type TBrand = {
  name: string;
  id: string;
};

type TUser = {
  name: string;
  messanger?: string;
  payment?: string;
  card?: string;
  color?: string;
  phone?: string;
  country?: string;
  online: string;
  brand?: TBrand[];
};

interface ITableExampleConvertedRowData {
  id: string;
  time: Date;
  user: TUser;
  createdAt: Date;
  phone: string;
  name: string;
  email: string;
  //JUST FOR TEST
  active: boolean;
  assign: string;
  agentsCount: string;
}

type TMember = {
  id: string;
  name: string;
  leadsCount: string;
  active: boolean;
  department: string;
  lastLogin: string;
  online: boolean;
};

export type { TUser, ITableExampleConvertedRowData, TBrand };
