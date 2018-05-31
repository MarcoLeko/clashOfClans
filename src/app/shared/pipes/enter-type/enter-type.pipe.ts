import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'enterTypePipe'
})
export class EnterTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === null) {
      return null;
    }

    if (value === 'inviteOnly') {
      return 'Invite only'
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
