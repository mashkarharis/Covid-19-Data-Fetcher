import { Component, OnInit } from '@angular/core';
import {WorldalltimeService} from '../services/worldalltime.service';
import { Country,countries } from '../shared/countries';
@Component({
  selector: 'app-countrytable',
  templateUrl: './countrytable.component.html',
  styleUrls: ['./countrytable.component.scss']
})
export class CountrytableComponent implements OnInit {

  Data: Object[];
  constructor(private was:WorldalltimeService) { }
  
  
  ngOnInit(): void {
    this.Data=this.was.getcountryspecifieddata();
  }
  getData():Object[]{
    return this.Data;
  }
  displayedColumns: string[] = ['Country', 'Confirmed', 'Recovered', 'Deaths'];
 
 
}
