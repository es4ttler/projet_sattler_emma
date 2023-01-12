import { Directive, ElementRef, Input } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';

@Directive({
  selector: '[appVerifyNumber]'
})
export class VerifyNumberDirective {

  @Input() size="";
  pos :MatSnackBarHorizontalPosition = 'end';

  constructor(private el: ElementRef, snackBar:MatSnackBar) {
    this.el.nativeElement.onkeypress = (evt: { which: number; preventDefault: () => void; }) => {
      snackBar.dismiss();
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
        snackBar.open("Entrez des chiffres uniquement","",{
          duration:3000
        });
      }
      if (this.el.nativeElement.value.length >= this.size) {
        evt.preventDefault();
        snackBar.open("Vous avez atteint le nombre maximal de caractères","",{
          duration:3000
        });
      }
    }
  }

}
