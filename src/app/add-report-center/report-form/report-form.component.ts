import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Report from '../../shared/interfaces/interfaces';
import Place from '../../shared/interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { placesService } from '../places.service';
import {
  debounceTime,
  distinctUntilChanged,
  flatMap,
} from "rxjs/operators";

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {
  submitted: boolean = false;
  flag: boolean = false;
  noResult: boolean = false;
  private searchPlaces = new Subject<string>();
  places: Place[];
  genders: Array<object> = [{type: 'male', fr_fr: 'Mâle'}, {type: 'female', fr_fr: 'Femelle'}, {type: 'unknown', fr_fr: 'Je ne sais pas'}];
  reportForm: FormGroup;
  @Output() onSubmitForm: EventEmitter<Report> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private placesService: placesService
  ) {
    this.reportForm = this.fb.group({
      gender: [null],
      localisation: ['', Validators.required],
      time: ['', [Validators.required, Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)]],
      comment: ['']
    });
  }

  ngOnInit(): void {
    this.reportForm.enable();
    this.searchPlaces.pipe(
      debounceTime(1000),
      distinctUntilChanged(), // ignore if next search text is same as previous
      flatMap(searchText =>  {
        return this.placesService.search(searchText)
      })
    ).subscribe( (places: any) => {
      if(places.length === 0)
        this.noResult = true;

      this.places = places.map(place => {
        return  (
          (place.properties.name ? place.properties.name : place.properties.street)+(place.properties.city ? (', ' + place.properties.city) : '')
        )
      })
    });
  }

  onSubmit(): void {
    this.reportForm.disable();
    this.reportForm.value.time = this.reportForm.value.time.split("/").reverse().join("-");
    this.submitted = true;
    this.onSubmitForm.emit(this.reportForm.value);
    this.reportForm.reset();
  }

  searchPlace() {
    if(this.reportForm.value.localisation.length > 0) {
      this.noResult = false;
      this.flag = true;
      this.searchPlaces.next(this.reportForm.value.localisation);
    } else {
      this.flag = false;
    }
  }

  onselectPlace(place: string) {
    this.reportForm.patchValue({ localisation: place });
    this.flag = false;
  }
}