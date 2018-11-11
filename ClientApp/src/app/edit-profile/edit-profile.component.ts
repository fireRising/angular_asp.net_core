import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
  })

export class EditProfileComponent implements OnInit {

    bio_text: string = "";

    limit: number = 4;
    name_theme_text: string[] = new Array(this.limit);
    requisites_doc_text: string[] = new Array(this.limit);

    organise_name_text: string[] = new Array(this.limit);
    organise_pos_text: string[] = new Array(this.limit);
    date1_text: string[] = new Array(this.limit);
    date2_text: string[] = new Array(this.limit);


    count_act_subj: number = 0;
    arr_count_act_obj: number[] = Array.from(Array(this.count_act_subj).keys());

    incrCountActSubj() {
        if (this.count_act_subj < this.limit) {
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


    count_experience: number = 0;
    arr_count_experience: number[] = Array.from(Array(this.count_experience).keys());

    incrCountExp() {
        if (this.count_experience < this.limit) {
            this.count_experience += 1;
            this.arr_count_experience = Array.from(Array(this.count_experience).keys());
        }
    }

    decrCountExp() {
        if (this.count_experience > 0) {
            this.count_experience -= 1;
            this.arr_count_experience = Array.from(Array(this.count_experience).keys());
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
