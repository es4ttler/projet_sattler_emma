import { Directive, ElementRef } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';

@Directive({
  selector: '[appVerifyKeypress]'
})
export class VerifyKeypressDirective {

 pos :MatSnackBarHorizontalPosition = 'end';
  constructor(  private el: ElementRef, snackBar:MatSnackBar) {
    //only letters
    this.el.nativeElement.onkeypress = (evt: { which: number; preventDefault: () => void; }) => {
      if (evt.which < 65 || evt.which > 122) {
        evt.preventDefault();
        snackBar.open("Entrez uniquement des lettres","",{
          horizontalPosition : this.pos, 
          duration : 3000,
          panelClass:["red-snackbar"]});
        // console.log(this.el.nativeElement)//.parent.GetChild(3).html);//="echo";//ch.style.backgroundColor = 'red';
      }
      else {
        // this.el.nativeElement.firstChild.html="";
        snackBar.dismiss();
      }
    }
  }

}
