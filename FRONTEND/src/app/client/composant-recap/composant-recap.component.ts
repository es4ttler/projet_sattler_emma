import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceTestService } from 'src/app/core/services/ClientService/service-test.service';
import { Client } from '../../core/models/Client';

@Component({
  selector: 'app-composant-recap',
  templateUrl: './composant-recap.component.html',
  styleUrls: ['./composant-recap.component.css']
})
export class ComposantRecapComponent {

  constructor(public ts: ServiceTestService) {
    ts.getAll();
  }

  @Input() client:Client = new Client();

}
