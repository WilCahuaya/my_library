import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

slideOpt={
  initialSlide:0,
  slidesPerView:1,
  centerSlides:true,
  speed:1200
}

  constructor() {}

}
