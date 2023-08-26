import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DataService, TDataItem } from '../../data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public datas: TDataItem[] = [];

  //data.tsファイルにInjectableを記述しているので、外部ファイルのデータを自由に使用できている（Injectableの記述がないと外部ファイルのデータを使用できない）
  constructor(private dataService: DataService, private http: HttpClient) {
    this.datas = dataService.getData();
  }

  public country: string | undefined;
  public city: string | undefined;
  public preferences: string | undefined;

  form: NgForm | undefined;

  onSubmit(form: { value: any; }): void {
    // このalertを記述することで、ポップアップが表示される
    alert(JSON.stringify(form.value));
    //一旦Serviceを使用せずに、Component内部でバックエンドとのやり取りを行う
    //form.valueとじゅつする必要性がある（valueがないと、Oject形であることのみがバックエンド側に伝わるだけで、中身を見ることができない）
    this.http.post('http://127.0.0.1:5000', form.value).subscribe((response: object) => {
      console.log("New data is sent to back end." + response);
    });
  }



  ngOnInit(): void {
  }

}
