import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { ViewProfileBuyerComponent } from './Buyer/view-profile-buyer/view-profile-buyer.component';
import { ViewProfileSellerComponent } from './Seller/view-profile-seller/view-profile-seller.component';


const routes: Routes = [
  {path:'buyer',component:BuyerLandingPageComponent,children:[
   {path:'buy-product',component:BuyProductComponent},
   {path:'purchase-history',component:PurchaseHistoryComponent},
   {path:'search',component:SearchComponent},
   {path:'view-cart',component:ViewCartComponent},
   {path:'view-profile-buyer',component:ViewProfileBuyerComponent}
  ]},
  {path:'seller',component:SellerLandingPageComponent,children:[
   {path:'add-items',component:AddItemsComponent},
   {path:'view-items',component:ViewItemsComponent},
   {path:'view-profile-seller',component:ViewProfileSellerComponent},
   {path:'view-reports',component:ViewReportsComponent}
  ]},
   {path:'admin',component:AdminLandingPageComponent,children:[
   {path:'add-category',component:AddCategoryComponent},
   {path:'add-subcategory',component:AddSubCategoryComponent},
   {path:'block-unblock-buyer',component:BlockUnblockBuyerComponent},
   {path:'block-unblock-seller',component:BlockUnblockSellerComponent},
   {path:'daily-reports',component:DailyReportsComponent}
  ]},
  {path:'login',component:LoginComponent},
  {path:'register-buyer',component:RegisterBuyerComponent},
  {path:'register-seller',component:RegisterSellerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
