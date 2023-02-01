import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  
  slideOpt={
    initialSlide:0,
    slidesPerView:1,
    centerSlides:true,
    speed:1200
  }
  
  //crear el objeto slides
  slides=[
    {
      title:"William Shakespeare",
      subtitle:"Autores como:",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/1200px-Shakespeare.jpg",
      description:"William Shakespeare ​ fue un dramaturgo, poeta y actor inglés. Conocido en ocasiones como el Bardo de Avon, se le considera el escritor más importante en lengua inglesa y uno de los más célebres de la literatura universal.​"
    },
    {
      title:"Gabriel García Márquez",
      subtitle:"Autores como:",
      img:"https://www.parlamentoandino.org/images/1Gabriel-Garca-Mrquez.png",
      description:"Gabriel José de la Concordia García Márquez ​​ fue un escritor y periodista colombiano. Reconocido principalmente por sus novelas y cuentos, también escribió narrativa de no ficción, discursos, reportajes, críticas cinematográficas y memorias. Fue conocido como Gabo, y familiarmente y por sus amigos como Gabito.​​​"
    },
    {
      title:"Charles Dickens",
      subtitle:"Autores como:",
      img:"https://cadenaser.com/resizer/KdDaTobLsTMPLuaotcDkFjI6t6c=/1200x900/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/73OM5G7AGFMALMKBYD2R4WUDSA.jpg",
      description:"Charles John Huffam Dickens fue un escritor inglés. Creó algunos de los personajes de ficción más conocidos en el mundo y muchos lo consideran el mejor novelista de la época victoriana.​"
    },
    {
      title:"Oscar Wilde",
      subtitle:"Autores como:",
      img:"https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2021/10/oscar-wilde-vida-muerte-aniversario-carcel-homosexual-cartas-poeta-COR-2.psd_.jpg",
      description:"Oscar Fingal O'Flahertie Wills Wilde​, conocido como Oscar Wilde, fue un escritor, poeta y dramaturgo de origen irlandés.​Wilde es considerado uno de los dramaturgos más destacados del Londres victoriano tardío. Además, fue una celebridad de la época debido a su gran y aguzado ingenio.​"
    },
    {
      title:"Franz Kafka",
      subtitle:"Autores como:",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Franz_Kafka%2C_1923.jpg/440px-Franz_Kafka%2C_1923.jpg",
      description:"Kafka (1883-1924) es considerado como uno de los escritores más influyentes en la literatura universal, pionero en la mezcla del realismo y lo fantástico.​"
    }
  ]
  

  constructor(private router: Router,private storage:Storage) { 
    //this.storage.create();
  }

  //Direccionar al home de la intro
  finish(){
    //setear intro para cerrar la intro
    this.storage.set("isIntroShowed",true);
    this.router.navigateByUrl("/menu/home");
  }

  ngOnInit() {
  }

}
