import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListingService } from '../service/listing.service';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.scss'],
changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddListingComponent implements OnInit {

  constructor(private listingService: ListingService, private router: Router) { }

  listingForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    dob: new FormControl("",[Validators.required]),
    role: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
  })
  ngOnInit(): void {
  }
  newListing(){
    if(this.listingForm.valid){
      this.listingService.addListing(this.listingForm.value).subscribe(res=>{
        this.listingForm.reset();
        this.router.navigate(["/home"]);
      })
    }
  }
}
