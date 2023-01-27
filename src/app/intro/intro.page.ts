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
      title:"HTML",
      subtitle:"Última versión: HTML 5.3",
      img:"https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw",
      description:"LHTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web."
    },
    {
      title:"CSS",
      subtitle:"Última versión: CSS3",
      img:"https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo",
      description:"CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado."
    },
    {
      title:"JavaScript",
      subtitle:"Lenguaje de programación",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFmj9qg68AFAx8H7Xo5x20h4Ozi3ug1gXUdKqKnSBUfMdXuOKxMCpV4nsVecAwPNjwPs&usqp=CAU",
      description:"JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico."
    },
    {
      title:"Angular",
      subtitle:"Framework",
      img:"https://miro.medium.com/max/1176/1*u9gVOJowwDqQUEKtSqxzEA.png",
      description:"Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página."
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
