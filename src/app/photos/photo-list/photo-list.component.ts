import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter:string = "";
  hasMore:boolean = true;
  currentPage: number = 1;
  userName = '';

  constructor(private activatedRoute:ActivatedRoute,
    private PhotoService:PhotoService){
  }

  ngOnInit(): void{
    this.userName = this.photos = this.activatedRoute.snapshot.params.userName;
    //Dessa forma é possível acessar o objeto photos que foi obtido no resolve
    this.photos = this.activatedRoute.snapshot.data.photos;
  }


  load(){
    this.PhotoService.listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      //...spred operator: é como se estivesse passando photos[1], photos[2], photos[3]..........
      this.photos = this.photos.concat(photos);
      this.filter = '';
      if(!photos.length){
        this.hasMore = false;
      } else {
        this.hasMore = true;
      }
    })
  }

}
