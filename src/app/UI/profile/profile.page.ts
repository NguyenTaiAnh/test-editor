import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Jodit } from 'jodit';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class ProfilePage implements OnInit {
  count: number = 0;
  userProfile: any;
  form!: FormGroup;
  formArr!: FormGroup;

  constructor(private _fb: FormBuilder) {}
  onsubmit() {
    console.log({ form: this.form.value });
  }
  onsubmitArr() {
    console.log({ formArray: this.formArr.value });
  }
  ngOnInit() {
    this.loadUserProfile();
    this.form = this._fb.group({
      username: ['', Validators.required],
    });
    this.formArr = this._fb.group({
      items: this._fb.array([]),
    });
    Jodit.make('#jodit-editor');
    Jodit.make('#editor', {
      buttons: ['bold', 'italic', 'underline', '|', 'ul', 'ol'],
      controls: {
        insertText: {
          iconURL: 'https://xdsoft.net/jodit/logo.png',
          exec: function (editor:any) {
            editor.events.fire('someEvent', 'world!!!');
          },
        },
      },
    });
    this.addItem();
  }

  incr() {
    this.count++;
  }
  dess() {
    this.count--;
  }

  get items1() {
    return this.formArr.get('items') as FormArray;
  }

  addItem() {
    const itemGroup = this._fb.group({
      name: ['', Validators.required],
    });

    this.items1.push(itemGroup);
  }

  removeItem(index: number) {
    this.items1.removeAt(index);
  }

  loadUserProfile() {
    // Mock user profile data
    this.userProfile = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      bio: 'Software Developer at XYZ Company',
    };
  }
}
