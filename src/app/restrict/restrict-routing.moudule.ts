import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductRegistrationComponent } from "./product-registration/product-registration.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { UpdateProductComponent } from "./update-product/update-product.component";
import { RestrictComponent } from "./restrict.component";
import { GuardGuard } from "../guard.guard";

const restrictRoutes: Routes = [
    {
        path: 'restrict', component: RestrictComponent, children: [
            { path: 'registration', component: ProductRegistrationComponent, canActivate: [GuardGuard] },
            { path: 'list', component: ProductListComponent, canActivate: [GuardGuard] },
            { path: 'update/:id', component: UpdateProductComponent, canActivate: [GuardGuard] }      
    ]},

    { path: '', redirectTo: '/restrict/list', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(restrictRoutes)],
    exports: [RouterModule]
})
export class RestrictRoutingModule {

}
