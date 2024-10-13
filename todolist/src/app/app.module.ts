// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { TodoComponent } from './todo/todo.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
   
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AppComponent,
        TodoComponent ,
        
        
    ],
    providers: [provideHttpClient()],
    bootstrap: []
})
export class AppModule {}
