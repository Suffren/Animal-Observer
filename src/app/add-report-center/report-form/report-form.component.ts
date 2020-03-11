import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import Report from '../../shared/interfaces/interfaces';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {
  submitted: boolean = false;
  genders: Array<object> = [{type: 'male', fr_fr: 'Mâle'}, {type: 'female', fr_fr: 'Femelle'}, {type: 'unknown', fr_fr: 'Je ne sais pas'}];
  reportForm: FormGroup;
  @Output() onSubmitForm: EventEmitter<Report> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.reportForm = this.fb.group({
      gender: [null],
      localisation: ['', Validators.required],
      time: ['', Validators.required],
      comment: ['']
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    this.submitted = true;
    this.onSubmitForm.emit(this.reportForm.value);
    this.reportForm.reset();
  }
}