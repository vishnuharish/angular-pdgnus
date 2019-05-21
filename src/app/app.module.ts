import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavigationComponent } from './navigation/navigation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {PostService} from './services/posts.service';
import {PostsComponent} from './posts/posts.component';
import { AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
const routes:Routes = [
  {path: "", component: HelloComponent},
  {path: "hello", component: HelloComponent},
  {path: "posts", component: PostsComponent}
]

@NgModule({
imports:      [ BrowserModule,AngularFireModule.initializeApp(environment.firebase),AngularFireDatabaseModule,NgbModule,HttpClientModule,AngularFirestoreModule, RouterModule.forRoot(routes, {enableTracing: true, useHash:true}), FormsModule,
   ],
  declarations: [ AppComponent, HelloComponent,NavigationComponent, PostsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
