import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
// angular 
import { NgModule } from "@angular/core";

import { DemoComponent } from './app.component';

import { TNSYourPluginModule } from "nativescript-ng2-yourplugin";


@NgModule({
    imports: [
      NativeScriptModule,
      TNSYourPluginModule
    ],
    declarations: [
      DemoComponent,      
    ],
    bootstrap: [
      DemoComponent
    ],
})
class DemoModule { }

platformNativeScriptDynamic().bootstrapModule(DemoModule);
