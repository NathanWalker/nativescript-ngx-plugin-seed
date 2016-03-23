## Develop a nativescript-angular plugin now

[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://github.com/mgechev/angular2-style-guide)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/NathanWalker/nativescript-ng2-plugin-seed/status.svg)](https://david-dm.org/NathanWalker/nativescript-ng2-plugin-seed#info=dependencies) [![devDependency Status](https://david-dm.org/NathanWalker/nativescript-ng2-plugin-seed/dev-status.svg)](https://david-dm.org/NathanWalker/nativescript-ng2-plugin-seed#info=devDependencies)

The seed is setup to allow you to create a `nativescript-angular` plugin quickly.
There's a sample app ready for you to demo your plugin.
There's also 1 of each (`Component`, `Directive`, `Pipe`, `Service`) created for you (*tests coming soon*) to get started right away. Customize whichever is helpful to your plugin and remove the others.

| ![Demo](/resources/demo.png) |
| :---: |
| Android and iPhone running the same {N} + Angular2 plugin. |

## Getting started

1. Download a zip of this seed.
2. `npm install -g typescript`
3. `cd ... path/to/unzip/folder ...`
4. `npm install nativescript -g`
5. `npm install`
6. Get to work.

* [Developing](#developing)
* [Why the `TNS` prefixed name?](#why-the-tns-prefixed-name)

## Developing

### Run Demo App to Try Plugin

```
npm run demo.ios

// or...

npm run demo.android
```

### Build Plugin

```
npm run build
```

### Testing

```
npm test
```

## Why the TNS prefixed name?

`TNS` stands for **T**elerik **N**ative**S**cript

iOS uses classes prefixed with `NS` (stemming from the [NeXTSTEP](https://en.wikipedia.org/wiki/NeXTSTEP) days of old):
https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSString_Class/

To avoid confusion with iOS native classes, `TNS` is used instead.

# License

[MIT](/LICENSE)
