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
  constructor(private dataService: DataService) {
    this.datas = dataService.getData();
  }

  public country: string | undefined;
  public city: string | undefined;
  public preferences: string | undefined;

  form: NgForm | undefined;

  onSubmit(form: { value: any; }): void {
    // このalertを記述することで、ポップアップが表示される
    alert(JSON.stringify(form.value));
  }



  ngOnInit(): void {
  }

}
