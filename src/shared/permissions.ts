export enum PermissionEnum {
  FINANCE_DEPOSITS = "FINANCE_DEPOSITS",
  FINANCE_WITHDRAWALS = "FINANCE_WITHDRAWALS",
  FINANCE_DEPOSIT_MANUAL = "FINANCE_DEPOSIT_MANUAL",
  FINANCE_DEPOSIT_REVERT_FAKE = "FINANCE_DEPOSIT_REVERT_FAKE",
  FINANCE_DEPOSIT_REVERT_REAL = "FINANCE_DEPOSIT_REVERT_REAL",
  FINANCE_DEPOSIT_PROCESS = "FINANCE_DEPOSIT_PROCESS",
  FINANCE_DEPOSIT_OWNER_CHANGE = "FINANCE_DEPOSIT_OWNER_CHANGE",
  FINANCE_WITHDRAWAL_MANUAL = "FINANCE_WITHDRAWAL_MANUAL",
  FINANCE_WITHDRAWAL_REVERT = "FINANCE_WITHDRAWAL_REVERT",
  FINANCE_WITHDRAWAL_PROCESS = "FINANCE_WITHDRAWAL_PROCESS",
  FINANCE_WITHDRAWAL_OWNER_CHANGE = "FINANCE_WITHDRAWAL_OWNER_CHANGE",
  FINANCE_DEPOSIT_WALLET_VISIBILITY = "FINANCE_DEPOSIT_WALLET_VISIBILITY",
  FINANCE_DEPOSIT_MEMO_VISIBILITY = "FINANCE_DEPOSIT_MEMO_VISIBILITY",
  FINANCE_WITHDRAWAL_WALLET_VISIBILITY = "FINANCE_WITHDRAWAL_WALLET_VISIBILITY",
  FINANCE_WITHDRAWAL_MEMO_VISIBILITY = "FINANCE_WITHDRAWAL_MEMO_VISIBILITY",
  FINANCE_KYC = "FINANCE_KYC",
  FINANCE_DOCUMENT_DELETE = "FINANCE_DOCUMENT_DELETE",
  FINANCE_DOCUMENT_PROCESS = "FINANCE_DOCUMENT_PROCESS",
  FINANCE_KYC_QUESTIONS = "FINANCE_KYC_QUESTIONS",
  FINANCE_WALLET_GENERATE = "FINANCE_WALLET_GENERATE",

  TRADING_SYMBOLS = "TRADING_SYMBOLS",
  TRADING_CFD_ORDERS = "TRADING_CFD_ORDERS",
  TRADING_CFD_ORDER_REVERT = "TRADING_CFD_ORDER_REVERT",
  TRADING_CFD_ORDER_EDIT = "TRADING_CFD_ORDER_EDIT",
  TRADING_CFD_ACCOUNTS = "TRADING_CFD_ACCOUNTS",
  TRADING_CFD_ACCOUNT_DELETE = "TRADING_CFD_ACCOUNT_DELETE",
  TRADING_CFD_LOGIN = "TRADING_CFD_LOGIN",
  TRADING_CFD_WALLET_VISIBILITY = "TRADING_CFD_WALLET_VISIBILITY",
  TRADING_STAKING_ACCOUNTS = "TRADING_STAKING_ACCOUNTS",
  TRADING_STAKING_ACCOUNT_DELETE = "TRADING_STAKING_ACCOUNT_DELETE",

  REPORTS_DASHBOARD = "REPORTS_DASHBOARD",
  REPORTS_AFFILIATE_DASHBOARD = "REPORTS_AFFILIATE_DASHBOARD",
  REPORTS_SALES_DASHBOARD = "REPORTS_SALES_DASHBOARD",

  ACCESSES_SALES = "ACCESSES_SALES",
  ACCESSES_RETENTION = "ACCESSES_RETENTION",

  CLIENTS_CLIENTS = "CLIENTS_CLIENTS",
  CLIENTS_CLIENTS_REMOVE = "CLIENTS_CLIENTS_REMOVE",
  CLIENTS_CLIENTS_DOWNLOAD = "CLIENTS_CLIENTS_DOWNLOAD",
  CLIENTS_CLIENT_PROMOTE = "CLIENTS_CLIENT_PROMOTE",
  CLIENTS_CLIENT_REGISTER = "CLIENTS_CLIENT_REGISTER",
  CLIENTS_LEADS_UPLOAD = "CLIENTS_LEADS_UPLOAD",
  CLIENTS_CLIENT_DEMOTE = "CLIENTS_CLIENT_DEMOTE",
  CLIENTS_CLIENT_PHONE = "CLIENTS_CLIENT_PHONE",
  CLIENTS_CLIENT_FULL_PHONE_NUMBER = "CLIENTS_CLIENT_FULL_PHONE_NUMBER",
  CLIENTS_CLIENT_EMAIL = "CLIENTS_CLIENT_EMAIL",
  CLIENTS_CLIENT_FULL_EMAIL = "CLIENTS_CLIENT_FULL_EMAIL",
  CLIENTS_CLIENT_SECOND_PHONE = "CLIENTS_CLIENT_SECOND_PHONE",
  CLIENTS_CLIENT_SECOND_EMAIL = "CLIENTS_CLIENT_SECOND_EMAIL",
  CLIENTS_CLIENT_EDIT = "CLIENTS_CLIENT_EDIT",
  CLIENTS_CLIENT_PASSWORD = "CLIENTS_CLIENT_PASSWORD",
  CLIENTS_CLIENT_EDIT_BRAND = "CLIENTS_CLIENT_EDIT_BRAND",
  CLIENTS_CLIENT_UTM_SOURCE = "CLIENTS_CLIENT_UTM_SOURCE",
  CLIENTS_CLIENT_INFO = "CLIENTS_CLIENT_INFO",
  CLIENTS_CLIENT_UTM_CAMPAIGN = "CLIENTS_CLIENT_UTM_CAMPAIGN",
  CLIENTS_CLIENT_WHATSAPP = "CLIENTS_CLIENT_WHATSAPP",
  CLIENTS_CLIENT_ASSIGN = "CLIENTS_CLIENT_ASSIGN",
  CLIENTS_SUPPORT = "CLIENTS_SUPPORT",
  CLIENTS_SUPPORT_DELETE_CHAT = "CLIENTS_SUPPORT_DELETE_CHAT",
  CLIENTS_COMMENTS_VIEW = "CLIENTS_COMMENTS_VIEW",
  CLIENTS_COMMENT_EDIT = "CLIENTS_COMMENT_EDIT",
  CLIENTS_COMMENT_DELETE = "CLIENTS_COMMENT_DELETE",
  CLIENTS_AUTOTRADER = "CLIENTS_AUTOTRADER",
  CLIENTS_AVATARS = "CLIENTS_AVATARS",

  SETTINGS_CRM_USERS = "SETTINGS_CRM_USERS",
  SETTINGS_CRM_USERS_DELETE = "SETTINGS_CRM_USERS_DELETE",
  SETTINGS_TEAM_PAGE = "SETTINGS_TEAM_PAGE",
  SETTINGS_ADD_DELETE_TEAM = "SETTINGS_ADD_DELETE_TEAM",
  SETTINGS_EDIT_TEAM = "SETTINGS_EDIT_TEAM",
  SETTINGS_DELETE_2FA = "SETTINGS_DELETE_2FA",
  SETTINGS_BLOCK_ACCOUNT = "SETTINGS_BLOCK_ACCOUNT",
  SETTINGS_AFFILIATES = "SETTINGS_AFFILIATES",
  SETTINGS_STAKING_CURRENCIES = "SETTINGS_STAKING_CURRENCIES",
  SETTINGS_SALES_STATUSES = "SETTINGS_SALES_STATUSES",
  SETTINGS_VOIP = "SETTINGS_VOIP",
  SETTINGS_SMTP = "SETTINGS_SMTP",
  SETTINGS_EMAIL_TEMPLATES = "SETTINGS_EMAIL_TEMPLATES",

  MASS_ACTION_ASSIGN_TO_MANAGER = "MASS_ACTION_ASSIGN_TO_MANAGER",
  MASS_ACTION_CHANGE_STATUS = "MASS_ACTION_CHANGE_STATUS",
  MASS_ACTION_DEMOTE_PROMOTE = "MASS_ACTION_DEMOTE_PROMOTE",
  MASS_ACTION_CHANGE_FUNNEL_NAME = "MASS_ACTION_CHANGE_FUNNEL_NAME",
  MASS_ACTION_CHANGE_INFO = "MASS_ACTION_CHANGE_INFO",
}

export const humanifiedPermissionsNames = {
  [PermissionEnum.FINANCE_DEPOSITS]: "Deposits",
  [PermissionEnum.FINANCE_WITHDRAWALS]: "Withdrawals",
  [PermissionEnum.FINANCE_DEPOSIT_MANUAL]: "Manual Deposit",
  [PermissionEnum.FINANCE_DEPOSIT_REVERT_FAKE]: "Revert Fake Deposit",
  [PermissionEnum.FINANCE_DEPOSIT_REVERT_REAL]: "Revert Real Deposit",
  [PermissionEnum.FINANCE_DEPOSIT_PROCESS]: "Process Deposit",
  [PermissionEnum.FINANCE_DEPOSIT_OWNER_CHANGE]: "Change Deposit Owner",
  [PermissionEnum.FINANCE_WITHDRAWAL_MANUAL]: "Manual Withdrawal",
  [PermissionEnum.FINANCE_WITHDRAWAL_REVERT]: "Revert Withdrawal",
  [PermissionEnum.FINANCE_WITHDRAWAL_PROCESS]: "Process Withdrawal",
  [PermissionEnum.FINANCE_WITHDRAWAL_OWNER_CHANGE]: "Change Withdrawal Owner",
  [PermissionEnum.FINANCE_DEPOSIT_WALLET_VISIBILITY]:
    "Deposit Wallet Visibility",
  [PermissionEnum.FINANCE_DEPOSIT_MEMO_VISIBILITY]: "Deposit Memo Visibility",
  [PermissionEnum.FINANCE_WITHDRAWAL_WALLET_VISIBILITY]:
    "Withdrawal Wallet Visibility",
  [PermissionEnum.FINANCE_WITHDRAWAL_MEMO_VISIBILITY]:
    "Withdrawal Memo Visibility",
  [PermissionEnum.FINANCE_KYC]: "KYC",
  [PermissionEnum.FINANCE_DOCUMENT_DELETE]: "Document Delete",
  [PermissionEnum.FINANCE_DOCUMENT_PROCESS]: "Document Process",
  [PermissionEnum.FINANCE_KYC_QUESTIONS]: "KYC Questions",
  [PermissionEnum.FINANCE_WALLET_GENERATE]: "Wallet Generate",

  [PermissionEnum.TRADING_SYMBOLS]: "Symbols",
  [PermissionEnum.TRADING_CFD_ORDERS]: "CFD Orders",
  [PermissionEnum.TRADING_CFD_ORDER_REVERT]: "Revert CFD Order",
  [PermissionEnum.TRADING_CFD_ORDER_EDIT]: "Edit CFD Order",
  [PermissionEnum.TRADING_CFD_ACCOUNTS]: "CFD Accounts",
  [PermissionEnum.TRADING_CFD_ACCOUNT_DELETE]: "Delete CFD Account",
  [PermissionEnum.TRADING_CFD_LOGIN]: "CFD Login",
  [PermissionEnum.TRADING_CFD_WALLET_VISIBILITY]: "CFD Wallet Visibility",
  [PermissionEnum.TRADING_STAKING_ACCOUNTS]: "Staking Accounts",
  [PermissionEnum.TRADING_STAKING_ACCOUNT_DELETE]: "Delete Staking Account",

  [PermissionEnum.REPORTS_DASHBOARD]: "Dashboard",
  [PermissionEnum.REPORTS_AFFILIATE_DASHBOARD]: "Affiliate Dashboard",
  [PermissionEnum.REPORTS_SALES_DASHBOARD]: "Sales Dashboard",

  [PermissionEnum.ACCESSES_SALES]: "Sales",
  [PermissionEnum.ACCESSES_RETENTION]: "Retention",

  [PermissionEnum.CLIENTS_CLIENTS]: "Clients",
  [PermissionEnum.CLIENTS_CLIENTS_REMOVE]: "Remove Client",
  [PermissionEnum.CLIENTS_CLIENTS_DOWNLOAD]: "Download Client",
  [PermissionEnum.CLIENTS_CLIENT_PROMOTE]: "Promote Client",
  [PermissionEnum.CLIENTS_CLIENT_REGISTER]: "Register Client",
  [PermissionEnum.CLIENTS_LEADS_UPLOAD]: "Upload Leads",
  [PermissionEnum.CLIENTS_CLIENT_DEMOTE]: "Demote Client",
  [PermissionEnum.CLIENTS_CLIENT_PHONE]: "Client Phone",
  [PermissionEnum.CLIENTS_CLIENT_FULL_PHONE_NUMBER]: "Client Full Phone Number",
  [PermissionEnum.CLIENTS_CLIENT_EMAIL]: "Client Email",
  [PermissionEnum.CLIENTS_CLIENT_FULL_EMAIL]: "Client Full Email",
  [PermissionEnum.CLIENTS_CLIENT_SECOND_PHONE]: "Client Second Phone",
  [PermissionEnum.CLIENTS_CLIENT_SECOND_EMAIL]: "Client Second Email",
  [PermissionEnum.CLIENTS_CLIENT_EDIT]: "Edit Client",
  [PermissionEnum.CLIENTS_CLIENT_PASSWORD]: "Client Password",
  [PermissionEnum.CLIENTS_CLIENT_EDIT_BRAND]: "Client Edit Brand",
  [PermissionEnum.CLIENTS_CLIENT_UTM_SOURCE]: "Client UTM Source",
  [PermissionEnum.CLIENTS_CLIENT_INFO]: "Client Info",
  [PermissionEnum.CLIENTS_CLIENT_UTM_CAMPAIGN]: "Client UTM Campaign",
  [PermissionEnum.CLIENTS_CLIENT_WHATSAPP]: "Client WhatsApp",
  [PermissionEnum.CLIENTS_CLIENT_ASSIGN]: "Client Assign",
  [PermissionEnum.CLIENTS_SUPPORT]: "Support",
  [PermissionEnum.CLIENTS_SUPPORT_DELETE_CHAT]: "Delete Chat",
  [PermissionEnum.CLIENTS_COMMENTS_VIEW]: "Comments View",
  [PermissionEnum.CLIENTS_COMMENT_EDIT]: "Comment Edit",
  [PermissionEnum.CLIENTS_COMMENT_DELETE]: "Comment Delete",
  [PermissionEnum.CLIENTS_AUTOTRADER]: "Autotrader",
  [PermissionEnum.CLIENTS_AVATARS]: "Avatars",
  [PermissionEnum.SETTINGS_CRM_USERS]: "CRM Users",
  [PermissionEnum.SETTINGS_CRM_USERS_DELETE]: "Delete CRM User",
  [PermissionEnum.SETTINGS_TEAM_PAGE]: "Team Page",
  [PermissionEnum.SETTINGS_ADD_DELETE_TEAM]: "Add/Delete Team",
  [PermissionEnum.SETTINGS_EDIT_TEAM]: "Edit Team",
  [PermissionEnum.SETTINGS_DELETE_2FA]: "Delete 2FA",
  [PermissionEnum.SETTINGS_BLOCK_ACCOUNT]: "Block Account",
  [PermissionEnum.SETTINGS_AFFILIATES]: "Affiliates",
  [PermissionEnum.SETTINGS_STAKING_CURRENCIES]: "Staking Currencies",
  [PermissionEnum.SETTINGS_SALES_STATUSES]: "Sales Statuses",
  [PermissionEnum.SETTINGS_VOIP]: "VOIP",
  [PermissionEnum.SETTINGS_SMTP]: "SMTP",
  [PermissionEnum.SETTINGS_EMAIL_TEMPLATES]: "Email Templates",
  [PermissionEnum.MASS_ACTION_ASSIGN_TO_MANAGER]: "Assign to Manager",
  [PermissionEnum.MASS_ACTION_CHANGE_STATUS]: "Change Status",
  [PermissionEnum.MASS_ACTION_DEMOTE_PROMOTE]: "Demote/Promote",
  [PermissionEnum.MASS_ACTION_CHANGE_FUNNEL_NAME]: "Change Funnel Name",
  [PermissionEnum.MASS_ACTION_CHANGE_INFO]: "Change Info",
};

export const categories = {
  Finance: [
    PermissionEnum.FINANCE_DEPOSITS,
    PermissionEnum.FINANCE_WITHDRAWALS,
    PermissionEnum.FINANCE_DEPOSIT_MANUAL,
    PermissionEnum.FINANCE_DEPOSIT_REVERT_FAKE,
    PermissionEnum.FINANCE_DEPOSIT_REVERT_REAL,
    PermissionEnum.FINANCE_DEPOSIT_PROCESS,
    PermissionEnum.FINANCE_DEPOSIT_OWNER_CHANGE,
    PermissionEnum.FINANCE_WITHDRAWAL_MANUAL,
    PermissionEnum.FINANCE_WITHDRAWAL_REVERT,
    PermissionEnum.FINANCE_WITHDRAWAL_PROCESS,
    PermissionEnum.FINANCE_WITHDRAWAL_OWNER_CHANGE,
    PermissionEnum.FINANCE_DEPOSIT_WALLET_VISIBILITY,
    PermissionEnum.FINANCE_DEPOSIT_MEMO_VISIBILITY,
    PermissionEnum.FINANCE_WITHDRAWAL_WALLET_VISIBILITY,
    PermissionEnum.FINANCE_WITHDRAWAL_MEMO_VISIBILITY,
    PermissionEnum.FINANCE_KYC,
    PermissionEnum.FINANCE_DOCUMENT_DELETE,
    PermissionEnum.FINANCE_DOCUMENT_PROCESS,
    PermissionEnum.FINANCE_KYC_QUESTIONS,
    PermissionEnum.FINANCE_WALLET_GENERATE,
  ],
  Trading: [
    PermissionEnum.TRADING_SYMBOLS,
    PermissionEnum.TRADING_CFD_ORDERS,
    PermissionEnum.TRADING_CFD_ORDER_REVERT,
    PermissionEnum.TRADING_CFD_ORDER_EDIT,
    PermissionEnum.TRADING_CFD_ACCOUNTS,
    PermissionEnum.TRADING_CFD_ACCOUNT_DELETE,
    PermissionEnum.TRADING_CFD_LOGIN,
    PermissionEnum.TRADING_CFD_WALLET_VISIBILITY,
    PermissionEnum.TRADING_STAKING_ACCOUNTS,
    PermissionEnum.TRADING_STAKING_ACCOUNT_DELETE,
  ],
  Reports: [
    PermissionEnum.REPORTS_DASHBOARD,
    PermissionEnum.REPORTS_AFFILIATE_DASHBOARD,
    PermissionEnum.REPORTS_SALES_DASHBOARD,
  ],
  Accesses: [PermissionEnum.ACCESSES_SALES, PermissionEnum.ACCESSES_RETENTION],
  Clients: [
    PermissionEnum.CLIENTS_CLIENTS,
    PermissionEnum.CLIENTS_CLIENTS_REMOVE,
    PermissionEnum.CLIENTS_CLIENTS_DOWNLOAD,
    PermissionEnum.CLIENTS_CLIENT_PROMOTE,
    PermissionEnum.CLIENTS_CLIENT_REGISTER,
    PermissionEnum.CLIENTS_LEADS_UPLOAD,
    PermissionEnum.CLIENTS_CLIENT_DEMOTE,
    PermissionEnum.CLIENTS_CLIENT_PHONE,
    PermissionEnum.CLIENTS_CLIENT_FULL_PHONE_NUMBER,
    PermissionEnum.CLIENTS_CLIENT_EMAIL,
    PermissionEnum.CLIENTS_CLIENT_FULL_EMAIL,
    PermissionEnum.CLIENTS_CLIENT_SECOND_PHONE,
    PermissionEnum.CLIENTS_CLIENT_SECOND_EMAIL,
    PermissionEnum.CLIENTS_CLIENT_EDIT,
    PermissionEnum.CLIENTS_CLIENT_PASSWORD,
    PermissionEnum.CLIENTS_CLIENT_EDIT_BRAND,
    PermissionEnum.CLIENTS_CLIENT_UTM_SOURCE,
    PermissionEnum.CLIENTS_CLIENT_INFO,
    PermissionEnum.CLIENTS_CLIENT_UTM_CAMPAIGN,
    PermissionEnum.CLIENTS_CLIENT_WHATSAPP,
    PermissionEnum.CLIENTS_CLIENT_ASSIGN,
    PermissionEnum.CLIENTS_SUPPORT,
    PermissionEnum.CLIENTS_SUPPORT_DELETE_CHAT,
    PermissionEnum.CLIENTS_COMMENTS_VIEW,
    PermissionEnum.CLIENTS_COMMENT_EDIT,
    PermissionEnum.CLIENTS_COMMENT_DELETE,
    PermissionEnum.CLIENTS_AUTOTRADER,
    PermissionEnum.CLIENTS_AVATARS,
  ],
  Settings: [
    PermissionEnum.SETTINGS_CRM_USERS,
    PermissionEnum.SETTINGS_CRM_USERS_DELETE,
    PermissionEnum.SETTINGS_TEAM_PAGE,
    PermissionEnum.SETTINGS_ADD_DELETE_TEAM,
    PermissionEnum.SETTINGS_EDIT_TEAM,
    PermissionEnum.SETTINGS_DELETE_2FA,
    PermissionEnum.SETTINGS_BLOCK_ACCOUNT,
    PermissionEnum.SETTINGS_AFFILIATES,
    PermissionEnum.SETTINGS_STAKING_CURRENCIES,
    PermissionEnum.SETTINGS_SALES_STATUSES,
    PermissionEnum.SETTINGS_VOIP,
    PermissionEnum.SETTINGS_SMTP,
    PermissionEnum.SETTINGS_EMAIL_TEMPLATES,
  ],
  "Mass action": [
    PermissionEnum.MASS_ACTION_ASSIGN_TO_MANAGER,
    PermissionEnum.MASS_ACTION_CHANGE_STATUS,
    PermissionEnum.MASS_ACTION_DEMOTE_PROMOTE,
    PermissionEnum.MASS_ACTION_CHANGE_FUNNEL_NAME,
    PermissionEnum.MASS_ACTION_CHANGE_INFO,
  ],
};

const permissions = { PermissionEnum, categories, humanifiedPermissionsNames };
export default permissions;