import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunicationService } from 'src/app/services/communication.service';
import { Article, Category } from './category.model';
import { ApicallsService } from 'src/app/services/apicalls.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

categoryName: string;
categoryId : number; 
articles : Article[];

  constructor(private route: ActivatedRoute, public comService: CommunicationService, private router: Router, private apiService : ApicallsService) { }

  ngOnInit() {

    this.categoryId = this.comService.getActiveCategory();
    this.apiService.getCategory(this.categoryId).subscribe(
      (data:Category)=> {
        console.log(data)

        this.articles = data[0].articles;
        this.categoryName = data[0].title;
        console.log(this.articles)
      }
    )
  }

  setActiveArticle(article, url){
    this.comService.setId(article);
    this.router.navigate(['articles/' + url]);
  }


}
