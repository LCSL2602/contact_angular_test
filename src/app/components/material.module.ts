import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SweetAlert2Module.forRoot()
  ],
  exports:[
    SweetAlert2Module
  ]
})
export class MaterialModule { }
