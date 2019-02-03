import { IonicModule, NavParams } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddListComponent } from '../add-lis/add-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AddListComponent }])
  ],
  declarations: [AddListComponent]
})
export class AddListModule {}
