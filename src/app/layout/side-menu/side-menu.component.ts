import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { ApicallsService } from 'src/app/services/apicalls.service';
import { Category } from '../categories/category/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  isActive:boolean=false;
  categories:Category[];

  constructor(private cs:CommunicationService, private api:ApicallsService,private router: Router) {
    this.cs.sideMenu.subscribe(
      (data)=>{
        this.isActive=data;
      }
    )
   }

  ngOnInit() {
    this.api.getCategories().subscribe(
      (data:Category[])=>{
        this.categories=data;
      }
    )
  }

  goToCategory(id, url){
    this.isActive=false;
    this.cs.sideMenu.next(false);
    this.cs.setActiveCategory(id);
    this.router.navigate(['categories/' + url]);

  }
  goToLink(link){
    this.isActive=false;
    this.cs.sideMenu.next(false); 
    this.router.navigate([link]);
  }

}
