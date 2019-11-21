import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  type = '';
  types: any[] = ['low', 'high', 'medium', 'low'];
  clients: any[] = [];
  displayedColumns: string[] = ['identification', 'name', 'lastName', 'phone', 'email', 'occupation', 'observation', 'type'];

  constructor(private service: ClientService) { }

  ngOnInit() {
    this.service.get().subscribe((response: any) => {
      console.log(response);
      this.clients = response;
    }, (e: any) => {
      console.log('ERROR');
      console.log(e);
    });
  }

}
