import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ago'
})
export class AgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date();

    const diffDays = Math.round(Math.abs((firstDate.getTime() - value) / (oneDay)));

    return diffDays > 0 ? diffDays + 'd' : 'today';
  }

}
