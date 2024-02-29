import { Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-email-recipients',
  templateUrl: './email-recipients.component.html',
  styleUrls: ['./email-recipients.component.scss']
})
export class EmailRecipientsComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  emailCtrl = new FormControl('');
  filteredEmails: Observable<string[]>;
  recipients: string[] = [];
  ccRecipients: string[] = [];
  bccRecipients: string[] = [];
  allEmails: string[] = ['shippercontact@shipper.com','person@example.com','customercontact@contact.com'];

  showCC = signal(false);
  showBCC = signal(false);

  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement> | undefined;

  announcer = inject(LiveAnnouncer);

  constructor() {
    this.filteredEmails = this.emailCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allEmails.slice())),
    );
  }

  add(event: MatChipInputEvent, recipients: string[]): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      recipients.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.emailCtrl.setValue(null);
  }

  remove(fruit: string, recipients: string[]): void {
    const index = this.recipients.indexOf(fruit);

    if (index >= 0) {
      recipients.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent, recipients: string[]): void {
    recipients.push(event.option.viewValue);
    this.emailInput!.nativeElement.value = '';
    this.emailCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allEmails.filter(email => email.toLowerCase().includes(filterValue));
  }

  toggleCC() {
    this.showCC.update(prev => !prev);
  }

  toggleBCC() {
    this.showBCC.update(prev => !prev);
  }
}
