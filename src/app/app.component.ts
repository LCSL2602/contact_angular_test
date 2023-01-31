import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public listContacts = []
  constructor(
    private services:AppService,
    private router:Router
    ){}

  ngOnInit(): void {
    this.services.getContacts().subscribe((data: any)=>{
      this.listContacts = data.data
    })
  }

  public openDetails(id:string ) :void {
    this.router.navigate(['detail', id])
  }
}
