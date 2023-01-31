import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service'
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  public contact = {
    company_phone: "",
    createdAt: "",
    email:"",
    image:"",
    lastname:"",
    name:"",
    personal_phone:"",
    updatedAt:"",
    _id:""
  }
  constructor(
    private service:AppService,
    private route:ActivatedRoute,
    private router:Router,
    private app:AppComponent
  ) {  }

  ngOnInit(): void {
    this.route.url.subscribe(url=>{
      this.service.getContact(url[1]['path'])
        .subscribe((data:any)=>{
          this.contact = data['data'][0]
        },
        (error:any)=>{
          console.log(error)
        })
    })
  }
  
  public deleteContact(id:any):void{
    this.service.deleteContact(id)
      .subscribe((data:any)=>{
        this.app.getContactList()
        this.router.navigate([''])
      },
      (error:any)=>{
        console.log(error)
      })
  }

  public back():void{
    this.router.navigate([''])
  }
}
