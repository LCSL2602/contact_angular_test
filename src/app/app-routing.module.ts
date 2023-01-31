import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailComponent } from './components/item-detail/item-detail.component'
import { ItemEmptySelectComponent } from './components/item-empty-select/item-empty-select.component'

const routes: Routes = [
    { path: 'detail/:id', component: ItemDetailComponent },
    { path: '**', component: ItemEmptySelectComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }