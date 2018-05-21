import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'isWarLogPublicPipe'
})
export class IsWarLogPublicPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === true) {
      return 'Yes'
    }
    return 'No';
  }

}
