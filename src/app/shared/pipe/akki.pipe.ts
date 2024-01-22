import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'akki'
})
export class AkkiPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.toUpperCase()
  }

}
