import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../../services/contact.service";
import {IContact} from "../../models/IContact";
import {IGroup} from "../../models/IGroup";

@Component({
  selector: 'app-details-contact',
  templateUrl: './details-contact.component.html',
  styleUrls: ['./details-contact.component.css']
})
export class DetailsContactComponent implements OnInit {

  public loading: boolean = false;
  public contactId: string | null = null;
  public contact:IContact = {} as IContact;
  public errorMessage: string | null = null;
  public group:IGroup = {} as IGroup;

  constructor(private route: ActivatedRoute,
              private contactService: ContactService)
  {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.contactId = param.get('contactId');
    });
    if(this.contactId){
      this.loading = true;
      this.contactService.getContact(this.contactId).subscribe((data) => {
        this.contact = data;
        this.loading = false;
        this.contactService.getGroup(data).subscribe((data)=> {
          console.log(data);
          this.group = data;
        })
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      });
    }
  }

  public isNotEmpty() {
    return Object.keys(this.contact).length > 0 && Object.keys(this.group).length > 0;
  }

}
