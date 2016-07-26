# build-applescript

[![apm](https://img.shields.io/apm/l/build-applescript.svg?style=flat-square)](https://atom.io/packages/build-applescript)
[![apm](https://img.shields.io/apm/v/build-applescript.svg?style=flat-square)](https://atom.io/packages/build-applescript)
[![apm](https://img.shields.io/apm/dm/build-applescript.svg?style=flat-square)](https://atom.io/packages/build-applescript)
[![Travis](https://img.shields.io/travis/idleberg/atom-build-applescript.svg?style=flat-square)](https://travis-ci.org/idleberg/atom-build-applescript)
[![David](https://img.shields.io/david/dev/idleberg/atom-build-applescript.svg?style=flat-square)](https://david-dm.org/idleberg/atom-build-applescript#info=dependencies)
[![David](https://img.shields.io/david/idleberg/atom-build-applescript.svg?style=flat-square)](https://david-dm.org/idleberg/atom-build-applescript#info=dependencies)

[Atom Build](https://atombuild.github.io/) provider for [`osascript`][osascript]/[`osacompile`](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/osacompile.1.html), runs or compiles AppleScript

## Installation

### apm

Install `build-applescript` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install build-applescript`

### GitHub

Change to your Atom packages directory:

```bash
# Windows
$ cd %USERPROFILE%\.atom\packages

# Linux & macOS
$ cd ~/.atom/packages/
```

Clone repository as `build-applescript`:

```bash
$ git clone https://github.com/idleberg/atom-build-applescript build-applescript
```

## Usage

### Build

Before you can build, select an active target with your preferred build option.

Available targets:

* `Applescript: Compile` — compile with [`osacompile`][osacompile] (<kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>B</kbd>)
* `Applescript: Run` – run with [`osascript`][osascript] (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>B</kbd>)

### Shortcuts

Here's a reminder of the default shortcuts you can use with this package:

| Keyboard Shortcut                                          | Description        |
|------------------------------------------------------------|--------------------|
| <kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>T</kbd> / <kbd>F7</kbd> | Choose target      |
| <kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>V</kbd> / <kbd>F8</kbd> | Toggle build panel |
| <kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>B</kbd> / <kbd>F9</kbd> | Build script       |

## License

This work is licensed under the [The MIT License](LICENSE.md).

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/atom-build-applescript) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`

[osascript]: https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/osascript.1.html
[osacompile]: https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/osacompile.1.html