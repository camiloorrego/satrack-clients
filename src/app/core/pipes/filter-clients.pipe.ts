import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterClients'
})
export class FilterClientsPipe implements PipeTransform {

  transform(clientes: any[], clave: string) {
    if (!clientes) {
      return [];
    }
    if (!clave) {
      return clientes;
    }

    clave = clave.toLowerCase();
    return clientes.filter(client => {
      return client.type.toLowerCase() == clave;
    });
  }

}
