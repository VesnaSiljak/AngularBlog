import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen:boolean=false;
  constructor(private cs:CommunicationService) {
    this.cs.sideMenu.subscribe(
      (data:boolean)=>{
        this.isOpen=data;
      }
    )
   }

  ngOnInit() {
    
  }

  toggleMenu(){
    if(!this.isOpen){
      this.cs.sideMenu.next(true);
      this.isOpen=true;
    }
    else{
      this.cs.sideMenu.next(false);
      this.isOpen=false;
    }

  }

}
