import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { CriptoService } from '../services/cripto.service';
import {Change} from '../interfaces/interface';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})




export class Tab1Page implements OnInit {

 
  arrayDatos:Change[] = [];
  arrayDatos1:Change[] = [];



  id=1;


  searchNames:any;
  
  constructor(private nombre:CriptoService) {}

  ngOnInit() {
    this.nombre.getDatos().subscribe(respuesta => {
      //console.log(respuesta);
      this.arrayDatos=respuesta;
      console.log(this.arrayDatos);         

    });

  }
    
    filtrar(){
      this.arrayDatos.forEach(moneda => {
        if(moneda.year_established == null){
          this.arrayDatos1.push(moneda);
        }
      });
      console.log(this.arrayDatos1);

      
      this.id=0;

    }


    searchExchange(event:any){
      // Metodo para filtrar a traves de busqueda por nombre 
      const text= event.target.value;
      if (text && text.trim() !=''){
        this.searchNames = [...this.arrayDatos]
        this.searchNames = this.searchNames.filter((exchange: any)=>{
          return (exchange.name.toLowerCase().indexOf(text.toLowerCase())) > -1
        })
      }
    }




    
}
    






