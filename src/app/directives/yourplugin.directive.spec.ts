import {
  it,
  describe,
  expect,
  injectAsync,
  TestComponentBuilder,
  beforeEach,
  beforeEachProviders
} from 'angular2/testing';
import {Component} from 'angular2/core';

import {TNSYourPluginDirective} from './yourplugin.directive';

describe('TNSYourPluginDirective', () => {
  let fixture;
  
  //setup
  beforeEachProviders(() => [
    TestComponentBuilder
  ]);

  beforeEach(injectAsync([TestComponentBuilder], tcb => {
    return tcb
      .createAsync(TestComponent)
      .then(f => fixture = f);
  }));

  it('should add a class', () => {
    let container = fixture.componentInstance,
      div = fixture.nativeElement.querySelector('Label');
    expect(div.getAttribute('class')).toBe('sample-class');
  });

});

@Component({
  selector: 'test',
  directives: [TNSYourPluginDirective],
  template: `
  <Label plugin></Label>
  `
})
class TestComponent {}
