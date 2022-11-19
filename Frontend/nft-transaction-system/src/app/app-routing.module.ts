import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { TradeComponent } from './trade/trade.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { SellNftsComponent } from './sell-nfts/sell-nfts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddmoreComponent } from './addmore/addmore.component';
import { CancelComponent } from './cancel/cancel.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  //{ path: 'dashboard', component: DashboardComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'trade', component: TradeComponent, canActivate:[AuthGuard]},
  //{ path: 'trade', component: TradeComponent},
  { path: 'manager-dashboard', component: ManagerDashboardComponent},
  { path: 'sell-nfts', component: SellNftsComponent},
  { path: 'transactions', component: TransactionsComponent},
  {path:'addmore',component:AddmoreComponent},
  {path:'cancel',component:CancelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
