import { Injectable } from '@angular/core';
import { Features } from './features';
import { Products } from './products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	PHP_API_SERVER = "http://localhost/angularproject/api";
	constructor(private httpClient: HttpClient) {}
	readFeatures(): Observable<Features[]>{
		return this.httpClient.get<Features[]>(`${this.PHP_API_SERVER}/feature.php`);
	}

	readProducts(): Observable<Products[]>{
		return this.httpClient.get<Products[]>(`${this.PHP_API_SERVER}/product.php`);
	}
	
}
