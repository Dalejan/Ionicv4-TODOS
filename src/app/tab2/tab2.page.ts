import { Component } from '@angular/core';
import { WishesService } from 'src/providers/wishes.service';
import { NavController } from '@ionic/angular';
import { List } from 'src/models';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private lists: List[] = [];
  constructor(public wishesService: WishesService, private navCtrl: NavController) {
    this.lists = wishesService.lists;
  }

}
