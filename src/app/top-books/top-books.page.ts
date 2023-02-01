import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as internal from 'stream';
import { LibraryService } from '../services/library.service';
import { BookModalPage } from '../book-modal/book-modal.page';

@Component({
  selector: 'app-top-books',
  templateUrl: './top-books.page.html',
  styleUrls: ['./top-books.page.scss'],
})
export class TopBooksPage implements OnInit {

  topBooks:any;
  top10Books:any;
  cont=0;

  constructor(private libraryService:LibraryService,
    private modalController:ModalController) { }

  ngOnInit() {
    this.libraryService.getTopBooks().then(res=>{
      this.topBooks=res;
    })
  }

  async showBook(book:any){
    const modal=await this.modalController.create({
      component: BookModalPage,
      componentProps:{
        book:book
      }
    });
    return await modal.present();
  }

}
