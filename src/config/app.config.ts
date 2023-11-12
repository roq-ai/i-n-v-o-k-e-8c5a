interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Team Member', 'Intelligent Agent', 'System Administrator'],
  tenantName: 'Organization',
  applicationName: ' I.N.V.O.K.E.',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View organization information',
    'View personal user information',
    'View active goals',
    'View active tasks',
  ],
  ownerAbilities: [
    'Manage agent deployment',
    'Manage organization',
    'Manage users',
    'Manage intelligent agents',
    'Manage goals',
    'Manage tasks',
    'Manage agent tasks',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/468ad911-c2cc-4e84-b17c-4c0ddb916ad1',
};
