import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { CategoryComponent } from './layout/categories/category/category.component';
import { CategoriesComponent } from './layout/categories/categories.component';
import { ArticleComponent } from './layout/article/article.component';
import { AddNewComponent } from './layout/add-new/add-new.component';
import { AuthorsComponent } from './layout/authors/authors.component';
import { AuthorarticlesComponent } from './layout/authorarticles/authorarticles.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', canActivate:[AuthGuard], component: LayoutComponent,
    children: [
      { path: 'categories', component: CategoriesComponent },
      { path: 'authors', component: AuthorsComponent },
      { path: 'authors/:author', component: AuthorarticlesComponent },
      { path: 'add-new', component: AddNewComponent},
      { path: 'categories/:categoryName', component: CategoryComponent},
      { path: 'articles/:articleName', component: ArticleComponent },
      { path: '**', redirectTo: '/categories' }
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
