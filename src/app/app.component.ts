import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    active = [];
    smaller = false;

    ngOnInit() {
        this.setFalses();
    }

    setFalses() {
        this.active = [false, false, false, false, false, false, false, false, false];
    }
}
