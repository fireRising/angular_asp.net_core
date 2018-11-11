import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
  })

export class EditProfileComponent implements OnInit {

    bio_text: string = "";
    name_theme_text: string[] = new Array(10);
    requisites_doc_text: string[] = new Array(10);
    organise_name_text: string = "";


    count_act_subj: number = 0;
    arr_count_act_obj: number[] = Array.from(Array(this.count_act_subj).keys());

    incrCountActSubj() {
        if (this.count_act_subj < 10) {
            this.count_act_subj += 1;
            this.arr_count_act_obj = Array.from(Array(this.count_act_subj).keys());
        }
    }

    decrCountActSubj() {
        if (this.count_act_subj > 0) {
            this.count_act_subj -= 1;
            this.arr_count_act_obj = Array.from(Array(this.count_act_subj).keys());
        }

    }


    /*
    flag_act_subj: boolean = true;
    flag_exp: boolean = true;

    toggle_act_subj() {
        this.flag_act_subj = !this.flag_act_subj;
    }

    toggle_exp() {
        this.flag_exp = !this.flag_exp;
    }
    */
    constructor() { }

    ngOnInit() {
    }

}
