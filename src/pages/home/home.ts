import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// Para utilizar la conexión anteriormente definida (en app.module.ts) dentro de home.ts
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users

  constructor(public navCtrl: NavController, public proveedor: Proveedor1Provider) {}

  ionViewDidLoad(){
    // subscribe := rescatamos los datos (en data - que sería el json) y los pasamos a una variable propia
    // que contenga todos los datos (usuarios)
    this.proveedor.getData()
    .subscribe(
      (data) => {this.users = data;}, 
      // generamos error en caso de que ocurra
      (error) => {console.log(error);}
    )
  }

}
