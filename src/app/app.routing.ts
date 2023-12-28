import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { FeaturesComponent } from './features/features.component';
const routes: Routes = [
{ path: "home", component: HomeComponent },
{ path: "about", component: AboutComponent },
{ path: "contact", component: ContactComponent },
{ path: "products", component: ProductsComponent },
{ path: "blog", component: BlogComponent },
{ path: "features", component: FeaturesComponent },
{ path: "", component: HomeComponent }]
export const routing = RouterModule.forRoot(routes);