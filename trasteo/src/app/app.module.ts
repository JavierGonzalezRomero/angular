import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './header/menu/menu.component';
import { CardComponent } from './main/card/card.component';

import {SelectButtonModule} from 'primeng/selectbutton';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MenuComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    SelectButtonModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
