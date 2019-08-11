import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { Router } from '@angular/router';
import { Category } from './category/category.model';
import { ApicallsService } from 'src/app/services/apicalls.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoriesList:Category[];

  constructor(public comService: CommunicationService, private router: Router, private api: ApicallsService) { }

  ngOnInit() {
    this.getCategories();
  }

  setActiveArticle(id, url){
    this.comService.setCategoryId(id);
    this.router.navigate([this.router.url+'/' + url]);
  }

  goToCategory(id, url){
    this.comService.setActiveCategory(id);
    this.router.navigate([this.router.url+'/' + url]);
  }

  getCategories(){
    this.api.getCategories().subscribe(
      (data: Category[])=>{
        this.categoriesList=data;
      }
    )
  }
}
