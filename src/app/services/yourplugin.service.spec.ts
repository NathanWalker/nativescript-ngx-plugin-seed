// import {
//   async,
//   it,
//   describe,
//   expect,
//   inject,
//   beforeEach,
//   beforeEachProviders
// } from '@angular/core/testing';

// import {provide} from '@angular/core';
// import {TNSYourPluginService} from './yourplugin.service';

// import * as app from 'application';
// import * as dialogs from 'ui/dialogs';

// class AppMock {
//   public get android() {
//     return false;
//   }
//   public get ios() {
//     return true;
//   }
// }
// class DialogMock {
//   public get android() {
//     return false;
//   }
//   public get ios() {
//     return true;
//   }
// }

// describe('TNSYourPluginService', () => {

//   beforeEach(() => {
//     spyOn(dialogs, 'alert');
//   });  
//   beforeEachProviders(() => {
//     return [
//       provide(app, { useClass: AppMock }),
//       provide(dialogs, { useClass: DialogMock }),
//       TNSYourPluginService
//     ]
//   });

//   it('should alert message', inject([TNSYourPluginService], (plugin:TNSYourPluginService) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         expect(dialogs.alert).toHaveBeenCalledWith('');
//       }, 2200);
//     });
//   }));

// });
