import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public listContacts = []
  constructor(
    private route:ActivatedRoute,
    private services:AppService,
    private router:Router
    ){}

  ngOnInit(): void {
    this.route.url.subscribe(url=>{
      console.log(url)
      if(url[0]['path'] == ''){
        this.getContactList()
      }
    })

  }

  public getContactList():void{
    this.services.getContacts().subscribe((data: any)=>{
      this.listContacts = data.data
    })
  }

  public openDetails(id:string ) :void {
    this.router.navigate(['detail', id])
  }
}
