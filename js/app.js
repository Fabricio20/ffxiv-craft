'use strict';

// Declare app level module which depends on filters, and services
angular.module('ffxivCraftOptWeb', [
  'ngTouch',
  'ui.bootstrap',
  'pascalprecht.translate',
  'lvl.directives.dragdrop',
  'ffxivCraftOptWeb.services',
  'ffxivCraftOptWeb.services.actions',
  'ffxivCraftOptWeb.services.localprofile',
  'ffxivCraftOptWeb.services.recipelibrary',
  'ffxivCraftOptWeb.services.simulator',
  'ffxivCraftOptWeb.services.solver',
  'ffxivCraftOptWeb.services.translateLocalStorage',
  'ffxivCraftOptWeb.services.xivdbtooltips',
  'ffxivCraftOptWeb.directives',
  'ffxivCraftOptWeb.filters',
  'ffxivCraftOptWeb.controllers'
])
  .config(function($translateProvider) {
    // Define the English translations here so that they are immediately
    // available without requiring a network round-trip.
    // Translation keys should be the actual English so that they can be used
    // as-is without having to redefine it here. The exception is when
    // interpolation is required: then the key should be an all uppercase token.
    $translateProvider.translations('en', {
    });

    $translateProvider.useStaticFilesLoader({
      prefix: 'locale/',
      suffix: '.json'
    });

    $translateProvider.useLoaderCache(true);

    // Backwards compatibility with v13.
    if (localStorage['lang']) {
      $translateProvider.preferredLanguage(localStorage['lang']);
      localStorage.removeItem('lang');
    }
    else {
      $translateProvider.preferredLanguage('en');
    }

    $translateProvider.useStorage('_translateLocalStorage');
  });
