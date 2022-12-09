import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './model/book/book.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { MybooksComponent } from './profile/mybooks/mybooks.component';
import { MyinfoComponent } from './profile/myinfo/myinfo.component';
import { UserComponent } from './user/user.component';

const appRoutes:Routes=[
  {path:'login', component:AuthComponent},
  {path:'book/:isbn', component:BookComponent},
  {path:'catalog', component:CatalogComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AuthComponent,
    HeaderComponent,
    CatalogComponent,
    HomeComponent,
    AdminComponent,
    ProfileComponent,
    MybooksComponent,
    MyinfoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
