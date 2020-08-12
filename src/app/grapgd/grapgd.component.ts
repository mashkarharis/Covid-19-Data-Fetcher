import { Component, OnInit } from '@angular/core';
import { WorldalltimeService } from '../services/worldalltime.service';

import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-grapgd',
  templateUrl: './grapgd.component.html',
  styleUrls: ['./grapgd.component.scss']
})
export class GrapgdComponent implements OnInit {

  Data:Object[];
  constructor(private was:WorldalltimeService,private cd:ChangeDetectorRef) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
    
  };
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartColors:Array<any> = [{
    backgroundColor: 'darkgreen'
 }];
 
 loaded:boolean=false;
  ngOnInit(): void {
    this.was.getdailydata().subscribe(res => this.Data=(res.json()));
  }
  getLabels(){
    var list=[];
      for (let index = 0; index < Object.keys(this.Data).length; index++) {
        var element = this.Data[index]['reportDate'];
        list.push(element);
      }
     
    return list;
    
  }
  public load:boolean=false;
  public list:any[];
  getData(){
    if(!this.load){
      this.list=[];
      var data1=[]
      for (let index = 0; index < Object.keys(this.Data).length; index++) {
        var element = this.Data[index]['deaths']['total'];
        data1.push(element);
      }
      this.list.push({data: data1,label:'Deaths-Up To Day'});
      this.load=true;
    }
    this.loaded=true;
    this.cd.markForCheck();
    return this.list;

  }

}
