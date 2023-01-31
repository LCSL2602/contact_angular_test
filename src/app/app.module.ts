import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './components/material.module'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemContactComponent } from './components/item-contact/item-contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemEmptySelectComponent } from './components/item-empty-select/item-empty-select.component'

@NgModule({
  declarations: [
    AppComponent,
    ItemContactComponent,
    ItemDetailComponent,
    ItemEmptySelectComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
