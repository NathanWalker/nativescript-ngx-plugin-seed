import { NgModule } from "@angular/core";
// for standard export at bottom
import {TNSYourPluginComponent} from './src/app/components/yourplugin.component';
import {TNSYourPluginDirective} from './src/app/directives/yourplugin.directive';
import {TNSYourPluginPipe} from './src/app/pipes/yourplugin.pipe';
import {TNSYourPluginService} from './src/app/services/yourplugin.service';

// for manual imports
export * from './src/app/components/yourplugin.component';
export * from './src/app/directives/yourplugin.directive';
export * from './src/app/pipes/yourplugin.pipe';
export * from './src/app/services/yourplugin.service';

@NgModule({
  declarations: [
    TNSYourPluginComponent,
    TNSYourPluginDirective,
    TNSYourPluginPipe   
  ],
  providers: [
    TNSYourPluginService
  ],
  exports: [
    TNSYourPluginComponent,
    TNSYourPluginDirective,
    TNSYourPluginPipe   
  ]
})

export class YourPluginModule {}