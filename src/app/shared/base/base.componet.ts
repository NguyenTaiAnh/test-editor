import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    template: ''
})
export abstract class BaseComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];

    // Add common properties or methods that will be shared across derived components
    protected abstract initialize(): void;

    constructor() {
        this.initialize();
    }

    ngOnInit(): void {
        // Common initialization logic
    }

    ngOnDestroy(): void {
        this.unsubscribe();
    }

    protected addSubscription(subscription: Subscription): void {
        this.subscriptions.push(subscription);
    }

    private unsubscribe(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
        this.subscriptions = [];
    }
}