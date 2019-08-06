import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let seconds = value % 60;
    let minutes = (value / 60) % 60;
    let hours = value /3600;
    let returnString = Math.floor(hours) > 0 ?  `${Math.floor(hours)}:` : '';
    returnString += `${Math.floor(minutes).toString().padStart(2, '0') }:`;
    returnString += `${seconds.toString().padStart(2, '0')}`;
    return returnString;
  }

}
