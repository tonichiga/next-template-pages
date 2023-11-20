import { routeNames } from ".";

const routes = [
  {
    title: "general",
    root: routeNames.HOME.ROOT,
    links: [
      {
        title: "sale",
        href: routeNames.HOME.SALE,
      },
      {
        title: "retention",
        href: routeNames.HOME.RETENTION,
      },
      {
        title: "chat",
        href: routeNames.HOME.CHAT,
      },
      {
        title: "calendar",
        href: routeNames.HOME.CALENDAR,
      },
    ],
    opened: false,
  },
  {
    title: "finance",
    root: routeNames.FINANCE.ROOT,
    links: [
      {
        title: "kyc",
        href: routeNames.FINANCE.KYC,
      },
      {
        title: "deposits",
        href: routeNames.FINANCE.DEPOSIT,
      },
      {
        title: "withdrawals",
        href: routeNames.FINANCE.WITHDRAWAL,
      },
    ],
    opened: false,
  },
  {
    title: "trading",
    root: routeNames.TRADING.ROOT,
    links: [
      {
        title: "auto_traders",
        href: routeNames.TRADING.AUTO_TRADERS,
      },
      {
        title: "open_CFD_orders",
        href: routeNames.TRADING.OPEN_CFD_ORDERS,
      },
      {
        title: "CFD_orders_history",
        href: routeNames.TRADING.CFD_ORDERS_HISTORY,
      },
      {
        title: "symbols",
        href: routeNames.TRADING.SYMBOLS,
      },
      {
        title: "symbol_group",
        href: routeNames.TRADING.SYMBOL_GROUP,
      },
      // {
      //   title: "symbol_settings",
      //   href: routeNames.TRADING.SYMBOL_SETTINGS,
      // },
      {
        title: "CFD_accounts",
        href: routeNames.TRADING.CFD_ACCOUNTS,
      },
    ],
    opened: false,
  },
  {
    title: "reports",
    root: routeNames.REPORTS.ROOT,
    links: [
      {
        title: "sales_dashboard",
        href: routeNames.REPORTS.SALES_DASHBOARD,
      },
      {
        title: "affiliate_dashboard",
        href: routeNames.REPORTS.AFFILIATE_DASHBOARD,
      },
      {
        title: "activity_clients",
        href: routeNames.REPORTS.ACTIVITY_CLIENTS,
      },
      {
        title: "activity_CRM_users",
        href: routeNames.REPORTS.ACTIVITY_CRM_USERS,
      },
    ],
    opened: false,
  },
  {
    title: "settings",
    root: routeNames.SETTINGS.ROOT,
    links: [
      {
        title: "CRM_users",
        href: routeNames.SETTINGS.CRM_USERS,
      },
      {
        title: "team",
        href: routeNames.SETTINGS.TEAM,
      },
      {
        title: "hierarchy",
        href: routeNames.SETTINGS.HIERARCHY,
      },
      {
        title: "traffic_history",
        href: routeNames.SETTINGS.TRAFFIC_HISTORY,
      },
      {
        title: "affiliates",
        href: routeNames.SETTINGS.AFFILIATES,
      },
      {
        title: "security",
        href: routeNames.SETTINGS.SECURITY,
      },
      {
        title: "VOIP",
        href: routeNames.SETTINGS.VOIP,
      },
      {
        title: "SMTP",
        href: routeNames.SETTINGS.SMTP,
      },
      {
        title: "PSP",
        href: routeNames.SETTINGS.PSP,
      },
      {
        title: "withdrawals_method",
        href: routeNames.SETTINGS.WITHDRAWALS_METHOD,
      },
      {
        title: "other_psp",
        href: routeNames.SETTINGS.OTHER_PSP,
      },
      {
        title: "statuses",
        href: routeNames.SETTINGS.STATUSES,
      },
      {
        title: "email_templates",
        href: routeNames.SETTINGS.EMAIL_TEMPLATES,
      },
      {
        title: "variables",
        href: routeNames.SETTINGS.VARIABLES,
      },
      {
        title: "currencies",
        href: routeNames.SETTINGS.CURRENCIES,
      },
    ],
    opened: false,
  },
];

export default routes;
