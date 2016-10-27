import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
// angular 
import { NgModule } from "@angular/core";


// import {TNSYourPluginComponent} from './components/yourplugin.component';
// import {TNSYourPluginDirective} from './directives/yourplugin.directive';
// import {TNSYourPluginPipe} from './pipes/yourplugin.pipe';
// import {TNSYourPluginService} from './services/yourplugin.service';
import {DemoComponent} from './app.component';

import {YourPluginModule} from "nativescript-ng2-yourplugin";


@NgModule({
    imports: [
      NativeScriptModule,
      YourPluginModule
    ],
    declarations: [
      DemoComponent,      
    ],
    bootstrap: [
      DemoComponent
    ],
})


class DemoModule {}
platformNativeScriptDynamic().bootstrapModule(DemoModule);