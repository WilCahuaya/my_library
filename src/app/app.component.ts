import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'], 
})
export class AppComponent {

  //inyectamos en el constructor el Storage
  constructor(private storage: Storage) {}

  //Se va instanciar cuando lo necesitamos
  async ngOnInit(){
    await this.storage.create();
  }
}
