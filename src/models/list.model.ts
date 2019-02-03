import { ListItem } from './list-item.model';

export class List {
    id: number;
    title: string;
    creationDate: Date;
    finishedDate: Date;
    finished: boolean;
    items: ListItem[];

    constructor(title: string) {
        this.title = title;
        this.finished = false;
        this.creationDate = new Date();
        this.items = [];
        this.id = new Date().getTime();
    }
}
