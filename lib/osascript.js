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
      return true;
      if (os.platform() === 'darwin') {
        return true;
      }
    }

    settings() {
      const errorMatch = [
        // '(?<file>(?:[^ !$`&*()+]|(?:\\[ !$`&*()+]))+):(\d+):(?<line>\\d+):(?<col>\\d+)'
      ];

      return [
        {
          name: 'Run AppleScript',
          exec: 'osascript',
          args: [ '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          atomCommandName: 'applescript:run',
          errorMatch: errorMatch
        },
        {
          name: 'Compile AppleScript',
          exec: 'osacompile',
          args: [ '-o', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          atomCommandName: 'applescript:compile',
          errorMatch: errorMatch
        }
      ];
    }
  };
}