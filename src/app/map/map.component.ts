import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GraphqlService } from '../services/graphql.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  Province!: string
  province! :any
  results:any
  provinces$: Observable<any> | undefined;
  result1:any
  result2:any
  result3:any
  result4:any
  result5:any
  result6:any
  result7:any
  result8:any
  result9:any

  constructor(private service: GraphqlService) {}

  ngOnInit() {
    this.provinces$ = this.service.getProvinces();
    this.provinces$.subscribe((data) => {

      this.results = data[1]
      this.result1 = data[0]
      this.result2 = data[9]
      this.result3 = data[2]
      this.result4 = data[3]
      this.result5 = data[4]
      this.result6 = data[5]
      this.result7 = data[6]
      this.result8 = data[7]
      this.result9 = data[8]
    });
  }


  
}
