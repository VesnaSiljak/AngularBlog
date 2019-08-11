import { Component, OnInit } from '@angular/core';
import { Category } from '../categories/category/category.model';
import { ApicallsService } from 'src/app/services/apicalls.service';

declare var trumbowyg: any;

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  categories: Category[];
  fileToUpload: File = null;
  curentDate = new Date();
  today: any;

  constructor(private api: ApicallsService) {
    this.today = { year: this.curentDate.getFullYear(), month: this.curentDate.getMonth() + 1, day: this.curentDate.getDate() };
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.api.getCategories().subscribe(
      (data: Category[]) => {
        this.categories = data;
      }
    );
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }

  onDateSelect(e) {
    console.log(e)
  }
}
