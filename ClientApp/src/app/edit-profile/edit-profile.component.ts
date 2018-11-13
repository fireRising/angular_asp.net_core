import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
  })

export class EditProfileComponent implements OnInit {
    
    limit: number = 4;

    bio_text: string;

    name_theme_text: string[] = new Array(this.limit);
    requisites_doc_text: string[] = new Array(this.limit);

    organise_name_text: string[] = new Array(this.limit);
    organise_pos_text: string[] = new Array(this.limit);
    date1_text: string[] = new Array(this.limit);
    date2_text: string[] = new Array(this.limit);


    count_act_subj: number = 0;
    arr_count_act_obj: number[] = new Array(0);


    incrCountActSubj() {
        if (this.count_act_subj < this.limit) {
            this.count_act_subj += 1;
            this.arr_count_act_obj.length = this.count_act_subj
        }
    }

    decrCountActSubj() {
        if (this.count_act_subj > 0) {
            this.count_act_subj -= 1;
            this.arr_count_act_obj.length = this.count_act_subj
        }

    }


    count_experience: number = 0;
    arr_count_experience: number[] = new Array(0);

    incrCountExp() {
        if (this.count_experience < this.limit) {
            this.count_experience += 1;
            this.arr_count_experience.length = this.count_experience;
        }
    }

    decrCountExp() {
        if (this.count_experience > 0) {
            this.count_experience -= 1;
            this.arr_count_experience.length = this.count_experience;
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
