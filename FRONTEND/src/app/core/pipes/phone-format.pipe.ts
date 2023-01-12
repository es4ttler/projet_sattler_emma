import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform( number: string ) {

    console.log(number);
    let newStr = "+33 " + number.substr(1, 1) + " ";
    console.log(number,newStr);
    for (var i=2; i<number.length; i+=2){
      newStr+=number.substr(i, 2)+" ";

      
      console.log(number,newStr,i);
    }
    return newStr;

  }

}
