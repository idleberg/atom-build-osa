'use babel';

import os from 'os';

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
      const cwdPath = '{FILE_ACTIVE_PATH}';
      const errorMatch = [
        // '(?<file>(?:[^ !$`&*()+]|(?:\\[ !$`&*()+]))+):(\d+):(?<line>\\d+):(?<col>\\d+)'
      ];

      return [
        {
          name: 'AppleScript: Run',
          exec: 'osascript',
          args: [ '{FILE_ACTIVE}' ],
          cwd: cwdPath,
          sh: false,
          keymap: 'alt-cmd-b',
          atomCommandName: 'applescript:run',
          errorMatch: errorMatch
        },
        {
          name: 'AppleScript: Compile',
          exec: 'osacompile',
          args: [ '-o', '{FILE_ACTIVE}' ],
          cwd: cwdPath,
          sh: false,
          keymap: 'ctrl-alt-cmd-b',
          atomCommandName: 'applescript:compile',
          errorMatch: errorMatch
        }
      ];
    }
  };
}
