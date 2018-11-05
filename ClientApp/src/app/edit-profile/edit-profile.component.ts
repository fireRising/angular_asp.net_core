import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
  })

export class EditProfileComponent implements OnInit {

    flag_act_subj: boolean = true;
    flag_exp: boolean = true;

    toggle_act_subj() {
        this.flag_act_subj = !this.flag_act_subj;
    }

    toggle_exp() {
        this.flag_exp = !this.flag_exp;
    }

    constructor() { }

    ngOnInit() {
    }

}
