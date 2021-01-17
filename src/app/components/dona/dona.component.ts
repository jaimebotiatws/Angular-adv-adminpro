import { Component, Input } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {



  @Input() title:string='Sin tìtulo';
  @Input('data') doughnutChartData: MultiDataSet=[[300,300,300]];
  @Input('labels') doughnutChartLabels: Label[] =["1","2","3"];


  public colors: Color[]=[
    {backgroundColor:['#9E120E','#FF5800','#FFB414']}
  ]
  


}
