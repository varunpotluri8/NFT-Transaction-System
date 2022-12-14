import { Component, OnInit } from '@angular/core';
import UsersJson from './allusernft.json';
import {ViewEncapsulation} from '@angular/core';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

interface USERS{
  NFT_Name:String;
  Trans_ID:String;
  NFT_Value:Number;
  Status:String;
  Trans_date_time: String;
}
 

 
@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ManagerDashboardComponent implements OnInit {
  toDisplay = false;
  Users:any;
  alltrade_transhistory_fiat:any;
  alltrade_transhistory_nfttrans:any;
  x = 1
  public dateform:any={
    Fdate:'',
    Tdate:''
  };

  constructor(private http:HttpClient,private dataService: DataService,
    private router: Router) { 
      
    }

  toggleData() {
    this.toDisplay = true;
    console.log(this.dateform);
    this.dataService.getAllTrader_TransHistory(this.dateform.Fdate,this.dateform.Tdate).subscribe((data:any) => {
      this.alltrade_transhistory_fiat=data.fiat_trans;
      this.alltrade_transhistory_nfttrans=data.nft_trans;
      console.log(data);
    });
    console.log(this.dateform);
  }

  //Users:USERS[]=UsersJson;
  
  ngOnInit(): void {
  }
  
}



