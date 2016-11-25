import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';

// for standard export at bottom
import {TNSYourPluginComponent} from './src/app/components/yourplugin.component';
import {TNSYourPluginDirective} from './src/app/directives/yourplugin.directive';
import {TNSYourPluginPipe} from './src/app/pipes/yourplugin.pipe';
import {TNSYourPluginService} from './src/app/services/yourplugin.service';

// convenience collection
// helpful if you need to compose your own module
export const TNSYourPluginDeclarations: any[] = [
  TNSYourPluginComponent,
  TNSYourPluginDirective,
  TNSYourPluginPipe
];

// for manual imports
export * from './src/app/components/yourplugin.component';
export * from './src/app/directives/yourplugin.directive';
export * from './src/app/pipes/yourplugin.pipe';
export * from './src/app/services/yourplugin.service';

@NgModule({
  imports: [
    NativeScriptModule
  ],
  declarations: [
    TNSYourPluginDeclarations
  ],
  providers: [
    TNSYourPluginService
  ],
  exports: [
    NativeScriptModule,
    TNSYourPluginDeclarations
  ]
})
export class TNSYourPluginModule {}
