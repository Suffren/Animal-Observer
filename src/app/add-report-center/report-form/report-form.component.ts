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
  filter,
  flatMap
} from "rxjs/operators";

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {
  submitted: boolean = false;
  flag: boolean = false;
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
      filter(searchText => searchText.length > 5),
      debounceTime(1500),
      distinctUntilChanged(), // ignore if next search text is same as previous
      flatMap(searchText =>  {
        return this.placesService.search(searchText)
      })
    ).subscribe( (res) => {
      this.places = res
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.onSubmitForm.emit(this.reportForm.value);
    this.reportForm.reset();
  }

  searchPlace() {
    this.flag = true;
    this.searchPlaces.next(this.reportForm.value.localisation);
  }

  onselectPlace() {
    this.flag = false;
  }
}