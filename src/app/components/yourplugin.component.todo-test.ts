import {
  it,
  describe,
  xdescribe,
  expect,
  injectAsync,
  TestComponentBuilder,
  beforeEach,
  beforeEachProviders
} from 'angular2/testing';
import {Component} from 'angular2/core';

import {TNSYourPluginComponent} from './yourplugin.component';

// TODO: Find out best way to test
xdescribe('TNSYourPluginComponent', () => {
  let fixture;
  
  //setup
  beforeEachProviders(() => [
    TestComponentBuilder
  ]);

  beforeEach(injectAsync([TestComponentBuilder], tcb => {
    return tcb.overrideTemplate(TNSYourPluginComponent, (`
    <StackLayout>
      <SegmentedBar (selectedIndexChanged)="changeOption($event)"></SegmentedBar>
    </StackLayout>
    `)).createAsync(TestComponent)
      .then(f => fixture = f);
  }));

  it('should ...', () => {
    let container = fixture.componentInstance,
      div = fixture.nativeElement.querySelector('StackLayout');
    expect(div.textContent).toBe('');
  });

  @Component({
    selector: 'test',
    directives: [TNSYourPluginComponent],
    template: `
    <plugin></plugin>
    `
  })
  class TestComponent {}  

});
