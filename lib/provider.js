'use babel';

import { platform } from 'os';

// Package settings
import meta from '../package.json';

export const config = {
  manageDependencies: {
    title: 'Manage Dependencies',
    description: 'When enabled, third-party dependencies will be installed automatically',
    type: 'boolean',
    default: true,
    order: 0
  },
  alwaysEligible: {
    title: 'Always Eligible',
    description: 'The build provider will be available in your project, even when not eligible',
    type: 'boolean',
    default: false,
    order: 1
  }
};

// This package depends on build, make sure it's installed
export function activate() {
  if (atom.config.get(meta.name + '.manageDependencies') === true) {
    this.satisfyDependencies();
  }
}

export function satisfyDependencies() {
  let k;
  let v;

  require('atom-package-deps').install(meta.name);

  const ref = meta['package-deps'];
  const results = [];

  for (k in ref) {
    if (typeof ref !== 'undefined' && ref !== null) {
      v = ref[k];
      if (atom.packages.isPackageDisabled(v)) {
        if (atom.inDevMode()) {
          console.log('Enabling package \'' + v + '\'');
        }
        results.push(atom.packages.enablePackage(v));
      } else {
        results.push(void 0);
      }
    }
  }
  return results;
}

export function provideBuilder() {
  return class OsaProvider {
    constructor(cwd) {
      this.cwd = cwd;
    }

    getNiceName() {
      return 'AppleScript';
    }

    isEligible() {
      if (atom.config.get(meta.name + '.alwaysEligible') === true) {
        return true;
      }

      if (platform() === 'darwin') {
        return true;
      }
      return false;
    }

    settings() {
      // const errorMatch = [
      //   '(?<file>(?:[^ !$`&*()+]|(?:\\[ !$`&*()+]))+):(\d+):(?<line>\\d+):(?<col>\\d+)'
      // ];

      return [
        {
          name: 'AppleScript: Run Script',
          exec: 'osascript',
          args: [ '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          atomCommandName: 'AppleScript:run-script'
        },
        {
          name: 'AppleScript: Compile Script',
          exec: 'osacompile',
          args: [ '-o', '{FILE_ACTIVE_NAME_BASE}.scpt', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          atomCommandName: 'AppleScript:compile-script'
        },
        {
          name: 'AppleScript: Compile Script bundle',
          exec: 'osacompile',
          args: [ '-o', '{FILE_ACTIVE_NAME_BASE}.scptd', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          atomCommandName: 'AppleScript:compile-script-bundle'
        },
        {
          name: 'AppleScript: Compile Application',
          exec: 'osacompile',
          args: [ '-o', '{FILE_ACTIVE_NAME_BASE}.app', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          atomCommandName: 'AppleScript:compile-application'
        },
        {
          name: 'JXA: Run Script',
          exec: 'osascript',
          args: [ '-l', 'JavaScript', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          atomCommandName: 'JXA:run-script'
        },
        {
          name: 'JXA: Compile Script',
          exec: 'osacompile',
          args: [ '-l', 'JavaScript', '-o', '{FILE_ACTIVE_NAME_BASE}.scpt', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          atomCommandName: 'JXA:compile-script'
        },
        {
          name: 'JXA: Compile Script bundle',
          exec: 'osacompile',
          args: [ '-l', 'JavaScript', '-o', '{FILE_ACTIVE_NAME_BASE}.scptd', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          atomCommandName: 'JXA:compile-script-bundle'
        },
        {
          name: 'JXA: Compile Application',
          exec: 'osacompile',
          args: [ '-l', 'JavaScript', '-o', '{FILE_ACTIVE_NAME_BASE}.app', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          atomCommandName: 'JXA:compile-application'
        }
      ];
    }
  };
}
