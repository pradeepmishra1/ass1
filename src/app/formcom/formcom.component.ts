import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-formcom',
  templateUrl: './formcom.component.html',
  styleUrls: ['./formcom.component.css']
})
export class FormcomComponent implements OnInit {

  ngOnInit() {

  }

  constructor(private http: HttpClient) { }

  public aa: string;

  states: any = [];
  city: any = [];

  data: any[] = [];
  public mode: string = 'I';
  public selcetdIndex: any;


  foods = [
    { value: 'macd', viewValue: 'macd' },
    { value: 'plazs', viewValue: 'plazs' },
    { value: 'panjabi', viewValue: 'panjabi' }
  ];
  countries = [
    { country_name: 'india', 'id': '1' },
    { country_name: 'USA', 'id': '2' },
    { country_name: 'UK', 'id': '3' }
  ];
  statesMaster = [
    { state_name: 'MH', 'id': '1', 'cid': '1' },
    { state_name: 'UP', 'id': '2', 'cid': '1' },
    { state_name: 'MP', 'id': '3', 'cid': '1' },

    { state_name: 'USA1', 'id': '4', 'cid': '2' },
    { state_name: 'USA2', 'id': '5', 'cid': '2' },
    { state_name: 'USA3', 'id': '6', 'cid': '2' },

    { state_name: 'UK1', 'id': '7', 'cid': '3' },
    { state_name: 'UK2', 'id': '8', 'cid': '3' },
    { state_name: 'UK3', 'id': '9', 'cid': '3' }



  ];

  cityMaster = [
    { city_name: 'mumbai', 'id': '1', 'sid': '1' },
    { city_name: 'varansi', 'id': '2', 'sid': '2' },
    { city_name: 'city_mp', 'id': '3', 'sid': '3' }

  ];

  public personal_detail = { 'full_name': null, 'address': null, 'gender': null, 'favourite_food': null, 'leave_coment': null, 'marital_status': null, 'favourite_restaurent': null, 'rate_restaurent': null, 'country': null, 'state': null, 'city': null };

  countryChange(val) {

    // console.log("states", val, this.personal_detail.country);

    this.states = this.statesMaster.filter(a => a.cid == val.id)

  }

  stateChange(n) {
    this.city = this.cityMaster.filter(a => a.sid == n.id)

  }

  save() {

    if (this.mode === 'I') {
      this.http.post("http://localhost:3000/Pdata", this.personal_detail)
        .subscribe(dt => {
        });

    } else {
      this.http.put("http://localhost:3000/Pdata/" + this.selcetdIndex, this.personal_detail)
        .subscribe(d => {
          this.http.get("http://localhost:3000/Pdata")
            .subscribe((d: any) => {
              this.data = d;
            });
        })
    }

  }


  New() {
    this.personal_detail.full_name = "";
    this.personal_detail.address = "";
    this.personal_detail.gender = "";
    this.personal_detail.favourite_food = "";
    this.personal_detail.leave_coment = "";
    this.personal_detail.marital_status = "";
    this.personal_detail.favourite_restaurent = "";
    this.personal_detail.country = "";
    this.personal_detail.state = "";
    this.personal_detail.city = "";
    this.personal_detail.rate_restaurent = "";

  }

}

