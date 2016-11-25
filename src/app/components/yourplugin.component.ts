import {Component} from '@angular/core';

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
    { value: 'ng is great.', title: 'Angular' },
    { value: '{N} makes it better.', title: 'NativeScript' }
  ];

  public changeOption(e: any) {
    console.log(this.options[e.newIndex].value);
  }
}
