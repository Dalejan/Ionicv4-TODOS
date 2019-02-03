import { Component } from '@angular/core';
import { WishesService } from 'src/providers/wishes.service';
import { List } from 'src/models';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private lists: List[] = [];

  constructor(public wishesService: WishesService, private navCtrl: NavController
    , private alertCtrl: AlertController) {
    this.lists = wishesService.lists;
  }


  async addList() {
    const alert = await this.alertCtrl.create({
      header: 'New List',
      message: 'Name of the new list',
      inputs: [{
        name: 'title',
        type: 'text',
        placeholder: 'name'
      }],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Ok', handler: (data: any) => {
            return data.title.length > 0 ?
              this.navCtrl.navigateForward(['/add-list', { title: data.title }]) :
              null;
          }
        }
      ]
    });

    await alert.present();
  }


  openList(list: List) {
    this.navCtrl.navigateForward(['/add-list', {
      title: list.title,
      list: JSON.stringify(list)
    }
    ]);

  }
  deleteList(i: number) {
    this.wishesService.deleteList(i);
  }
}
