import { Component, OnInit } from '@angular/core';
import { ApicallsService } from 'src/app/services/apicalls.service';
import { Article } from '../categories/category/category.model';
import { Author } from './authors.model';
import { CommunicationService } from 'src/app/services/communication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  authors : Author[];

  constructor(private api: ApicallsService, private comser: CommunicationService, private router: Router  ) { }


  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(){
    this.api.getAuthors().subscribe(
      (data : Author[])=>{
        this.authors = data;
      }
    )
  }

  goToArticle(author){
    this.comser.setActiveAuthor(author);
    this.router.navigate([this.router.url+'/' + author.url]);
  }
}
