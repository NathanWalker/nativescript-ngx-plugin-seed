import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'plugin'
})
export class TNSYourPluginPipe implements PipeTransform {
  transform(value) {
    return `${value}...many possibilities here.`;
  }
}
