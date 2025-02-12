import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
    standalone:true,
    imports:[CommonModule, ReactiveFormsModule]
})
export class ProfilePage implements OnInit {

    userProfile: any;
    form!: FormGroup;
    formArr!: FormGroup;

    constructor( private  _fb: FormBuilder ) { }
    onsubmit() {
        console.log({form: this.form.value});
    }
    onsubmitArr(){
      console.log({formArray: this.formArr.value})
    }
    ngOnInit() {
        this.loadUserProfile();
        this.form = this._fb.group({
          username: ['', Validators.required],
        })
      this.formArr = this._fb.group({
        items: this._fb.array([])
      })
      this.addItem()
    }

    get items1(){
      return this.formArr.get('items') as FormArray;
    }

    addItem(){
      const itemGroup = this._fb.group({
        name: ['', Validators.required],
      })

      this.items1.push(itemGroup);
    }

    removeItem(index: number){
      this.items1.removeAt(index);
    }

    loadUserProfile() {
        // Mock user profile data
        this.userProfile = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            bio: 'Software Developer at XYZ Company'
        };
    }

}
