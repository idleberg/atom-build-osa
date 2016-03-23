[![apm](https://img.shields.io/apm/l/build-applescript.svg?style=flat-square)](https://atom.io/packages/build-applescript)
[![apm](https://img.shields.io/apm/v/build-applescript.svg?style=flat-square)](https://atom.io/packages/build-applescript)
[![apm](https://img.shields.io/apm/dm/build-applescript.svg?style=flat-square)](https://atom.io/packages/build-applescript)
[![Travis](https://img.shields.io/travis/idleberg/atom-build-applescript.svg?style=flat-square)](https://travis-ci.org/idleberg/atom-build-applescript)
[![David](https://img.shields.io/david/dev/idleberg/atom-build-applescript.svg?style=flat-square)](https://david-dm.org/idleberg/atom-build-applescript#info=dependencies)

# build-applescript

[Atom Build](https://atombuild.github.io/) provider for [`osascript`][osascript]/[`osacompile`](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/osacompile.1.html), runs or compiles AppleScript

## Installation

### apm

* Install package `apm install build-applescript` (or use the GUI)

### GitHub

1. Change directory `cd ~/.atom/packages/`
2. Clone repository `git clone https://github.com/idleberg/atom-build-applescript build-applescript`

## Usage

### Build

Before you can build, select an active target with your preferred build option.

Available targets:

* `Applescript: Compile` — compile with [`osacompile`][osacompile] (<kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>B</kbd>)
* `Applescript: Run` – run with [`osascript`][osascript] (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>B</kbd>)

### Shortcuts

Here's a reminder of the default shortcuts you can use with this package:

**Choose target**

<kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>T</kbd> or <kbd>F7</kbd>

**Toggle build panel**

<kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>V</kbd> or <kbd>F8</kbd>

**Build script**

<kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>B</kbd> or <kbd>F9</kbd>

## License

This work is licensed under the [The MIT License](LICENSE.md).

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/atom-build-applescript) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`

[osascript]: https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/osascript.1.html
[osacompile]: https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/osacompile.1.html