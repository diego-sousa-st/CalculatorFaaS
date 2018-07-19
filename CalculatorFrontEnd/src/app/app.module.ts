import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppComponent } from './app.component';
import { providerDef } from '@angular/core/src/view';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
