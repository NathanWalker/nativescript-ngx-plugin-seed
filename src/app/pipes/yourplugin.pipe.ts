import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'plugin'
})
export class TNSYourPluginPipe implements PipeTransform {
  transform(value) {
    return `${value}...many possibilities here.`;
  }
}
