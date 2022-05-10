import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { IgxListModule, IgxAvatarModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxInputGroupModule, IgxSelectModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChildViewComponent,
    HomeComponent,
    MyInfoComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxListModule,
    IgxAvatarModule,
    IgxIconModule,
    FormsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxInputGroupModule,
    IgxSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
