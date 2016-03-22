'use babel';

import fs from 'fs';
import os from 'os';
import path from 'path';

export function provideBuilder() {

  return class MakensisProvider {
    constructor(cwd) {
      this.cwd = cwd;
    }

    getNiceName() {
      return 'AppleScript';
    }

    isEligible() {
      if (os.platform() === 'darwin') {
        if (fs.existsSync(path.join(this.cwd, path.basename(this.cwd)))) {
          return true;
        }
        return false;
      }
      return false;
    }

    settings() {
      const errorMatch = [
        '(?<file>(?:[^ !$`&*()+]|(?:\\[ !$`&*()+]))+):(\d+):(?<line>\\d+):(?<col>\\d+)'
      ];

      return {
        name: 'Run AppleScript',
        exec: 'osascript',
        args: [ '{FILE_ACTIVE}' ],
        cwd: '{FILE_ACTIVE_PATH}',
        sh: false,
        errorMatch: errorMatch
      }
    }
  };
}