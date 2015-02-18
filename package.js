var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-icon',
  summary : 'Semantic UI - Icon (official): Single component release of icon',
  version : '1.9.9',
  git     : 'git://github.com/Semantic-Org/UI-Icon.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
        'assets/fonts/icons.eot',
    'assets/fonts/icons.otf',
    'assets/fonts/icons.svg',
    'assets/fonts/icons.ttf',
    'assets/fonts/icons.woff',

  ], where);
});
