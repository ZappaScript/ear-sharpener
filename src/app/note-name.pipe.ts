import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noteName'
})
export class NoteNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value){
      case 0:
      return 'Do';
      case 1:
      return 'Do#';
      case 2:
      return 'Re';
      case 3:
      return 'Re#';
      case 4:
      return 'Mi'
      case 5:
      return 'Fa'
      case 6:
      return 'Fa#'
      case 7:
      return 'Sol'
      case 8:
      return 'Sol#'
      case 9:
      return 'La'
      case 10:
      return 'La#'
      case 11:
      return 'Si'
      default:
      return 'Error'
    }
    return null;
  }

}
