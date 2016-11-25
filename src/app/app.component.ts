import {Component} from '@angular/core';

import {TNSYourPluginService} from "nativescript-ng2-yourplugin";

@Component({
  selector: 'app',
  template: `
  <ActionBar title="NativeScript + Angular Plugin Seed"> 
  </ActionBar>
  <StackLayout>
    <Label [text]="message" plugin></Label>
    <Label [text]="'Using a pipe' | plugin"></Label>
    <plugin></plugin>
    <Label text="Now get to work." class="important"></Label>
  </StackLayout>
  `,

})
export class DemoComponent {
  public message: string = "Your {N} + Angular plugin is working."
  
  constructor(private pluginService: TNSYourPluginService) {}
}
