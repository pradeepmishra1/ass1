import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormcomComponent } from './formcom/formcom.component'
import { SignupComponent } from './signup/signup.component';
import { Route, Router } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'app';
  states: any = [];
  city: any = [];

  public formcomComponent: MatDialogRef<FormcomComponent>;

  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router) {

    this.http.get("http://localhost:3000/Pdata")
      .subscribe((d: any) => {
        this.data = d;
      })
      console.log("hiii")
  }

  //save(){}

  // foods = [
  //   { value: 'macd', viewValue: 'macd' },
  //   { value: 'plazs', viewValue: 'plazs' },
  //   { value: 'panjabi', viewValue: 'panjabi' }
  // ];
  // countries = [
  //   { country_name: 'india', 'id': '1' },
  //   { country_name: 'USA', 'id': '2' },
  //   { country_name: 'UK', 'id': '3' }
  // ];
  // statesMaster = [
  //   { state_name: 'MH', 'id': '1', 'cid': '1' },
  //   { state_name: 'UP', 'id': '2', 'cid': '1' },
  //   { state_name: 'MP', 'id': '3', 'cid': '1' },

  //   { state_name: 'USA1', 'id': '4', 'cid': '2' },
  //   { state_name: 'USA2', 'id': '5', 'cid': '2' },
  //   { state_name: 'USA3', 'id': '6', 'cid': '2' },

  //   { state_name: 'UK1', 'id': '7', 'cid': '3' },
  //   { state_name: 'UK2', 'id': '8', 'cid': '3' },
  //   { state_name: 'UK3', 'id': '9', 'cid': '3' }



  // ];

  // cityMaster = [
  //   { city_name: 'mumbai', 'id': '1', 'sid': '1' },
  //   { city_name: 'varansi', 'id': '2', 'sid': '2' },
  //   { city_name: 'city_mp', 'id': '3', 'sid': '3' }

  // ];


  // personal_detail = { 'full_name': null, 'address': null, 'gender': null, 'favourite_food': null, 'leave_coment': null, 'marital_status': null, 'favourite_restaurent': null, 'rate_restaurent': null, 'country': null, 'state': null, 'city': null };


  data: any[] = [];
  // mode: string = 'I';
  // public selcetdIndex: any;

  // save(){
  //   console.log('5656',this.personal_detail);
  //   this.data.push(this.personal_detail);
  //   console.log('dddd',this.data);
  // }
  // countryChange(val) {

  //   // console.log("states", val, this.personal_detail.country);

  //   this.states = this.statesMaster.filter(a => a.cid == val.id)

  // }

  // stateChange(n) {
  //   this.city = this.cityMaster.filter(a => a.sid == n.id)

  // }

  // save() {

  //   if (this.mode === 'I') {
  //     this.http.post("http://localhost:3000/Pdata", this.personal_detail)
  //       .subscribe(dt => {
  //         this.http.get("http://localhost:3000/Pdata")
  //           .subscribe((d: any) => {
  //             this.data = d;
  //           })

  //       });
  // this.data.push(JSON.parse(JSON.stringify(this.personal_detail)));
  // this.New()

  // } else {
  // this.data.splice(this.selcetdIndex, 1);
  // this.data.push(JSON.parse(JSON.stringify(this.personal_detail)));

  // this.data[this.selcetdIndex] = JSON.parse(JSON.stringify(this.personal_detail));

  // this.obj.food = "";
  // this.obj.price = "";   
  //  console.log("hkjhkj",this.data);
  //  this.New()

  //     this.http.put("http://localhost:3000/Pdata/" + this.selcetdIndex, this.personal_detail)
  //       .subscribe(d => {
  //         this.http.get("http://localhost:3000/Pdata")
  //           .subscribe((d: any) => {
  //             this.data = d;
  //           });
  //       })
  //     this.New()

  //   }
  //   this.mode = 'I'

  // }

  // Delete(index){
  //   console.log("delete");
  //   this.data.splice(index, 1);

  // }

  delete(index) {
    let r = confirm("do you want to delete row ?");
    if (r == true) {
      this.http.delete("http://localhost:3000/Pdata/" + index)
        .subscribe((d: any) => {
          this.http.get("http://localhost:3000/Pdata")
            .subscribe((d: any) => {
              this.data = d;
            });

        });
    }

  }

  edit(i) {
    // this.selcetdIndex = i;
    // this.personal_detail = this.data[i];
    // this.mode = 'E';


    this.formcomComponent = this.dialog.open(FormcomComponent)
    this.formcomComponent.componentInstance.mode = 'E';
    this.formcomComponent.componentInstance.selcetdIndex = i;
    this.formcomComponent.componentInstance.personal_detail = this.data[i];

    this.formcomComponent.afterClosed().subscribe(a => {
      this.http.get("http://localhost:3000/Pdata")
        .subscribe((d: any) => {
          this.data = d;
        })
    })

  }


  ngOnInit() {
  }
  formpopup() {
    this.dialog.open(SignupComponent, {
      height: '400px',
      width: '600px',
    });


  }

  signin(){
    this.dialog.open(SigninComponent, {
      height: '400px',
      width: '600px',
    });

  }

  userdetails() {
    this.router.navigateByUrl('/userdata');
  }
  homecop() {
    this.router.navigateByUrl('/');
  }


  // publiic toggle :any;
  showhide() {

  }

  create() {

    this.formcomComponent = this.dialog.open(FormcomComponent)
    this.formcomComponent.componentInstance.aa = "sasa";
    this.formcomComponent.componentInstance.mode = 'I';
    this.formcomComponent.afterClosed().subscribe(a => {
      this.http.get("http://localhost:3000/Pdata")
        .subscribe((d: any) => {
          this.data = d;
        })
    })

  }





}

