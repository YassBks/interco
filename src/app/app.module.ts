import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';


//SERVICES
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';
import {DataBaseService} from './services/data-base.service';
import {NavigationService} from './services/navigation.service';

//COMPONENTS
import { AppComponent } from './app.component';
import { HeaderIntercoComponent } from './header-interco/header-interco.component';
import { AuthIntercoComponent } from './auth-interco/auth-interco.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { ForOhFourComponent } from './for-oh-four/for-oh-four.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { RoomComponent } from './room/room.component';
import { OfficeComponent } from './office/office.component';
import { ConsultantsListComponent } from './consultants-list/consultants-list.component';
import { ConsultantsViewComponent } from './consultants-view/consultants-view.component';
import { ManageConsultantsComponent } from './manage-consultants/manage-consultants.component';
import { SearchConsultantsComponent } from './search-consultants/search-consultants.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NewConsultantComponent } from './new-consultant/new-consultant.component';
import { ManageRoomComponent } from './manage-room/manage-room.component';

const appRoutes: Routes = [
{path:'admin-home', canActivate: [AuthGuard], component: AdminContentComponent,
children: [
  {path: '', canActivate: [AuthGuard], component:AdminHomeComponent},
  {path: 'consultants', canActivate: [AuthGuard], component: ManageConsultantsComponent}, 
  {path: 'rooms', canActivate: [AuthGuard], component: ManageRoomComponent},
  {path: 'consultants/new-consultant', canActivate:[AuthGuard], component: NewConsultantComponent},
  {path: 'consultants/:id', canActivate: [AuthGuard], component:ConsultantsViewComponent},
  ]
},
{path:'', canActivate: [AuthGuard], component: AdminContentComponent},
{path:'auth', component: AuthIntercoComponent},
{path: 'not-found', component: ForOhFourComponent },
{path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderIntercoComponent,
    AuthIntercoComponent,
    AdminContentComponent,
    ForOhFourComponent,
    AdminSidebarComponent,
    RoomComponent,
    OfficeComponent,
    ConsultantsListComponent,
    ConsultantsViewComponent,
    ManageConsultantsComponent,
    SearchConsultantsComponent,
    AdminHomeComponent,
    NewConsultantComponent,
    ManageRoomComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
     BrowserAnimationsModule,
     
     // material angular
      CdkTableModule,
      CdkTreeModule,
      MatAutocompleteModule,
      MatBadgeModule,
      MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatStepperModule,
      MatTableModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatTreeModule,
  
    RouterModule.forRoot(appRoutes)
  ],
  exports:[MatDatepickerModule],
  providers: [AuthService, AuthGuard, DataBaseService, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
