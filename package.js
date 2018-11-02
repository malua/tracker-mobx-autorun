Package.describe({
  name: 'malua:tracker-mobx-autorun',
  version: '0.2.1',
  summary: 'Integrate Meteor reactive data with MobX using autorun functions',
  git: 'https://github.com/malua/tracker-mobx-autorun.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.use('tracker');
  api.use('tmeasday:check-npm-versions@0.3.1');
  api.mainModule('index.js', 'client');
});
