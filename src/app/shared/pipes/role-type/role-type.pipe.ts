import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'roleType'
})
export class RoleTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === null) {
      return null;
    } else if (value === 'admin') {
      return 'Elder'
    } else if (value === 'coLeader') {
      return 'Co-Leader';
    } else if (value === 'leader') {
      return 'Leader';
    } else if (value === 'member') {
      return 'Member';
    }
    return value;
  }

}
