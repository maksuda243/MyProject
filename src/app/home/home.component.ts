import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Features } from '../features';
import { Products } from '../products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public features?: Features[];
  public products?: Products[];

  constructor(private apiService: ApiService) {
    this.apiService.readFeatures().subscribe((features: Features[])=>{
			this.features = features;
		})

    this.apiService.readProducts().subscribe((products: Products[])=>{
			this.products = products;

		})
 

  }
}
