import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LibraryService } from '../services/library.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.page.html',
  styleUrls: ['./book-modal.page.scss'],
})
export class BookModalPage implements OnInit {

  authors:any;
  book:any;
  like_button: boolean = false;
  user_id: any;

  constructor(private modalController:ModalController,
    private navParams:NavParams, 
    private libraryService:LibraryService,
    private storage: Storage) { }

  async ngOnInit() {
    this.user_id = await this.storage.get("user_id");
    this.libraryService.getCheckLikeBook(this.user_id, this.book.id).subscribe((data:any) =>{
      this.like_button = data.like
    },
    (error) => 
      console.log(error)
    )
  }

  ionViewDidEnter(){
    this.book=this.navParams.get("book");

    this.libraryService.getAuthors().then(res=>{
      this.authors=res;
      console.log(this.authors);
    })
  }
  closeModal(){
    this.modalController.dismiss()
  }

  like(){
    this.libraryService.likeBook(this.user_id, this.book.id).subscribe((data:any) => {
      this.like_button = true;
    }, (error) =>
    console.log(error)
    )
  }
  disLike(){
    this.libraryService.disLike(this.user_id, this.book.id).subscribe((data:any) => {
      if (data.status == "OK"){
        this.like_button = false
      }
    }, (error) => 
      console.log(error)
    )
  }
}
