import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { Author } from '../authors/authors.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorarticles',
  templateUrl: './authorarticles.component.html',
  styleUrls: ['./authorarticles.component.scss']
})
export class AuthorarticlesComponent implements OnInit {

  author:Author;

  constructor(private comser: CommunicationService, private router: Router) { }

  ngOnInit() {
   this.author = this.comser.getActiveAuthor();

  }

  setActiveArticle(article, url){
    this.comser.setId(article);
    this.router.navigate(['articles/' + url]);
  }

}
