import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Report from '../../shared/interfaces/interfaces';
import Place from '../../shared/interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { placesService } from '../../shared/services/places.service';
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
  @ViewChild('search') searchElementRef: ElementRef;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private placesService: placesService
  ) {
    this.reportForm = this.fb.group({
      gender: [null],
      localisation: ['', Validators.required],
      time: ['', [Validators.required, Validators.pattern(/\d{2}\/\d{2}\/\d{4}/)]],
      comment: ['']
    });
  }

  ngOnInit(): void {
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

  onselectPlace() {
    this.flag = false;
  }
}