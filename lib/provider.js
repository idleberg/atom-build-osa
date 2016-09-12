'use babel';

import { install } from 'atom-package-deps';
import os from 'os';

// Package settings
import meta from '../package.json';

// This package depends on build, make sure it's installed
export function activate() {
  if (!atom.inSpecMode()) {
    install(meta.name);
  }
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
      if (os.platform() === 'darwin') {
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
