import { Injectable } from '@angular/core';
import { List, ListItem } from 'src/models';

@Injectable()

export class WishesService {

    lists: List[] = [];

    constructor() {
        this.loadStorage();
        // const list1 = new List('Primera lista');
        // const list2 = new List('gg');

        // this.lists.push(list1, list2);
    }


    addList(list: List) {
        this.lists.push(list);
        this.saveStorage();
    }

    deleteList(id: number) {
        this.lists.splice(id, 1);
        this.saveStorage();
    }

    addListItem(listID: any, item: ListItem) {

    }

    saveStorage() {
        console.log('guardar');
        localStorage.setItem('data', JSON.stringify(this.lists));
    }

    loadStorage() {
        if (localStorage.getItem('data')) {
            this.lists = JSON.parse(localStorage.getItem('data'));
        } else {
            this.lists = [];
        }
    }

}
