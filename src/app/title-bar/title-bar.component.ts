import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-title-bar',
    templateUrl: './title-bar.component.html',
    styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

    title: string;
    subtitle: string;

    constructor() {
    }

    ngOnInit() {
        this.title = '...';
        this.subtitle = '- Link, The legend of Zelda';
    }

}
