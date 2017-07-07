import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'user',
    template: `
        <md-card class="card">
            <md-card-content>
            <md-input-container>
                <input mdInput placeholder="First Name" [(ngModel)]="model.firstName">
            </md-input-container>
            <md-input-container>
                <input mdInput placeholder="Last Name" [(ngModel)]="model.lastName">
            </md-input-container>
            <md-card-actions>
                <button color="primary" md-raised-button (click)="post()">Save Changes</button>
            </md-card-actions>
            </md-card-content>
        </md-card>
    `
})

export class UserComponent {

    constructor (private webService: WebService) {}

    model = {
        firstName: "test",
        lastName: ""
    }

    ngOnInit() {
        this.webService.getUser().subscribe(res => {
            this.model.firstName = res.firstName;
            this.model.lastName = res.lastName;
        });
    }

    post() {
        this.webService.saveUser(this.model).subscribe();
    }
}