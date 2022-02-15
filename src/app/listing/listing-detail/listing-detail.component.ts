import { Component, OnInit,OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user/service/user.service';
import { Listing } from '../model/listing';
import { ListingService } from '../service/listing.service';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingDetailComponent implements OnInit,OnDestroy {

  constructor(
    private listingService:ListingService,
    private route:ActivatedRoute,
    private router:Router,
    public userService:UserService) { }
 
  id!: any;
  listing!: Listing;
  ListingSub!: Subscription;
  showForm: boolean = false;
  editListingForm = new FormGroup({
      name: new FormControl("",[Validators.required]),
      dob: new FormControl("",[Validators.required]),
      role: new FormControl("",[Validators.required]),
    })
    
    ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.ListingSub = this.listingService.getListing(this.id).subscribe(listing=>{
      this.listing=listing
    })
  }
  showEdit(){
    this.showForm=!this.showForm
  }
  editListing(){
    this.id=this.route.snapshot.paramMap.get("id");
    if(this.editListingForm.valid){
      this.listingService.editListing(this.editListingForm.value,this.id).subscribe(res=>{
        this.editListingForm.reset();
        this.router.navigate(["/home"]);
      })
    }
  }
  removeListing(){
    this.id= this.route.snapshot.paramMap.get("id");
    this.listingService.deleteListing(this.id).subscribe(res =>{
      console.log(res);
      this.router.navigate(["/home"]);
    })
  }
  ngOnDestroy(){
    this.ListingSub.unsubscribe();
  }

}
