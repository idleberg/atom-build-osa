'use babel';

import os from 'os';

// Package settings
import meta from '../package.json';

// This package depends on build, make sure it's installed
require('atom-package-deps').install(meta.name);

export function provideBuilder() {
  return class ApplescriptProvider {
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
      const errorMatch = [
        // '(?<file>(?:[^ !$`&*()+]|(?:\\[ !$`&*()+]))+):(\d+):(?<line>\\d+):(?<col>\\d+)'
      ];

      return [
        {
          name: 'AppleScript: Run',
          exec: 'osascript',
          args: [ '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          keymap: 'alt-cmd-b',
          atomCommandName: 'applescript:run',
          errorMatch: errorMatch
        },
        {
          name: 'AppleScript: Compile',
          exec: 'osacompile',
          args: [ '-o', '{FILE_ACTIVE_NAME_BASE}.scpt', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          keymap: 'ctrl-alt-cmd-b',
          atomCommandName: 'applescript:compile',
          errorMatch: errorMatch
        }
      ];
    }
  };
}
