import { Pipe, PipeTransform } from '@angular/core';
import { List } from 'src/models';

@Pipe({
  name: 'filterFinished',
  pure: false
})
export class FilterFinishedPipe implements PipeTransform {

  transform(lists: List[], finished: boolean = false): any {
    return lists.filter(list => {
      return list.finished === finished;
    });
  }

}
