import { Component, OnInit, Output, EventEmitter, NgZone, ElementRef, ViewChild} from '@angular/core';
import Report from '../../shared/interfaces/interfaces';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {
  submitted: boolean = false;
  address: string;
  genders: Array<object> = [{type: 'male', fr_fr: 'Mâle'}, {type: 'female', fr_fr: 'Femelle'}, {type: 'unknown', fr_fr: 'Je ne sais pas'}];
  reportForm: FormGroup;
  @Output() onSubmitForm: EventEmitter<Report> = new EventEmitter();
  @ViewChild('search') searchElementRef: ElementRef;

  constructor(
    private fb: FormBuilder,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
    this.reportForm = this.fb.group({
      gender: [null],
      localisation: ['', Validators.required],
      time: ['', [Validators.required, Validators.pattern(/\d{2}\/\d{2}\/\d{4}/)]],
      comment: ['']
    });
  }

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });

      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
        });
      });
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.onSubmitForm.emit(this.reportForm.value);
    this.reportForm.reset();
  }
}