# build-osa

[![apm](https://flat.badgen.net/apm/license/build-osa)](https://atom.io/packages/build-osa)
[![apm](https://flat.badgen.net/apm/v/build-osa)](https://atom.io/packages/build-osa)
[![apm](https://flat.badgen.net/apm/dl/build-osa)](https://atom.io/packages/build-osa)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/atom-build-osa)](https://circleci.com/gh/idleberg/atom-build-osa)
[![David](https://flat.badgen.net/david/dev/idleberg/atom-build-osa)](https://david-dm.org/idleberg/atom-build-osa?type=dev)

[Atom Build](https://atombuild.github.io/) provider for Apple's [Open Scripting Architecture][osa], [runs][osascript] or [compiles][osacompile] AppleScript and JavaScript for Automation (JXA)

## Installation

### apm

Install `build-osa` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install build-osa`

### Using Git

Change to your Atom packages directory:

Change to your Atom packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.atom\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.atom\packages
```

**Linux & macOS**

```bash
$ cd ~/.atom/packages/
```

Clone repository as `build-osa`:

```bash
$ git clone https://github.com/idleberg/atom-build-osa build-osa
```

Inside the cloned directory, install Node dependencies:

```bash
$ yarn || npm install
```

You should now be setup to build the package:

```bash
$ yarn build || npm run build
```

## Usage

### Build

Before you can build, select an active target with your preferred build option.

Available targets:

* `AppleScript: Compile Application`
* `AppleScript: Compile Script`
* `AppleScript: Compile Script bundle`
* `AppleScript: Run Script`
* `JXA: Compile Application`
* `JXA: Compile Script`
* `JXA: Compile Script bundle`
* `JXA: Run Script`

### Shortcuts

Here's a reminder of the default shortcuts you can use with this package:

| Keyboard Shortcut                                          | Description        |
|------------------------------------------------------------|--------------------|
| <kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>T</kbd> / <kbd>F7</kbd> | Choose target      |
| <kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>V</kbd> / <kbd>F8</kbd> | Toggle build panel |
| <kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>B</kbd> / <kbd>F9</kbd> | Build script       |

## License

This work is licensed under the [The MIT License](LICENSE).

[osa]: https://developer.apple.com/library/mac/documentation/AppleScript/Conceptual/AppleScriptX/Concepts/osa.html
[osascript]: https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/osascript.1.html
[osacompile]: https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/osacompile.1.html
