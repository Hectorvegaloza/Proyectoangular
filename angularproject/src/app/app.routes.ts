import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { ServiciosComponent } from './components/servicios/servicios.component';




export const routes: Routes = [
    { path: "inicio", component:  InicioComponent  },
    { path: "login", component:  LoginComponent  },
    { path: "contacto", component:  ContactoComponent  },
    { path: "navegacion", component:  NavegacionComponent  },
    { path: "nosotros", component:  NosotrosComponent  },
    { path: "registrarse", component:  RegistrarseComponent  },
    { path: "privado", component: PrivadoComponent },
    { path: "servicios", component: ServiciosComponent },
];
