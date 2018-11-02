import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
import observeCursor from './observe-cursor';
import autorun from './autorun';

checkNpmVersions({
  'mobx': '4.5.2'
}, 'malua:tracker-mobx-autorun');

export default autorun;
export const observe = observeCursor;
