import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Http } from '../../../node_modules/@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CalculadoraService {

	BASE_API = 'https://wt-dd7f9d70d9b5dbe4ed013664e55f4a4d-0.sandbox.auth0-extend.com/';
	calcFunction = 'calcular';
	isOperatorFunction = 'isOperator'

	constructor(private http: Http, private httpClient: HttpClient) {

	}

	replaceAll(strOrig, str1, str2, ignore) {

		return strOrig.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof (str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
	}

	calcular(expressaoToEvaluate: string): Observable<any> {

		const value = this.replaceAll(expressaoToEvaluate,'+', '%2B', false);
		return this.httpClient.get(this.BASE_API + this.calcFunction + '/?expressao=' + value);

	}

	isOperator(value: string): Observable<any> {

		value = value.replace('+', '%2B');

		return this.httpClient.get(this.BASE_API + this.isOperatorFunction + '/?value=' + value);

	}

}