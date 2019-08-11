import { Injectable } from '@angular/core';
import { Article } from '../layout/categories/category/category.model';
import { Author } from '../layout/authors/authors.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  activeArticle: Article;
  categoryId : number;
  activeCategory : number;
  activeAuthor: Author;
  sideMenu=new Subject<boolean>();

  constructor() { }

  setId(article){
    this.activeArticle = article;
  }

  getId(){
    return this.activeArticle;
  }

  setCategoryId(id){
    this.categoryId = id;
  }

  getCategoryId(){
    return this.categoryId;
  }

  setActiveCategory(id){
    this.activeCategory = id;
  }

  getActiveCategory(){
    return this.activeCategory;
  }

  setActiveAuthor(author){
    this.activeAuthor = author;
  }

  getActiveAuthor(){
    return this.activeAuthor;
  }
}
