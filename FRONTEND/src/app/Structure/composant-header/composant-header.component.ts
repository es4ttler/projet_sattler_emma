import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composant-header',
  templateUrl: './composant-header.component.html',
  styleUrls: ['./composant-header.component.css']
})

export class ComposantHeaderComponent implements OnInit {
  title = 'Le marché d\'Emma'
  name = ''
  constructor() { }

  ngOnInit(): void {
  }

}
