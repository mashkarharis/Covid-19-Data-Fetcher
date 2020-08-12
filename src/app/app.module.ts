import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'; 
import 'hammerjs';
import {MatIconModule} from '@angular/material/icon'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { IntroComponent } from './intro/intro.component';
import { WorldalltimeComponent } from './worldalltime/worldalltime.component';
import {  HttpModule} from '@angular/http';
import {WorldalltimeService} from './services/worldalltime.service';
import { ProcessHttpmssgService } from './services/process-httpmssg.service';
import { WorldyesterdayComponent } from './worldyesterday/worldyesterday.component';
import { CountrytableComponent } from './countrytable/countrytable.component';
import { MatTableModule} from "@angular/material/table";
import { MatInputModule} from "@angular/material/input";
import { MatPaginatorModule} from "@angular/material/paginator";
import { MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { GraphComponent } from './graph/graph.component';
import { ChartsModule } from 'ng2-charts';
import { GrapgdComponent } from './grapgd/grapgd.component';
import { AngComponent } from './ang/ang.component';
import { NgxSpinnerModule } from "ngx-spinner";  


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    IntroComponent,
    WorldalltimeComponent,
    WorldyesterdayComponent,
    CountrytableComponent,
    GraphComponent,
    GrapgdComponent,
    AngComponent
  ],
  imports: [
    ChartsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    HttpModule,
    MatCardModule,
    MatGridListModule,
    BrowserModule,    
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    NgxSpinnerModule
  ],
  providers: [WorldalltimeService,ProcessHttpmssgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
