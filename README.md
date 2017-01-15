## Develop a nativescript-angular plugin now

[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://github.com/mgechev/angular2-style-guide)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/NathanWalker/nativescript-ngx-plugin-seed/status.svg)](https://david-dm.org/NathanWalker/nativescript-ngx-plugin-seed#info=dependencies)

| ![Demo](/resources/demo.png) |
| :---: |
| Android and iPhone running the same {N} + Angular2 plugin. |

The seed is setup to allow you to create a [nativescript-angular](https://github.com/NativeScript/nativescript-angular) plugin quickly.

* Sample demo app ready for you to try out your plugin as you develop it.
* Sample `Component`, `Directive`, `Pipe` and `Service` created for you (*tests coming soon*) to get started right away.
* Customize whichever is helpful to your plugin and remove the others.

## Get started

1. Download a zip of this seed.
2. `cd ... path/to/unzip/folder ...`
3. `npm install -g nativescript`
4. `npm run setup`
5. Get to work.

## Changes needed

You will want to change a couple things for your plugin.

1. Replace all instances of `nativescript-ngx-yourplugin` with name of *your* plugin:
  * Here: https://github.com/NathanWalker/nativescript-ngx-plugin-seed/blob/master/package.json
  * Here: https://github.com/NathanWalker/nativescript-ngx-plugin-seed/blob/master/src/package.json#L22
  * Here: https://github.com/NathanWalker/nativescript-ngx-plugin-seed/blob/master/tsconfig.json#L13 (And likely modify more to tailor to your specific plugins typescript definition needs)
2. Modify the demo to import your plugin files, etc: 
  * Here:  https://github.com/NathanWalker/nativescript-ngx-plugin-seed/blob/master/src/app/main.ts#L12
  * Here:  https://github.com/NathanWalker/nativescript-ngx-plugin-seed/blob/master/src/app/main.ts#L18
  * Here:  https://github.com/NathanWalker/nativescript-ngx-plugin-seed/blob/master/src/app/app.component.ts#L3
  * Here:  https://github.com/NathanWalker/nativescript-ngx-plugin-seed/blob/master/src/app/app.component.ts#L22
  
3. Replace the 'YourPluginModule' with *your* plugin module name:
  * Here: https://github.com/NathanWalker/nativescript-ngx-plugin-seed/blob/master/nativescript-ngx-yourplugin.ts#L30
  * Here: https://github.com/NathanWalker/nativescript-ngx-plugin-seed/blob/master/src/app/main.ts#L12
  * Here: https://github.com/NathanWalker/nativescript-ngx-plugin-seed/blob/master/src/app/main.ts#L18
  
4. If you modified the name of services,components,... or created new ones that you want to export them:
  * Here: https://github.com/NathanWalker/nativescript-ngx-plugin-seed/blob/master/nativescript-ngx-yourplugin.ts#L3-L28

  

## Develop Workflow

Make changes to plugin files, then:

```
npm run demo.ios

// or...

npm run demo.android
```

### Build Plugin

You'll want to run this before publishing.

```
npm run build
```

### Publishing

`packagedev.json` should always mirror your `package.json` for development.
After installing dependencies for your plugin and running your demo, just copy contents of `package.json` to `packagedev.json`.

Then to publish:

1. Setup `packagepublish.json` the way you want your plugin published (Bumping correct version and setting the description, author, keywords, repo, main, and typings correctly for instance).
2. `node prep publish` (This will set your `package.json` to be your `packagepublish.json`).
3. `npm run build` (Create a fresh build of your library)
4. `npm publish`

### Back to development

After publishing, it's a good idea to set your `package.json` back to development mode before committing your changes. Your `packagedev.json` should be exactly what your development mode package was before publishing above.

1. `node prep dev`
2. Continue developing.

### Troubleshooting

When preparing your demo if you get the following error message:

```
Plugin "nativescript-ngx-yourplugin" is not installed.
Sending exception report (press Ctrl+C to stop).....
```
This means your plugin has not been copied over to the demo project, or failed when running the demo command previously. To resolve this run ``npm run repair``.

## Why the TNS prefixed name?

`TNS` stands for **T**elerik **N**ative**S**cript

iOS uses classes prefixed with `NS` (stemming from the [NeXTSTEP](https://en.wikipedia.org/wiki/NeXTSTEP) days of old):
https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSString_Class/

To avoid confusion with iOS native classes, `TNS` is used instead.

# License

[MIT](/LICENSE)
