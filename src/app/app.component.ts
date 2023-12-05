import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eCommerce';

  constructor(){}

  ngOnInit(){ }

  url:string = "../assets/icons/img1.jpg";
  changeImage(event:any){
    this.url = event.target.src;
  }
  urls:string = "../assets/icons/img2.jpg";
  changeImages(event:any){
    this.urls = event.target.src;
  }
  url3:string = "../assets/icons/img3.jpg";
  changeImage3(event:any){
    this.url3 = event.target.src;
  }
  url4:string = "../assets/icons/img4.jpg";
  changeImage4(event:any){
    this.url4 = event.target.src;
  }
  url5:string = "../assets/icons/img5.jpg";
  changeImage5(event:any){
    this.url5 = event.target.src;
  }
  url6:string = "../assets/icons/img6.jpg";
  changeImage6(event:any){
    this.url6 = event.target.src;
  }
  url7:string = "../assets/icons/img7.jpg";
  changeImage7(event:any){
    this.url7 = event.target.src;
  }
  url8:string = "../assets/icons/img8.jpg";
  changeImage8(event:any){
    this.url8 = event.target.src;
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
