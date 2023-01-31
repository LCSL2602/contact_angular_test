import { Injectable } from '@angular/core';
import { constans } from '../enviroments/constants'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private enviroments = constans
  constructor(private httpClient: HttpClient) { }

  public getContacts(): any {
    return this.httpClient.get(`${this.enviroments['BASE_URL']}contact`)
  }
}
