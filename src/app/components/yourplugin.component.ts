import {Component} from 'angular2/core';

@Component({
  selector: 'plugin',
  template: `
  <StackLayout>
    <SegmentedBar [items]="options" (selectedIndexChanged)="changeOption($event)"></SegmentedBar>
  </StackLayout>
  `
})
export class TNSYourPluginComponent {
  public options: Array<any> = [
    { value: 'ng2 is great.', title: 'Angular 2' },
    { value: '{N} makes it better.', title: 'NativeScript' }
  ];

  public changeOption(e: any) {
    console.log(this.options[e.newIndex].value);
  }
}
