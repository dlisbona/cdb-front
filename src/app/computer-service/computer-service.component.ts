import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Computer } from './computer.model';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-computer-service',
  templateUrl: './computer-service.component.html',
  styleUrls: ['./computer-service.component.scss']
})

export class ComputerServiceComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  
  getComputer(id: number): Observable<Computer> {
    return this.httpClient.get<Computer>('http://10.0.1.90:8080/computer-database/computers/'+id)}
  
  postComputer(): Observable<Computer> {
      return this.httpClient.get<Computer>('http://10.0.1.90:8080/computer-database/computers/')}

  getComputers(): Observable<Computer[]> {
      return this.httpClient.get<Computer[]>('http://10.0.1.90:8080/computer-database/computers/')}

  ngOnInit() {
  }
  
}
