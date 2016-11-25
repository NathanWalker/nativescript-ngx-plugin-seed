// import {
//   async,
//   it,
//   describe,
//   expect,
//   inject,
//   beforeEach,
//   beforeEachProviders
// } from '@angular/core/testing';
// import {
//   TestComponentBuilder
// } from '@angular/compiler/testing';
// import {Component} from '@angular/core';

// import {TNSYourPluginDirective} from './yourplugin.directive';

// describe('TNSYourPluginDirective', () => {
//   let fixture;
  
//   //setup
//   beforeEachProviders(() => [
//     TestComponentBuilder
//   ]);

//   beforeEach(inject([TestComponentBuilder], tcb => {
//     return tcb
//       .createAsync(TestComponent)
//       .then(f => fixture = f);
//   }));

//   it('should add a class', () => {
//     let container = fixture.componentInstance,
//       div = fixture.nativeElement.querySelector('Label');
//     expect(div.getAttribute('class')).toBe('sample-class');
//   });

// });

// @Component({
//   selector: 'test',
//   directives: [TNSYourPluginDirective],
//   template: `
//   <Label plugin></Label>
//   `
// })
// class TestComponent {}
