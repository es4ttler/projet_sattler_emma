import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-composant-searchbar',
  templateUrl: './composant-searchbar.component.html',
  styleUrls: ['./composant-searchbar.component.css']
})
export class ComposantSearchbarComponent {
  search = new FormControl('');

  @Input() filterOn: string='';
  @Input() catalog: any[]=[];

  @Output() filter = new EventEmitter<any[]>();
  @Output() filterReset = new EventEmitter();


  constructor() {
    this.search.valueChanges.subscribe((value) => {
      if (value) {
        this.filter.emit(
          this.catalog.filter((item) => item[this.filterOn].toLowerCase().includes(value.toLowerCase()))
        );
      }
      else {
        this.filterReset.emit();
      }
    });
  }

}
