import { Component, OnInit } from '@angular/core';
import {WorldalltimeService} from '../services/worldalltime.service';

@Component({
  selector: 'app-worldyesterday',
  templateUrl: './worldyesterday.component.html',
  styleUrls: ['./worldyesterday.component.scss']
})
export class WorldyesterdayComponent implements OnInit {

  Data: JSON;

  constructor(private was:WorldalltimeService) { }

  ngOnInit(): void {
    this.was.getdailydata().subscribe(res => this.Data=(res.json()));
  }
  public getwaconfirmed():string{
    return this.Data[Object.keys(this.Data).length-1]['deltaConfirmed'].toLocaleString('en', {useGrouping:true});    
  }
  public getreportdate():string{

    return (this.Data[Object.keys(this.Data).length-1]['reportDate']);//parseInt(this.Data['recovered']['value']);   
  }

  public getirate():string{
    return parseInt(this.Data[Object.keys(this.Data).length-1]['incidentRate']).toLocaleString('en', {useGrouping:true});
  }

  public getwadeaths():string{
    var d1=parseInt(this.Data[Object.keys(this.Data).length-1]['deaths']['total']);
    var d2=parseInt(this.Data[Object.keys(this.Data).length-2]['deaths']['total']);

    return (d1-d2).toLocaleString('en', {useGrouping:true});
  }
}
