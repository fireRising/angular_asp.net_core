import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
  })

export class EditProfileComponent implements OnInit {
    
    public Limit: number = 4;

    public BioText: string;

    public NameThemeText: string[] = new Array(this.Limit);
    public RequisitesDocText: string[] = new Array(this.Limit);

    public OrganiseNameText: string[] = new Array(this.Limit);
    public OrganisePosText: string[] = new Array(this.Limit);
    public Date1Text: string[] = new Array(this.Limit);
    public Date2Text: string[] = new Array(this.Limit);


    public CountActSubj: number = 0;
    public ArrCountActObj: number[] = new Array(0);


    public IncrCountActSubj() {
        if (this.CountActSubj < this.Limit) {
            this.CountActSubj += 1;
            this.ArrCountActObj.length = this.CountActSubj
        }
    }

    public DecrCountActSubj() {
        if (this.CountActSubj > 0) {
            this.CountActSubj -= 1;
            this.ArrCountActObj.length = this.CountActSubj
        }

    }


    private CountExperience: number = 0;
    public ArrCountExperience: number[] = new Array(0);

    public IncrCountExp() {
        if (this.CountExperience < this.Limit) {
            this.CountExperience += 1;
            this.ArrCountExperience.length = this.CountExperience;
        }
    }

    public DecrCountExp() {
        if (this.CountExperience > 0) {
            this.CountExperience -= 1;
            this.ArrCountExperience.length = this.CountExperience;
        }

    }

    constructor() { }

    ngOnInit() {
    }

}
