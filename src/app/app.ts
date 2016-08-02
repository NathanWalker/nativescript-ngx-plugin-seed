import 'reflect-metadata';

// nativescript
import {nativeScriptBootstrap} from 'nativescript-angular/application';

// angular 
import {Component, provide} from '@angular/core';

// app
import {
  TNSYourPluginComponent,
  TNSYourPluginDirective,
  TNSYourPluginPipe,
  TNSYourPluginService
} from 'nativescript-ng2-yourplugin';

@Component({
  selector: 'app',
  template: `
  <ActionBar title="NativeScript + Angular2 Plugin Seed"> 
  </ActionBar>
  <StackLayout>
    <Label [text]="message" plugin></Label>
    <Label [text]="'Using a pipe' | plugin"></Label>
    <plugin></plugin>
    <Label text="Now get to work." class="important"></Label>
  </StackLayout>
  `,
  directives: [
    TNSYourPluginComponent,
    TNSYourPluginDirective
  ],
  pipes: [TNSYourPluginPipe],
  providers: [TNSYourPluginService]
})
class DemoComponent {
  public message: string = "Your {N} + Angular 2 plugin is working."
  
  constructor(private pluginService: TNSYourPluginService) {}
}

nativeScriptBootstrap(DemoComponent, []);
