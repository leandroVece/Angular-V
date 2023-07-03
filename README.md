ANGULAR 5

En esta parte vamos a ver el suo de Angular fomrs en nuestro proyecto de Angular. Para comenzar usaremos el mismo proyecyo que estabamos trabajando y crearemos un nuevo componenete para poner a prueba.

    ng g c cms/pages/testForm

> Como solo tiene funcion de prieba vamos a dejarlo en la parte del cms. Confio que a estas alturas sabras como enrutar la nueva pagina.

Despues de crear el nuevo generador vamos a importar **ReactiveFormsModule**, este es un módulo que nos provee Angular para definir formularios de una forma mas intuitiva y reactiva.

> En el pasado usamos el formsModule para hacer algunos ejemplos, esta herramienta de Angular es mas pontete en cuanto al uso de formularios, por lo que es bueno verlo.

**cms.module.ts**

    import { ReactiveFormsModule } from '@angular/forms';

    @NgModule({
      imports: [
      CommonModule,
      CmsRoutingModule,
      SharedModule,
      ReactiveFormsModule
     ]
    })

Termimado de importar nos dirigimos rapidamente a la carteta de nuestro nuevo generador de prueba, e importarmo la pieza fundamental de nuestros formularios reactivos **el formControl**

**test-form.component.ts**

    import { Component } from '@angular/core';
    import { FormControl } from '@angular/forms';

    @Component({
      selector: 'app-test-form',
      templateUrl: './test-form.component.html',
      styleUrls: ['./test-form.component.scss']
    })
    export class TestFormComponent {

      nameField =  new FormControl('soy un control');

    }

Como pueden ver, cree una nueva instancia donde voy a guardar el valor de un controlador por defecto. Ahora si vamos a nuestro html podemos ver que efecto tiene nuestro controlador.

    <p>
      {{nameField.value}}
      <input type="text" [formControl]="nameField">
    </p>

Como puedes ver este esta actualizando su contenido de manera reactiva(tiempo real); Esto puede no ser diferente de los ejemplos que mostramos anteriormenete, pero este controlador no es simple. Para ver un poco la complejidad del controlador imrpimamos en consola lo que tiene por dentro.


**test-form.component.ts**

  export class TestFormComponent {

    nameField = new FormControl('soy un control');

    getValue() {
      console.log(this.nameField);
    }
  }

**Html**

    <p>
    {{nameField.value}}
      <input type="text" [formControl]="nameField">
      <button (click)="getValue()">Get Value</button>
    </p>

No voy a entrar en detalles, mi intencion no es remarcar lo que esta en cientos de lugares, sino mostrar con simples ejemplos el uso que tienen estas herramientas cualquier duda consultar en el siguinte [link](https://angular.io/guide/reactive-forms)


Para no alargar todo veamos unos cuantos controladores mas.

    <p>
      {{nameField.value}}
      <input type="text" [formControl]="nameField">
      <button (click)="getValue()">Get Value</button>
    </p>


    <p>
      Email: {{ emailField.value }}
      <input type="email" [formControl]="emailField" />
    </p>

    <p>
      Phone: {{ phoneField.value }}
      <input type="tel" [formControl]="phoneField" />
    </p>

    <p>
      Color: {{ colorField.value }}
      <input type="color" [formControl]="colorField" />
    </p>

    <p>
      Date: {{ dateField.value }}
      <input type="date" [formControl]="dateField" />
    </p>

    <p>
      Month: {{ monthField.value }}
      <input type="month" [formControl]="monthField" />
    </p>

    <p>
      Age: {{ ageField.value }}
      <input type="number" [formControl]="ageField" />
    </p>

    <p>
      Password: {{ passwordField.value }}
      <input type="password" [formControl]="passwordField" />
    </p>

    <p>
      Range Price: {{ priceField.value }}
      <input type="range" [formControl]="priceField" min="0" max="100" />
    </p>

    <p>
      Wekend: {{ weekField.value }}
      <input type="week" [formControl]="weekField" />
    </p>

    <p>
      Date and time: {{ timefield.value }}
      <input type="datetime-local" [formControl]="timefield" />
    </p>

    <p>

      Search: {{ searchField.value }}
      <input type="search" [formControl]="searchField" />
    </p>

    <p>

      category: {{ categoryField.value }}
      <select [formControl]="categoryField">
        <option value="Category 1">category 1</option>
        <option value="Category 2">category 2</option>
        <option value="Category 3">category 3</option>

      </select>
    </p>

    <p>

      Description: {{ descriptionField.value }}
      <textarea type="text" [formControl]="descriptionField">
        </textarea>
    </p>


**Ts**

    export class TestFormComponent {
      ...
      emailField = new FormControl('');
      phoneField = new FormControl('');
      colorField = new FormControl('#000000');
      dateField = new FormControl('');
      monthField = new FormControl('');
      ageField = new FormControl(12);
      passwordField = new FormControl('');
      priceField = new FormControl('50');
      weekField = new FormControl('');
      timefield = new FormControl('');
      searchField = new FormControl('');
      categoryField = new FormControl('Category 1');
      descriptionField = new FormControl('');
    }

## validaciones.

Angular tiene su propio set de validaciones que nos pueden ayudar a hacer la interaccion con el usuario mas simple y segura.
Para ellos importemos en nuestro componenete actual, el observable necesario.

    import { FormControl, Validators } from '@angular/forms';

en los form controls podemos tenemos 3 parametros de entrada.

    nameField = new FormControl('Text',[sync],async);

El primero es el valor por defecto que hemos visto hasta ahora. El segundo son validaciones sincronas que pueden ser mas de uno por lo que es buana practica guardarlos en un array. El tercero se usa para las validaciones asincronas.

Veamos un ejemplo.

**TS**

    nameField = new FormControl('',[Validators.required, Validators.maxLength(10)]);

**html**

    <p>
      Name: ({{nameField.value}}) {{nameField.valid}}
      <input type="text" [formControl]="nameField">
      <button [disabled]="nameField.invalid" (click)="getValue()">Get Value</button>
    </p>

con esto podemos evitar que nuestro usuario envien un formulario cuando no tienen la informacion pedida de acuerdo a las reglas que le dimos (campo requerido y que tenga maxlent de 10)

Claro que esto por si solo no es suficiente, por lo que condimentarlo mas para hacerlo mas accesible.

    <p>
      Name: {{nameField.value}} ({{nameField.valid}})
      <input type="text" [formControl]="nameField">
      <button [disabled]="nameField.invalid" (click)="getValue()">Get Value</button>
    </p>

    <p>
      <strong *ngIf="nameField.touched && nameField.hasError('maxlength')"> Debe tener un maximo 10 caracteres</strong>
    </p>
    <p>
      <strong *ngIf="nameField.touched && nameField.hasError('required')"> ESte campo es requerido</strong>
    </p>

Con esta pequeña implementacion, podemos dejar mensajes emergentes para nuestros usuarios. Ahora veamos un poco de CSS simple que le podria dar un poco mas de presencia a nuestra app.

**css**

    input{
      &.is-valid {
        border: 2px solid green;
      }
      &.is-invalid {
        border: 2px solid red;
      }
    }
    .messages {
      opacity: 0;
      transition: all 0.5s ease-in;
      &.active {
          opacity: 1;
      }
      & strong {
          color: darkred;
      }
    }

**html**

    <p>
      Name: {{nameField.value}} ({{nameField.valid}})
      <input [class.is-valid]="nameField.touched && nameField.valid"
        [class.is-invalid]="nameField.touched && nameField.invalid" type="text" [formControl]="nameField">
      <button [disabled]="nameField.invalid" (click)="getValue()">Get Value</button>
    </p>

    <div class="messages" [class.active]="nameField.touched && nameField.invalid">
      <p>
        <strong *ngIf="nameField.touched && nameField.hasError('maxlength')"> Debe tener un maximo 10 caracteres</strong>
      </p>
      <p>
        <strong *ngIf="nameField.touched && nameField.hasError('required')"> ESte campo es requerido</strong>
      </p>
    </div>

Pero aqui notamos que estamos repitiendo codigo, lo que ya sabemos que es una mala practica, por lo tanto como buenos desarrolladores que somos vamos a encerrar en una funcion el codigo que esta repetido y llamar la funcion en vez de repetir el codigo.

**ts**

    get isNameFielValid() {
      return this.nameField.valid && this.nameField.touched;
    }
    get isNameFielInvalid() {
      return this.nameField.invalid && this.nameField.touched;
    }

**Html**

    <p>
      Name: {{nameField.value}} ({{nameField.valid}})
      <input [class.is-valid]="isNameFielValid" [class.is-invalid]="isNameFielInvalid" type="text"
        [formControl]="nameField">...
    </p>
    <div class="messages" [class.active]="isNameFielInvalid">
      ...
    </div>

>Nota: si te fijas bien aqui estamos haciendo uso de los getes para obtener los valores. 

## Forms Grups

Ahora esto por si mismo puede parecer bastante conveniente, pero angular forms todavia tiene mas cosas que compartir con nosotros. Los formGrups como su nombre lo dice es un grupo de form controls que nos permite trabajar todo como si fuerta un mismo ser.

Para comenzar tenemos que llamar a nuestro fromGrup

    form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        email: new FormControl(''),
        phone: new FormControl(''),
        color: new FormControl('#000000'),
        date: new FormControl(''),
        month: new FormControl(''),
        age: new FormControl(12),
        password: new FormControl(''),
        price: new FormControl('50'),
        week: new FormControl(''),
        time: new FormControl(''),
        search: new FormControl(''),
        description: new FormControl(''),
        category: new FormControl('Category 1'),
      })

Como pueden notar creamos un nuevo archivo y en su interior agregamos los datos como si fuera en archivo js.

Luego volvemos a nuestro Html creamos el formulario al que asociamos nuestro formGrup y cambiamos las directivas en los input

    <form [formGroup]="form" (ngSubmit)="save()">
      <p>
        Name: {{nameField.value}} ({{nameField.valid}})
        <input [class.is-valid]="isNameFielValid" [class.is-invalid]="isNameFielInvalid" type="text"
          formControlName="name">
      </p>

      ...
      <p>
        <button type="submit" [disabled]="form.invalid">Enviar</button>
      </p>
    </form>



Si prestas atencion hemos cambiado el nombre con el que cada FormControl se asociava al input, entonces para evitar que nuestro codigo explote por que no encuentra la referencia a los viejos nombres podemos crear un geter para solucionarlo.

A su vez este formGroup tiene un estado, que si aquellos campos que estan requeridos no cumplen las condiciones, el boton de submit no se habilitara.

    export class TestFormComponent {

      save() {
        console.log(this.form.value)
      }

      get nameField() {
        return this.form.get('name')!;
      }
      get emailField() {
        return this.form.get('email')!;
      }
      ...
    }

>Con este signo de interrogacion le decimos al motor que estamos seguros que no recibiremos valores nulos.

Por ultimo el evento submit que permitira enviar o guardar datos dependiendo de lo que pidamos.

### FormBuilder

Angular tiene un propio servicio generador de formularios llamado FormBuilder. Sus fuciones son las mismas, pero tiene una sintaxis mas amigable.

    export class TestFormComponent {

      form!: FormGroup;

      constructor(
        private formBuilder: FormBuilder
      ) {
        this.buildForm();
      }

      getValue() {
        console.log(this.nameField);
      }

      save() {
        console.log(this.form.value)
      }

      private buildForm() {
        this.form = this.formBuilder.group({
          name: ['', [Validators.required, Validators.maxLength(10)]],
          email: [''],
          phone: [''],
          color: ['#000000'],
          date: [''],
          month: [''],
          age: [12],
          password: [''],
          price: ['50'],
          week: [''],
          time: [''],
          search: [''],
          description: [''],
          category: ['Category 1'],
        })
        ...
      }
    }

### Manejo de multiples formGrup

Esta es una opcion interesante si es que queremos dividir la informacion de acuerdo a las necesidades o relgas que definamos.

    private buildForm() {
      this.form = this.formBuilder.group({
        user: this.formBuilder.group({
          name: ['', [Validators.required, Validators.maxLength(10)]],
          email: [''],
          phone: [''],
        }),
        color: ['#000000'],
        date: [''],
        month: [''],
        age: [12],
        password: [''],
        price: ['50'],
        week: [''],
        time: [''],
        search: [''],
        description: [''],
        category: ['Category 1'],
      })
    }

De esta manera podemos separa los formularios de acuerdo a la demanda.


### Angular material

Aunque tenemos muchas librerias que nos ayudan a integrar la parte del css como Boostrap, Angular tiene su propio liy de herramientas llamada Angular material. Para intalarlo vamos a nuestra terminal de comando y agregamos.

    ng add @angular/material

no entraremos mucho en el tema para no tocar demaciado el css, pero dejo el [link](https://material.angular.io/components/button/overview) para que todos puedan consultarla y usarla en sus proyecytos si asi lo desean.

>Nota: siempre es bueno no usar mas de una libreria para hacer el mismo trabajo, si estas usando otra como Boostrap es preferible terminar con esa libreria y no implementar otra que podria traer errore.


## Validaciones Personalisadas

Para hacer algunas validaciones personalisadas segun para nuestros formularios, siempre podemos hacer uso de Js puro para la logica. De esta manera nos haceguramos de darle un poco mas de robustes a la aplicacion y no solo casarnos con lo que Angular nos provee.

Comencemos por crear una nueva carpeta para guardar estos archivos que vamos a usar para nuestras validaciones personalizadas. en mi caso cree una nueva carpeta dentro de app llamada utils. Luego cree un nuevo archivo llamado Validators.ts

    import { AbstractControl } from '@angular/forms';

    export class MyValidators {


      static validPassword(control: AbstractControl) {
        const value = control.value;
        if (!containsNumber(value)) {
          return { invalid_password: true };
        }
        return null;
      }

      static matchPasswords(control: AbstractControl) {
        const password = control.get('password')!.value;
        const confirmPassword = control.get('confirmPassword')!.value;
        if (password !== confirmPassword) {
          return { match_password: true };
        }
        return null;
      }

    }

    function containsNumber(value: string) {
      return value.split('').find(v => isNumber(v)) !== undefined;
    }


    function isNumber(value: string) {
      return !isNaN(parseInt(value, 10));
    }

Para no seguir trabajando en la nada, vamos a hacer nuestras validaciones en componente de registro.

>Por el momento no conectaremos a la api, porque ya se ha hablado del tema con anterioridad. Aun asi puedes asumir el reto para poner a prueba lo aprendido.


**ts**

    import { Component } from '@angular/core';
    import { FormBuilder, FormGroup, Validators } from '@angular/forms';
    import { Router } from '@angular/router';

    import { AuthService } from 'src/app/services/auth.service';
    import { MyValidators } from 'src/app/utils/Validators';

    @Component({
      selector: 'app-register',
      templateUrl: './register.component.html',
      styleUrls: ['./register.component.scss']
    })
    export class RegisterComponent {

      formRegister!: FormGroup;

      constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService
      ) {
        this.buildForm();
      }

      register(event: Event) {
        //crear evento de registro
      }

      private buildForm() {
        this.formRegister = this.formBuilder.group({
          email: ['', [Validators.required]],
          password: ['', [Validators.required, Validators.minLength(6), MyValidators.validPassword]],
          confirmPassword: ['', [Validators.required]],
        }, {
          validators: MyValidators.matchPasswords
        });
      }

      get passwordField() {
        return this.formRegister.get('password')!;
      }

      get confirmPasswordField() {
        return this.formRegister.get('confirmPassword')!;
      }

      get emailField() {
        return this.formRegister.get('email')!;
      }
    }


Como podemos ver aqui estamos usando no solo los valores requeridos que Angular Fomrs nos trae por defecto sino que tambien estamos usando nuestros propios validadores.

Tamien podemos ver que estamos haciendo uso de validaciones grupales, en este caso podemos notar que tenemos dos campos que tiene que tener los mismos valores. Angular para facilitarnos el trabajo y evitar que copiemos la mismas funciones para dos campos nos permite hacerlo de una forma muy simple, con un objeto que tenga un nuevo parametro de validacion.

    <form [formGroup]="formRegister" (ngSubmit)="register($event)">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Registro</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="row">
            <div class="col-xs">
              <mat-form-field>
                <mat-label>Email</mat-label>
                <input placeholder="email" formControlName="email" matInput type="email">
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-xs">
              <mat-form-field>
                <mat-label>Password</mat-label>
                <input placeholder="password" formControlName="password" matInput type="password">
                <div *ngIf="passwordField.touched && passwordField.invalid">
                  <mat-error *ngIf="passwordField.hasError('invalid_password')">
                    Debe tener un numero
                  </mat-error>
                </div>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-xs">
              <mat-form-field>
                <mat-label>Confirm Password</mat-label>
                <input placeholder="password" formControlName="confirmPassword" matInput type="password">
                <div *ngIf="confirmPasswordField.touched && formRegister.errors">
                  <mat-error *ngIf="formRegister.hasError('match_password')">
                    No hace match
                  </mat-error>
                </div>
              </mat-form-field>
            </div>
          </div>
        </mat-card-content>
        <mat-card-actions>
          <button [disabled]="formRegister.invalid" mat-raised-button type="submit">Registro</button>
        </mat-card-actions>
      </mat-card>
    </form>

subamos un nivel mas y creemos en nuestro formulario un campo que tenga una validacion condicional ¿Que quiero decir con esto? simplemente que si un campo cumple las condiciones el siguiente campo sera obligatorio o no.

**Ts**

    private buildForm() {
        this.form = this.formBuilder.group({
          email: ['', [Validators.required]],
          password: ['', [Validators.required, Validators.minLength(6), MyValidators.validPassword]],
          confirmPassword: ['', [Validators.required]],
          type: ['company', [Validators.required]],
          companyName: ['', [Validators.required]],
        }, {
          validators: MyValidators.matchPasswords
        });

        this.typeField.valueChanges
        .subscribe(value => {
          if (value === 'company') {
            this.companyNameField.setValidators([Validators.required]);
          } else {
            this.companyNameField.setValidators(null);
          }
          this.companyNameField.updateValueAndValidity();
        });
      }

      get typeField() {
        return this.form.get('type');
      }

      get companyNameField() {
        return this.form.get('companyName');
      }

Aqui agregaremos dos campos nuevo a nuestro registro para hacer la prueba. En nuestra funcion agregamos tambien un metodo de subcripcion que vañidara si el input radio tiene un valor determinado en el caso de que si, el siguiente input tendra requisitos de validacion y en caso contraio nos permitira mandar el formulario normalmente.

> Nota: si quieres evitar el problema de **El objeto es posiblemente "null".ts(2531)** vamos a archivo tsconfig.json y agregamos la siguiente linea

    {
      ...
      "angularCompilerOptions": {
      "strictNullChecks": false,
      ...
      }
    }

**html**

    <div class="row">
      <div class="col-xs">
        <mat-radio-group formControlName="type" aria-label="Select an option">
          <mat-radio-button value="company">Company</mat-radio-button>
          <mat-radio-button value="user">User</mat-radio-button>
        </mat-radio-group>
      </div>
    </div>
    <div class="row">
      <div class="col-xs">
        <mat-form-field>
          <mat-label>Company Name</mat-label>
          <input placeholder="email" formControlName="companyName" matInput type="text">
        </mat-form-field>
      </div>
    </div>

Con esto ya tienes las una base fuerte en cuanto al manejo de Angular y sus diversas herramientas. Ahora solo queda explorar y experimentar para seguir avanzando y creciendo.
