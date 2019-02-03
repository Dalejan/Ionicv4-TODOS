import { Component } from '@angular/core';
import { WishesService } from 'src/providers/wishes.service';
import { List, ListItem } from 'src/models';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-list',
  templateUrl: 'add-list.component.html'
})
export class AddListComponent {
  list: List;
  itemName: string;
  constructor(
    public wishesService: WishesService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {
    if (this.route.snapshot.paramMap.get('list')) {
      this.list = JSON.parse(this.route.snapshot.paramMap.get('list'));

    } else {
      this.list = new List(route.snapshot.paramMap.get('title'));
      this.wishesService.addList(this.list);
    }
  }

  goBack() {
    this.wishesService.saveStorage();
    this.navCtrl.back();
  }

  addItem() {
    if (this.itemName.length === 0) {
      return null;
    }
    const item = new ListItem(this.itemName);
    this.list.items.push(item);
    this.itemName = '';
    this.wishesService.saveStorage();
  }

  updateTask(item: ListItem) {
    item.finished = !item.finished;

    if (this.list.items.filter((itemD) =>  itemD.finished === true).length === this.list.items.length) {
      this.list.finished = true;
      this.list.finishedDate = new Date();
    }

    this.wishesService.saveStorage();
  }
  deleteItem(i: number) {
    this.list.items.splice(i, 1);
    this.wishesService.saveStorage();

  }
}
