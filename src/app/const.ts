import * as angular from 'angular';

export const CONST = {
  OPERATOR_ROLES: {
    customer_departament: 'customer_departament',
    contract_departament: 'contract_departament',
    dispatcher_departament: 'dispatcher_departament',
    leader_contract_departament: 'leader_contract_departament',
    linear_departament: 'linear_operator',
    tershema: 'tershema',
    supervisor: 'supervisor',
  },

  LOGIN_TYPES: {
    USER: 'user',
    OPERATOR: 'operator',
    TRANSPORTER: 'transporter',
    MAINTAINING_OBJ: 'maintaining_obj',
  },

  dayCounts: [
    { value: 1, title: '1й (-ю,-е)' },
    { value: 2, title: '2й (-ю,-е)' },
    { value: 3, title: '3й (-ю,-е)' },
    { value: 4, title: '4й (-ю,-е)' },
  ],

  // acc - accusative case - винительный падеж
  weekDays: [
    { title: 'Пн', titleFull: 'Понедельник', acc: 'Понедельник', value: 1 },
    { title: 'Вт', titleFull: 'Вторник', acc: 'Вторник', value: 2 },
    { title: 'Ср', titleFull: 'Среда', acc: 'Среду', value: 3 },
    { title: 'Чт', titleFull: 'Четверг', acc: 'Четверг', value: 4 },
    { title: 'Пт', titleFull: 'Пятница', acc: 'Пятницу', value: 5 },
    { title: 'Сб', titleFull: 'Суббота', acc: 'Субботу', value: 6 },
    { title: 'Вс', titleFull: 'Воскресенье', acc: 'Воскресенье', value: 7 },
  ],
  yandexMapConfig: {
    id: 'map',
    state: {
      center: [55.67, 37.14],
      zoom: 9,
      controls: [],
    },
    options: {
      autoFitToViewport: 'always',
    },
    controls: {
      zoomControl: {
        float: 'none',
        position: { right: 10, top: 240 },
      },
    },
    icons: {
      // Green mso pins
      kpGreen: require('app/static/img/pins/kp_green.png'),
      kpGreenClick: require('app/static/img/pins/kp_green__onclick.png'),
      kpGreenHover: require('app/static/img/pins/kp_green__hover.png'),
      bpGreen: require('app/static/img/pins/bp_green.png'),
      bpGreenClick: require('app/static/img/pins/bp_green__onclick.png'),
      bpGreenHover: require('app/static/img/pins/bp_green__hover.png'),
      kpGreenPoint: require('app/static/img/pins/icn-container-ok-ASY.png'),
      kpGreenPointClick: require('app/static/img/pins/icn-container-ok-selected-ASY.png'),
      kpGreenPointHover: require('app/static/img/pins/icn-container-ok-hover-ASY.png'),
      bpGreenPoint: require('app/static/img/pins/icn-bunker-ok-ASY.png'),
      bpGreenPointClick: require('app/static/img/pins/icn-bunker-ok-selected-ASY.png'),
      bpGreenPointHover: require('app/static/img/pins/icn-bunker-ok-hover-ASY.png'),
      msoMixedGreen: require('app/static/img/pins/mso_mixed_green.png'),
      msoMixedGreenClick: require('app/static/img/pins/mso_mixed_green_onclick.png'),
      msoMixedGreenHover: require('app/static/img/pins/mso_mixed_green__hover.png'),
      msoMixedGreenPoint: require('app/static/img/pins/icn-mix-ok-ASY.png'),
      msoMixedGreenPointClick: require('app/static/img/pins/icn-mix-ok-selected-ASY.png'),
      msoMixedGreenPointHover: require('app/static/img/pins/icn-mix-ok-hover-ASY.png'),

      // Red mso pins
      kpRed: require('app/static/img/pins/kp_red.png'),
      kpRedClick: require('app/static/img/pins/kp_red__onclick.png'),
      kpRedHover: require('app/static/img/pins/kp_red__hover.png'),
      kpRedPoint: require('app/static/img/pins/icn-container-nook-ASY.png'),
      kpRedPointClick: require('app/static/img/pins/icn-container-nook-selected-ASY.png'),
      kpRedPointHover: require('app/static/img/pins/icn-container-nook-hover-ASY.png'),
      msoMixedRed: require('app/static/img/pins/mso_mixed_red.png'),
      msoMixedRedClick: require('app/static/img/pins/mso_mixed_red_onclick.png'),
      msoMixedRedHover: require('app/static/img/pins/mso_mixed_red__hover.png'),
      msoMixedRedPoint: require('app/static/img/pins/icn-mix-nook-ASY.png'),
      msoMixedRedPointClick: require('app/static/img/pins/icn-mix-nook-selected-ASY.png'),
      msoMixedRedPointHover: require('app/static/img/pins/icn-mix-nook-hover-ASY.png'),

      // Gray mso pins
      msoEmpty: require('app/static/img/pins/icn-mso-empty.png'),
      msoEmptyClick: require('app/static/img/pins/icn-mso-empty-selected.png'),
      msoEmptyHover: require('app/static/img/pins/icn-mso-empty-hover.png'),
      msoEmptyPoint: require('app/static/img/pins/icn-mso-empty-ASY.png'),
      msoEmptyPointClick: require('app/static/img/pins/icn-mso-empty-selected-ASY.png'),
      msoEmptyPointHover: require('app/static/img/pins/icn-mso-empty-hover-ASY.png'),

      // Blue and white mso pins
      kpBlue: require('app/static/img/pins/kp_blue.png'),
      kpBlueHover: require('app/static/img/pins/kp_blue__hover.png'),
      kpWhite: require('app/static/img/pins/kp_white.png'),
      kpWhiteHover: require('app/static/img/pins/kp_white__hover.png'),
      msoMixedBlue: require('app/static/img/pins/mso_mixed_blue.png'),
      msoMixedBlueHover: require('app/static/img/pins/mso_mixed_blue__hover.png'),
      msoMixedWhite: require('app/static/img/pins/mso_mixed_white.png'),
      msoMixedWhiteHover: require('app/static/img/pins/mso_mixed_white__hover.png'),
      mkdBlue: require('app/static/img/pins/mkd_blue.png'),
      mkdBlueClick: require('app/static/img/pins/mkd_blue__onclick.png'),
      mkdBlueHover: require('app/static/img/pins/mkd_blue__hover.png'),
      mkdWhite: require('app/static/img/pins/mkd_white.png'),
      mkdBigRed: require('app/static/img/pins/mkd_big_red.png'),
      bpBlue: require('app/static/img/pins/bp_blue.png'),
      bpBlueHover: require('app/static/img/pins/bp_blue__hover.png'),
      bpWhite: require('app/static/img/pins/bp_white.png'),
      bpWhiteHover: require('app/static/img/pins/bp_white__hover.png'),

      // Other pins
      maintaining: require('app/static/img/pins/maintaining.png'),
      maintainingClick: require('app/static/img/pins/maintaining__onclick.png'),
      maintainingHover: require('app/static/img/pins/maintaining__hover.png'),
      storageObjects: require('app/static/img/pins/storage_objects.png'),
      recyclables: require('app/static/img/pins/recyclables.png'),
      storageObjectsClick: require('app/static/img/pins/storage_objects__onclick.png'),
      recyclablesClick: require('app/static/img/pins/recyclables__onclick.png'),
      redCrossSign: require('app/static/img/pins/red_cross_sign.png'),
      addressForRevision: require('app/static/img/pins/icn-pin-address-red.png'),
    },
  },
  AO_PHYSICAL_ADDRESS: 'г. Москва, ул. Большая Полянка, д. 42, стр. 1',
  MOSCOW_CENTER_COORDS: {
    latitude: 55.753241,
    longitude: 37.622377,
  },
};

angular.module('tko.backend').constant('CONST', CONST);
