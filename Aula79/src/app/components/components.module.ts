import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { FilterComponent } from './filter/filter.component';
import { PipesModule } from "../pipes/pipes.module";
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgModule } from "@angular/core";
import { UsersListComponent } from './users-list/users-list.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        UserDetailsComponent,
        FilterComponent,
        UsersListComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        AngularMaterialModule,
        PipesModule,
        MatDialogModule
    ],
    exports: [
        UserDetailsComponent,
        FilterComponent,
        UsersListComponent
    ],
})
export class ComponentsModule { }