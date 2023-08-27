import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  country: string | null | undefined;
  city: string | null | undefined;
  preferences: string | null | undefined;

  constructor(private route: ActivatedRoute) {

  }

  //値を渡す側ではthis.router.navigate(['url'], 渡す値);と記述するので良いが、受け取る側のparamMap, snapshotなどのメソッドがそれぞれ何を意味しているのかを調べる必要性がある
  //一応現状うまく値を渡せてはいる
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.country = params.get('country');
      this.city = params.get('city');
      this.preferences = params.get('preferences');
    })
  }

}
