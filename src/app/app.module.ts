import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxEditorModule } from 'ngx-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { CategoriesComponent } from './layout/categories/categories.component';
import { CategoryComponent } from './layout/categories/category/category.component';
import { ArticleComponent } from './layout/article/article.component';
import { AddNewComponent } from './layout/add-new/add-new.component';
import { AuthorsComponent } from './layout/authors/authors.component';
import { AuthorarticlesComponent } from './layout/authorarticles/authorarticles.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    HeaderComponent,
    SideMenuComponent,
    CategoriesComponent,
    CategoryComponent,
    ArticleComponent,
    AddNewComponent,
    AuthorsComponent,
    AuthorarticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxEditorModule,
    FormsModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
