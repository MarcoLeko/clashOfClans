import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'warFrequency'
})
export class WarFrequencyPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value === 'always') {
      return 'Always';
    } else if(value === 'moreThanOncePerWeek') {
      return 'More than once per week';
    } else if (value === 'oncePerWeek') {
      return 'Once per week'
    }  else if (value === 'lessThanOncePerWeek') {
      return 'Less than once per week'
    }   else if (value === 'never') {
      return 'Never'
    }    else if (value === 'unknown') {
      return 'Unknown'
    }
    return null;
  }

}
