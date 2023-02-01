import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LibraryService } from '../services/library.service';
import { BookModalPage } from '../book-modal/book-modal.page';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  books:any;

  constructor(private libraryService:LibraryService, private modalController:ModalController) { }

  ngOnInit() {
    this.libraryService.getBooks().then(res=>{
      this.books=res;
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
