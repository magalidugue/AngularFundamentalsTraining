import { Component, OnInit, Output } from '@angular/core';
import { Form, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Isession } from '../shared';


@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styles: []

})

export class CreateSessionComponent  implements OnInit{
  @Output() saveNewSession = new EventEmitter()
  newSessionForm!: FormGroup
  name!: FormControl
  presenter!: FormControl
  duration!: FormControl
  level!: FormControl
  abstract!: FormControl

  ngOnInit() {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required,
      Validators.maxLength(400)])

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  saveSession(formValues : Isession) {
    let session : Isession = {
      id: 1,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    }

    this.saveNewSession.emit(session)
  }


}
