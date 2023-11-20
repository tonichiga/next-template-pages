import { Permissions } from "@/entities/permissons.entity";

type TLead = {
  id: number;
  fullName: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  state: string;
  online: boolean;
  phone: string;
  messenger: string;
  balance: string; // or object?
  credit: string; // or object?
  email: string;
  color: string;
  country: string; //or id code???
  brand: string; // or id identifier???
  createdAt: string; // new Date
  leadsCount?: number; //or array of leads ids???
  active?: boolean;
  agentsCount?: number; // or array of agents ids???
  department?: string; // or id identifier???
  lastLogin?: string; // new Date
  assign?: string; // or id identifier???
  card?: string; // or id identifier???
  localTime?: string; // new Date
};

type TTemplate = {
  id: number;
  name: string;
  permissions: string[];
};

type Team = {
  id: number;
  name: string;
  agents: User[];
  active: boolean;
  createdAt: string;
  agentsCount: number;
  assign: string;
};

type TBrand = {
  id: number;
  name: string;
  createdAt: string;
};

type TDropdownData = {
  id: number;
  value: string;
};

type TRole = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

type TLoading = "idle" | "pending" | "succeeded" | "failed";

interface ITableMeta {
  hasNextPage: boolean;
  maximumPages: number;
}

type TPermissionCategories = {
  [key: string]: string[];
};

type THumanifiedPermissionsNames = {
  [key: string]: string;
};

export type {
  TLead,
  TTemplate,
  Permission,
  Team,
  TBrand,
  TDropdownData,
  TRole,
  TLoading,
  ITableMeta,
  TPermissionCategories,
  THumanifiedPermissionsNames,
};
