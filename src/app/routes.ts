import { CONST } from 'app/const';

const OPERATOR_ROLES = CONST.OPERATOR_ROLES;
const LOGIN_TYPES = CONST.LOGIN_TYPES;

export const routes = {
  userSelect: {
    state: 'userSelect',
    url: '/',
    loginType: 'all',
    template: '<user-select class="flex"></user-select>',
    isMap: false,
    isMenu: false,
  },
  auth: {
    state: 'auth',
    isAuthState: true,
    url: '/portal/auth',
    loginType: 'all',
    template: '<auth class="flex"></auth>',
    isMap: false,
    isMenu: false,
  },
  transporterAuth: {
    state: 'transporterAuth',
    isAuthState: true,
    url: '/tk',
    loginType: 'all',
    template: '<transporter-auth></transporter-auth>',
    isMap: false,
    isMenu: false,
  },
  maintainingObj: {
    state: 'maintainingObj',
    isAuthState: true,
    url: '/mo',
    loginType: 'all',
    template: '<maintaining-obj-auth></maintaining-obj-auth>',
    isMap: false,
    isMenu: false,
  },
  registration: {
    state: 'registration',
    isAuthState: true,
    url: '/portal/registration',
    loginType: 'all',
    template: '<registration class="flex"></registration>',
    isMap: false,
    isMenu: false,
  },
  user: {
    state: 'user',
    url: '/portal/user',
    loginType: LOGIN_TYPES.USER,
    template: '<user-main class="flex"></user-main>',
    isMap: false,
    isMenu: true,
    needLoadConsumer: true,
  },
  userCards: {
    state: 'user.cards',
    params: {
      cardType: null,
      id: null,
    },
    url: '/:cardType/:id',
    loginType: LOGIN_TYPES.USER,
    template: '<user-cards></user-cards>',
    isMap: true,
    isMenu: true,
    needLoadConsumer: true,
  },
  profile: {
    state: 'profile',
    url: '/portal/profile',
    loginType: LOGIN_TYPES.USER,
    template: '<user-main open-consumer-card="true" class="flex"></user-main>',
    isMap: false,
    isMenu: true,
  },
  scheme: {
    state: 'terrscheme',
    abstract: true,
    url: '/portal/terrscheme',
    roles: [OPERATOR_ROLES.tershema],
    template: '<scheme-main></scheme-main>',
  },
  schemeMap: {
    state: 'terrscheme.mso',
    url: '/mso',
    roles: [OPERATOR_ROLES.tershema],
    template: '<div style="position: relative;"><mso-main></mso-main></div>',
    isMap: true,
    isMenu: true,
  },
  schemeGenerateWaste: {
    state: 'terrscheme.generate-waste',
    url: '/generate-waste',
    roles: [OPERATOR_ROLES.tershema],
    template: '<scheme-generate-waste class="flex"></scheme-generate-waste>',
    isMap: true,
    isMenu: true,
  },
  schemeTreatmentObjects: {
    state: 'terrscheme.treatment-objects',
    roles: [OPERATOR_ROLES.tershema],
    url: '/treatment-object',
    template: '<scheme-treatment-objects class="flex"></scheme-treatment-objects>',
    isMap: true,
    isMenu: true,
  },
  schemeStorageObjects: {
    state: 'terrscheme.storage-objects',
    url: '/storage-objects',
    roles: [OPERATOR_ROLES.tershema],
    template: '<scheme-storage-objects class="flex"></scheme-storage-objects>',
    isMap: true,
    isMenu: true,
  },
  schemeRecyclables: {
    state: 'terrscheme.recyclables',
    url: '/recyclables',
    roles: [OPERATOR_ROLES.tershema],
    template: '<div style="position: relative;">' +
    '<c-recyclables-list visible-cards-count="1"></c-recyclables-list></div>',
    isMap: true,
    isMenu: true,
  },
  schemeDrive: {
    state: 'terrscheme.drive',
    url: '/drive',
    roles: [OPERATOR_ROLES.tershema],
    template: '<drive></drive>',
    isMap: true,
    isMenu: true,
  },
  schemeEts: {
    state: 'terrscheme.ets',
    url: '/ets',
    roles: [OPERATOR_ROLES.tershema],
    template: '<div class="ets-container">' +
    '<iframe class="ets-container__iframe" frameBorder="0" src="http://ets.tech.mos.ru/map/">' +
    '</iframe></div>',
    isMap: false,
    isMenu: true,
  },
  schemeRefuse: {
    state: 'terrscheme.refuse',
    url: '/refuse',
    roles: [OPERATOR_ROLES.tershema],
    template: '<scheme-refuse></scheme-refuse>',
    isMap: true,
    isMenu: true,
  },
  requestsRegistry: {
    state: 'requestsRegistry',
    url: '/portal/requests-registry',
    roles: [
      OPERATOR_ROLES.contract_departament,
      OPERATOR_ROLES.customer_departament,
      OPERATOR_ROLES.leader_contract_departament,
      OPERATOR_ROLES.dispatcher_departament,
    ],
    template: '<registry></registry>',
    isMap: false,
    isMenu: true,
  },
  contractsRegistry: {
    state: 'contractsRegistry',
    url: '/portal/contracts-registry',
    roles: [
      OPERATOR_ROLES.contract_departament,
      OPERATOR_ROLES.customer_departament,
      OPERATOR_ROLES.leader_contract_departament,
    ],
    template: '<contracts-registry></contracts-registry>',
    isMap: false,
    isMenu: true,
  },
  charts: {
    state: 'charts',
    url: '/portal/charts',
    roles: [OPERATOR_ROLES.tershema],
    template: require('./components/main/charts/chartmain.html'),
    isMap: false,
    isMenu: true,
  },
  chartsGravesWaste: {
    state: 'charts.graves-waste',
    url: '/shron',
    roles: [OPERATOR_ROLES.tershema],
    template: '<chart-shron class="flex-column flex-fill"></chart-shron>',
    isMap: false,
    isMenu: true,
  },
  chartsWasteDevCons: {
    state: 'charts.chart-development-consumption',
    url: '/wasteDevCons',
    roles: [OPERATOR_ROLES.tershema],
    template: '<chart-waste-dev-cons class="flex-column flex-fill"></chart-waste-dev-cons>',
    isMap: false,
    isMenu: true,
  },
  chartsBalansOthodov: {
    state: 'charts.chart-balansothodov',
    url: '/balans-othodov',
    roles: [OPERATOR_ROLES.tershema],
    template: '<chart-balans-othodov class="flex-column flex-fill"></chart-balans-othodov>',
    isMap: false,
    isMenu: true,
  },
  chartsMedical: {
    state: 'charts.chart-medical',
    url: '/medical-waste',
    roles: [OPERATOR_ROLES.tershema],
    template: '<chart-medical-waste class=\'flex-column flex-fill\'></chart-medical-waste>',
    isMap: false,
    isMenu: true,
  },
  requests: {
    state: 'requests',
    url: '/portal/requests',
    roles: [OPERATOR_ROLES.customer_departament, OPERATOR_ROLES.contract_departament],
    template: '<div class="screen"><div class="screen__container">' +
    '<ro-requests class="flex"></ro-requests></div></div>',
    isMap: true,
    isMenu: true,
  },
  consumers: {
    state: 'consumers',
    url: '/portal/consumers',
    roles: [OPERATOR_ROLES.customer_departament, OPERATOR_ROLES.contract_departament],
    template: '<div class="screen"><div class="screen__container">' +
    '<c-consumers-main></c-consumers-main></div></div>',
    isMap: true,
    isMenu: true,
  },
  contracts: {
    state: 'contracts',
    url: '/portal/contracts',
    roles: [
      OPERATOR_ROLES.customer_departament,
      OPERATOR_ROLES.contract_departament,
      OPERATOR_ROLES.leader_contract_departament,
    ],
    template: '<div class="screen"><div class="screen__container">' +
    '<ro-contracts class="flex"></ro-contracts></div></div>',
    isMap: true,
    isMenu: true,
  },
  projects: {
    state: 'projects',
    url: '/portal/projects',
    roles: [OPERATOR_ROLES.customer_departament, OPERATOR_ROLES.contract_departament],
    template: '<div class="screen"><div class="screen__container">' +
    '<ro-contracts projects="true" class="flex"></ro-contracts></div></div>',
    isMap: true,
    isMenu: true,
  },
  linear: {
    state: 'linear',
    url: '/portal/linear',
    roles: [OPERATOR_ROLES.linear_departament],
    template: '<div class="screen"><div class="screen__container">' +
    '<lo-requests class="flex"></lo-requests></div></div>',
    isMap: true,
    isMenu: true,
  },
  linearVerificationRequests: {
    state: 'linearVerificationRequests',
    url: '/portal/linear/verification-requests',
    roles: [OPERATOR_ROLES.linear_departament],
    template: '<div class="screen"><div class="screen__container">' +
    '<verification-requests></verification-requests></div></div>',
    isMap: true,
    isMenu: true,
  },
  linearRegistry: {
    state: 'linearRegistry',
    url: '/portal/linear/registry/:tab',
    params: {
      tab: 'refinement_data',
    },
    roles: [
      OPERATOR_ROLES.linear_departament,
      OPERATOR_ROLES.contract_departament,
      OPERATOR_ROLES.leader_contract_departament,
    ],
    template: '<lo-registry></lo-registry>',
    isMap: false,
    isMenu: true,
  },
  worksRegistry: {
    state: 'worksRegistry',
    url: '/portal/works-registry',
    roles: [OPERATOR_ROLES.contract_departament, OPERATOR_ROLES.leader_contract_departament],
    loginType: LOGIN_TYPES.TRANSPORTER,
    template: '<works-registry></works-registry>',
    isMap: false,
    isMenu: true,
  },
  worksRegistryTransporter: {
    state: 'worksRegistryTransporter',
    url: '/tk/works-registry',
    loginType: LOGIN_TYPES.TRANSPORTER,
    template: '<works-registry></works-registry>',
    isMap: false,
    isMenu: true,
  },
  leaderDesktop: {
    state: 'leaderDesktop',
    url: '/portal/leader-desktop',
    roles: [OPERATOR_ROLES.leader_contract_departament],
    template: '<leader-desktop></leader-desktop>',
    isMap: false,
    isMenu: true,
  },
  dispatcherRequests: {
    state: 'dispatcherRequests',
    url: '/portal/dispatcher-requests',
    roles: [OPERATOR_ROLES.dispatcher_departament],
    template: '<div class="screen"><div class="screen__container">' +
    '<disp-requests></disp-requests></div></div>',
    isMap: true,
    isMenu: true,
  },
  extAgreements: {
    state: 'extAgreements',
    url: '/portal/ext-agreements',
    roles: [OPERATOR_ROLES.contract_departament],
    template: '<div class="screen"><div class="screen__container">' +
    '<ext-agreements></ext-agreements></div></div>',
    isMap: true,
    isMenu: true,
  },
  unloadingRequests: {
    state: 'unloadingRequests',
    url: '/tk/unloading',
    loginType: LOGIN_TYPES.TRANSPORTER,
    template: `<div class="screen">
                  <div class="screen__container">
                      <unloading-requests></unloading-requests>
                   </div>
               </div>`,
    isMap: true,
    isMenu: true,
  },
  installBunkerRequests: {
    state: 'installBunkerRequests',
    url: '/tk/install-bunker',
    loginType: LOGIN_TYPES.TRANSPORTER,
    template: `<div class="screen">
                  <div class="screen__container">
                      <install-bunker-requests></install-bunker-requests>
                   </div>
               </div>`,
    isMap: true,
    isMenu: true,
  },
  installContainerRequests: {
    state: 'installContainerRequests',
    url: '/tk/install-container',
    loginType: LOGIN_TYPES.TRANSPORTER,
    template: `<div class="screen">
                  <div class="screen__container">
                      <install-container-requests></install-container-requests>
                   </div>
               </div>`,
    isMap: true,
    isMenu: true,
  },
  billingList: {
    state: 'billingList',
    url: '/portal/billing-list',
    loginType: LOGIN_TYPES.USER,
    template: '<billing-list></billing-list>',
    isMap: false,
    isMenu: true,
  },
  analyticsContractsMvk: {
    state: 'analyticsContractsMvk',
    url: '/portal/analytics-contracts-mvk',
    roles: [OPERATOR_ROLES.tershema],
    template: '<analytics-contracts-mvk></analytics-contracts-mvk>',
    isMap: false,
    isMenu: true,
  },
  analyticsContractsUser: {
    state: 'analyticsContractsUser',
    url: '/portal/analytics-contracts-user',
    roles: [OPERATOR_ROLES.tershema],
    template: '<analytics-contracts-user></analytics-contracts-user>',
    isMap: false,
    isMenu: true,
  },
  supervisorEventsList: {
    state: 'supervisorEventsList',
    url: '/portal/supervisor-events-list',
    roles: [OPERATOR_ROLES.supervisor],
    template: '<supervisor-events-list></supervisor-events-list>',
    isMap: false,
    isMenu: true,
  },
  analyticsMsoStatistics: {
    state: 'analyticsMsoStatistics',
    url: '/portal/analytics-mso-statistics',
    roles: [OPERATOR_ROLES.tershema],
    template: '<analytics-mso-statistics></analytics-mso-statistics>',
    isMap: false,
    isMenu: true,
  },
  analyticsMsoControl: {
    state: 'analyticsMsoControl',
    url: '/portal/analytics-mso-control',
    roles: [OPERATOR_ROLES.tershema],
    template: '<analytics-mso-control></analytics-mso-control>',
    isMap: false,
    isMenu: true,
  },
  selectContract: {
    state: 'selectContract',
    url: '/portal/select-contract',
    roles: [OPERATOR_ROLES.contract_departament, OPERATOR_ROLES.leader_contract_departament],
    template: '<div class="screen"><div class="screen__container">' +
    '<select-contract></select-contract></div></div>',
    isMap: false,
    isMenu: true,
  },
  landfillNotice: {
    state: 'landfillNotice',
    url: '/portal/landfill-notice',
    roles: [OPERATOR_ROLES.supervisor],
    template: '<div class="screen"><div class="screen__container">' +
    '<landfill-notice></landfill-notice></div></div>',
    isMap: true,
    isMenu: true,
  },
  talonRegistry: {
    state: 'talonRegistry',
    url: '/portal/talon-registry',
    roles: [OPERATOR_ROLES.contract_departament, OPERATOR_ROLES.leader_contract_departament],
    template: '<talon-registry-do></talon-registry-do>',
    isMap: false,
    isMenu: true,
  },
  transporterRegistryDo: {
    state: 'transporterRegistryDo',
    url: '/portal/transporter-registry',
    roles: [OPERATOR_ROLES.contract_departament, OPERATOR_ROLES.leader_contract_departament],
    loginType: LOGIN_TYPES.MAINTAINING_OBJ,
    template: '<transporter-registry></transporter-registry>',
    isMap: false,
    isMenu: true,
  },
  transporterRegistryMo: {
    state: 'transporterRegistryMo',
    url: '/mo/transporter-registry',
    loginType: LOGIN_TYPES.MAINTAINING_OBJ,
    template: '<transporter-registry></transporter-registry>',
    isMap: false,
    isMenu: true,
  },
  maintainObjTalonsRegistry: {
    state: 'maintainObjTalonsRegistry',
    url: '/mo/talon-registry',
    loginType: LOGIN_TYPES.MAINTAINING_OBJ,
    template: '<talon-registry-mo></talon-registry-mo>',
    isMap: false,
    isMenu: true,
  },
  paymentsList: {
    state: 'paymentsList',
    url: '/portal/payments-list',
    roles: [OPERATOR_ROLES.contract_departament, OPERATOR_ROLES.leader_contract_departament],
    template: '<payments-list></payments-list>',
    isMap: false,
    isMenu: true,
  },
  analyticsMoLoading: {
    state: 'analyticsMoLoading',
    url: '/portal/analytics-mo-loading',
    roles: [OPERATOR_ROLES.tershema],
    template: '<analytics-mo-loading></analytics-mo-loading>',
    isMap: false,
    isMenu: true,
  },
  wasteRemovalControl: {
    state: 'wasteRemovalControl',
    url: '/portal/waste-removal-control',
    loginType: LOGIN_TYPES.USER,
    template: '<waste-removal-control></waste-removal-control>',
    isMap: false,
    isMenu: true,
  },
  analyticsWasteLimitsControl: {
    state: 'analyticsWasteLimitsControl',
    url: '/portal/analytics-waste-limits-control',
    roles: [OPERATOR_ROLES.tershema],
    template: '<analytics-waste-limits-control></analytics-waste-limits-control>',
    isMap: false,
    isMenu: true,
  },
  reviseActs: {
    state: 'reviseActs',
    url: '/portal/revise-acts',
    loginType: LOGIN_TYPES.USER,
    roles: [OPERATOR_ROLES.contract_departament, OPERATOR_ROLES.leader_contract_departament],
    template: '<revise-acts-list></revise-acts-list>',
    isMap: false,
    isMenu: true,
  },
  linearMsoRegistry: {
    state: 'linearMsoRegistry',
    url: '/portal/linear/mso-registry',
    roles: [OPERATOR_ROLES.linear_departament],
    template: '<mso-registry></mso-registry>',
    isMap: false,
    isMenu: true,
  },
  allConsumersRegistry: {
    state: 'allConsumersRegistry',
    url: '/portal/all-consumers-registry',
    roles: [
      OPERATOR_ROLES.customer_departament,
      OPERATOR_ROLES.contract_departament,
      OPERATOR_ROLES.leader_contract_departament,
    ],
    template: '<all-consumers-registry></all-consumers-registry>',
    isMap: false,
    isMenu: true,
  },
  inspectionRegistry: {
    state: 'inspectionRegistry',
    url: '/portal/inspection-registry',
    roles: [OPERATOR_ROLES.linear_departament],
    template: '<inspection-registry></inspection-registry>',
    isMap: false,
    isMenu: true,
  },
  maintainingData: {
    state: 'maintainingData',
    url: '/mo/maintaining-data',
    loginType: LOGIN_TYPES.MAINTAINING_OBJ,
    template: '<div class="cards-area"><maintaining-data-card></maintaining-data-card></div>',
    isMap: false,
    isMenu: true,
  },
  mvkContractsList: {
    state: 'mvkContractsList',
    url: '/portal/mvk-contracts-list',
    roles: OPERATOR_ROLES.contract_departament,
    template: '<div class="cards-area"><mvk-contracts-list></mvk-contracts-list></div>',
    isMap: false,
    isMenu: true,
  },
  responsibilityArea: {
    state: 'responsibilityArea',
    url: '/portal/responsibility-area',
    loginType: LOGIN_TYPES.TRANSPORTER,
    template: '<div class="screen"><div class="screen__container">' +
    '<responsibility-area></responsibility-area></div></div>',
    isMap: true,
    isMenu: true,
  },
};

