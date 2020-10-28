# BikeStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Dependencies

Bootstrap widgets: `ng add @ng-bootstrap/ng-bootstrap`

Angularx flatpickr: `npm install --save flatpickr angularx-flatpickr`

Ngx Toastr: `npm install ngx-toastr --save` 

Date-fns `npm i date-fns`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## MySQL Cluster Configuration

To setup a multi-node MySQL Cluster from scratch on Ubuntu 18.04 please follow this guide: [Setup MySQL Cluster](https://www.digitalocean.com/community/tutorials/how-to-create-a-multi-node-mysql-cluster-on-ubuntu-18-04).

The MySQL Cluster Configuration folder contains all the configurations settings needed for each type of Nodes.

For more information about how MySQL Cluster works please visit the [official documentation](https://dev.mysql.com/doc/refman/8.0/en/mysql-cluster.html).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# DBAdv_P1_DistributedBikeStore
Proyecto 1 Bases de Datos Avanzadas ITCR


Para instalar las dependencias de la aplicación utilizar:

$ cd web-server

$ npm install

De igual manera dirigirse a la carpeta bike-store dentro de la carpeta web-server y utlizar:

$ cd bike-store

$ npm install

## Instrucciones y pasos a seguir

Unas vez instalado las dependencias, se puede empezar a correr la aplicación.

Para empezar a correr la aplicación hay que ingresar a la carpeta web-server y correr la siguiente instrucción:

$ node server.js


Dependiendo de la máquina virtual en el cual se esta corriendo, las direcciones de dominio variaran:

-Máquina virtual en Nueva York: http://newyorknode2020.eastus.cloudapp.azure.com:3000/

-Máquina virtual en California: http://calinode2020.westus.cloudapp.azure.com:3000/

-Máquina virtual en Texas: http://texasnode2020.southcentralus.cloudapp.azure.com:3000/
