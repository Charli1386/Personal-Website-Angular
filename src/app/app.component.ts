import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  image_src: string[] = ["assets/images/header-pic.png", "assets/images/header-bg.jpg", "assets/images/work-bg.jpg"]
  image_objects: any[] = []

  preload_images = (image_src:string[]) => {
    image_src.forEach(src => {
      var img_obj = new Image;
      img_obj.src = src;
      this.image_objects.push(img_obj)
    })
  }

  ngOnInit(): void {
    this.preload_images(this.image_src);
  }



}
