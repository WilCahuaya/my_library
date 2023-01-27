import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AnyARecord } from 'dns';
import { Storage } from '@ionic/storage';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  elegido:any;
  elegidoCareer:any;
  registerForm: FormGroup;
  validation_message = {
    name: [
      { type: "required", message: "El nombre es Obligatorio" },
      { type: "maxLength", message: "Número de caracteres como maximo 20" }
    ],
    last_name: [
      { type: "required", message: "Los apellidos son Obligatorio" },
      { type: "maxLength", message: "Número de caracteres como maximo 40" }
    ],
    document_type: [
      { type: "required", message: "Tipo de documento es Obligatorio" },
    ],
    document_number: [
      { type: "required", message: "El número de documento es Obligatorio" },
      { type: "maxLength", message: "Número de caracteres como maximo 8" }
    ],
    career: [
      { type: "required", message: "La carrera profesional es Obligatorio" },
      { type: "maxLength", message: "Número de caracteres como maximo 20" }
    ],
    email: [
      { type: "required", message: "El Email es Obligatorio" },
      { type: "pattern", message: "Tu email no es valido" }
    ],
    password: [
      { type: "required", message: "La contraseña es Obligatorio" },
      { type: "minLength", message: "Número de caracteres como minimo 5" }
    ]
  }

  errorMessage: any;
  constructor(private navCtrl: NavController, private formBuilder:FormBuilder, private storage:Storage,private authenticate:AuthenticateService) { 
    this.registerForm=this.formBuilder.group({
      name:new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(20)
        ])
      ),
      last_name:new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(40)
        ])
      ),
      document_type:new FormControl(
        "",
        Validators.compose([
          Validators.required,
        ])
      ),
      document_number:new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(8)
        ])
      ),
      career:new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(20)
        ])
      ),
      email:new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password:new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      )
    });
  }

  ngOnInit() {
  }
 registerUser(register_form:any){
  this.authenticate.registerUser(register_form).then(()=>{
    this.navCtrl.navigateForward("/login");
  })
 }

 setValueTypeDocument(elegido:any){
  console.log(elegido);
  this.elegido=this.elegido;
 }

 setValueTypeDocumentCareer(elegidoCareer:any){
  console.log(elegidoCareer);
  this.elegidoCareer=this.elegidoCareer;
 }
}
