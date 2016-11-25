// nativescript
import { NativeScriptModule, platformNativeScriptDynamic } from 'nativescript-angular/platform';

// angular 
import {NgModule, Component} from '@angular/core';

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
  `
})
class DemoComponent {
  public message: string = "Your {N} + Angular 2 plugin is working."
  
  constructor(private pluginService: TNSYourPluginService) {}
}

@NgModule({
  imports: [
    NativeScriptModule
  ],
  declarations: [
    DemoComponent,
    TNSYourPluginComponent,
    TNSYourPluginDirective,
    TNSYourPluginPipe
  ],
  providers: [
    TNSYourPluginService
  ],
  bootstrap: [DemoComponent]
})
class DemoModule { }

platformNativeScriptDynamic().bootstrapModule(DemoModule);

