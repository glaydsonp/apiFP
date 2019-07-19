webpackJsonp([11],{

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulasCursoComplementarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AulasCursoComplementarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AulasCursoComplementarPage = (function () {
    function AulasCursoComplementarPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.torcedores = [];
    }
    AulasCursoComplementarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllTorcedores();
    };
    AulasCursoComplementarPage.prototype.getAllTorcedores = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulaCursoComplementarApi').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.torcedores = tmp;
        });
    };
    AulasCursoComplementarPage.prototype.delete = function (id, titulo) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulaCursoComplementarApi' + id + '/' + titulo);
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulasCursoComplementar/' + id).remove();
    };
    AulasCursoComplementarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aulas-curso-complementar',template:/*ion-inline-start:"C:\xampp\htdocs\apiFP\src\pages\aulas-curso-complementar\aulas-curso-complementar.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Aulas curso complementar</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content padding>\n\n    <table>\n\n      <thead>\n\n        <th>Título</th>\n\n        <th>Descrição</th>\n\n        <th>Ações</th>\n\n      </thead>\n\n      <tbody>\n\n        <tr *ngFor="let torcedor of torcedores">\n\n          <td>{{torcedor.titulo}}</td>\n\n          <td>{{torcedor.descricao}}</td>\n\n          <td>\n\n            <a href="#" (click)="delete(torcedor.key,torcedor.titulo)">Deletar</a>\n\n          </td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\xampp\htdocs\apiFP\src\pages\aulas-curso-complementar\aulas-curso-complementar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], AulasCursoComplementarPage);
    return AulasCursoComplementarPage;
}());

//# sourceMappingURL=aulas-curso-complementar.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AulasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AulasPage = (function () {
    function AulasPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.torcedores = [];
    }
    AulasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllTorcedores();
    };
    AulasPage.prototype.getAllTorcedores = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulas_curso_principal_premium_api').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.torcedores = tmp;
        });
    };
    AulasPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulas_curso_principal/' + id).remove();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulas_curso_principal_premium_api/' + id).remove();
    };
    AulasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aulas',template:/*ion-inline-start:"C:\xampp\htdocs\apiFP\src\pages\aulas\aulas.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Aulas</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content padding>\n\n    <table>\n\n      <thead>\n\n        <th>Título</th>\n\n        <th>Subtitulo</th>\n\n        <th>Descrição</th>\n\n        <th>Ações</th>\n\n      </thead>\n\n      <tbody>\n\n        <tr *ngFor="let torcedor of torcedores">\n\n          <td>{{torcedor.titulo}}</td>\n\n          <td>{{torcedor.subtitulo}}</td>\n\n          <td>{{torcedor.descricao}}</td>\n\n          <td>\n\n            <a href="#" (click)="delete(torcedor.key)">Deletar</a>\n\n          </td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\xampp\htdocs\apiFP\src\pages\aulas\aulas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], AulasPage);
    return AulasPage;
}());

//# sourceMappingURL=aulas.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursoComplementarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__incluir_aula_curso_complementar_incluir_aula_curso_complementar__ = __webpack_require__(173);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CursoComplementarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CursoComplementarPage = (function () {
    function CursoComplementarPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.noticia = {};
        this.noticias = [];
    }
    CursoComplementarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllNoticias();
    };
    CursoComplementarPage.prototype.save = function () {
        var _this = this;
        this.upload();
        this.upload2();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('curso_complementar/' + this.noticia.nome).update(this.noticia).then(function (data) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('search_cursos/' + _this.noticia.nome).update(_this.noticia).then(function (data) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('tudo_para_search/' + _this.noticia.nome).update(_this.noticia).then(function (data) {
                    _this.displayToast("Upado com sucesso");
                });
            });
        });
    };
    CursoComplementarPage.prototype.chooseFile2 = function () { document.getElementById('imgNoticia2').click(); };
    CursoComplementarPage.prototype.upload2 = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgNoticia2').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/aulaCursoComplementar/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.noticia.url2 = snapshot.downloadURL;
            });
        }
    };
    CursoComplementarPage.prototype.chooseFile = function () { document.getElementById('imgNoticia').click(); };
    CursoComplementarPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgNoticia').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/aulaCursoComplementar/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.noticia.url = snapshot.downloadURL;
                _this.noticia.status = 'SUCESSO';
                _this.noticia.timestamp = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
                _this.noticia.qual_papel = 'curso_complementar';
            });
        }
    };
    CursoComplementarPage.prototype.getAllNoticias = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('curso_complementar').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.noticias = tmp;
        });
    };
    CursoComplementarPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    CursoComplementarPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('curso_complementar/' + id).remove();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('search_cursos/' + id).remove();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('tudo_para_search/' + id).remove();
    };
    CursoComplementarPage.prototype.incluir = function (key) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__incluir_aula_curso_complementar_incluir_aula_curso_complementar__["a" /* IncluirAulaCursoComplementarPage */], { key: key }).present();
    };
    CursoComplementarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-curso-complementar',template:/*ion-inline-start:"C:\xampp\htdocs\apiFP\src\pages\curso-complementar\curso-complementar.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Curso complementar</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <div style="text-align: center;">\n\n      <h1>Escolher imagem</h1>\n\n      <img *ngIf="noticia.url" src="{{ noticia.url }}" style="width:100px;height:100px;" (click)="chooseFile()">\n\n      <form ngNoForm>\n\n        <input id="imgNoticia" name="file" type="file" (change)="upload()">\n\n      </form>\n\n    </div>\n\n    <div style="text-align: center;">\n\n      <h1>Escolher imagem com play</h1>\n\n      <img *ngIf="noticia.url2" src="{{ noticia.url2 }}" style="width:100px;height:100px;" (click)="chooseFile2()">\n\n      <form ngNoForm>\n\n        <input id="imgNoticia2" name="file" type="file" (change)="upload2()">\n\n      </form>\n\n    </div>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label stacked>Titulo do curso</ion-label>\n\n        <ion-input type="text" [(ngModel)]="noticia.nome"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>Descrição do curso</ion-label>\n\n        <ion-textarea [(ngModel)]="noticia.descricao"></ion-textarea>\n\n      </ion-item>\n\n      <ion-item>\n\n        <button ion-button block (click)="save()">Salvar</button>\n\n      </ion-item>\n\n    </ion-list>\n\n    <table>\n\n      <thead>\n\n        <th>Foto</th>\n\n        <th>Título</th>\n\n        <th>Descrição</th>\n\n        <th>Ações</th>\n\n      </thead>\n\n      <tbody>\n\n        <tr *ngFor="let noticia of noticias">\n\n          <td>\n\n            <img [src]="noticia.url">\n\n          </td>\n\n          <td>{{noticia.nome}}</td>\n\n          <td>{{noticia.descricao}}</td>\n\n          <td>\n\n              <a href="#" *ngIf="noticia.status==\'SUCESSO\'" (click)="incluir(noticia.key)">Incluir aula complementar</a>\n\n          <br>\n\n            <a href="#" *ngIf="noticia.status==\'SUCESSO\'" (click)="delete(noticia.key)">Deletar</a>\n\n          </td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n  </ion-content>'/*ion-inline-end:"C:\xampp\htdocs\apiFP\src\pages\curso-complementar\curso-complementar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], CursoComplementarPage);
    return CursoComplementarPage;
}());

//# sourceMappingURL=curso-complementar.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncluirAulaCursoComplementarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the IncluirAulaCursoComplementarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncluirAulaCursoComplementarPage = (function () {
    function IncluirAulaCursoComplementarPage(viewCtrl, nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.torcedor = {};
        this.noticia = {};
        this.torcedorKey = navParams.get('key');
    }
    IncluirAulaCursoComplementarPage.prototype.ionViewDidLoad = function () {
        this.getTorcedorInfo();
    };
    IncluirAulaCursoComplementarPage.prototype.getTorcedorInfo = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('curso_complementar/' + this.torcedorKey).on('value', function (snapshot) {
            _this.torcedor = snapshot.val();
        });
    };
    IncluirAulaCursoComplementarPage.prototype.chooseFile = function () { document.getElementById('imgAula').click(); };
    IncluirAulaCursoComplementarPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgAula').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/aulascomplementar/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.noticia.url = snapshot.downloadURL;
            });
        }
    };
    IncluirAulaCursoComplementarPage.prototype.save = function () {
        var _this = this;
        this.upload();
        this.noticia.status = 'SUCESSO';
        this.noticia.timestamp = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
        this.noticia.id_do_curso = this.torcedorKey;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aula_curso_complementar_api/' + this.noticia.titulo).update(this.noticia).then(function (data) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aula_curso_complementar/' + _this.torcedorKey + '/' + _this.noticia.titulo).update(_this.noticia).then(function (data) {
                _this.displayToast("Upado com sucesso");
            });
        });
    };
    IncluirAulaCursoComplementarPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    IncluirAulaCursoComplementarPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    IncluirAulaCursoComplementarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-incluir-aula-curso-complementar',template:/*ion-inline-start:"C:\xampp\htdocs\apiFP\src\pages\incluir-aula-curso-complementar\incluir-aula-curso-complementar.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>{{torcedor.nome}}</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button clear (click)="close()">Fechar</button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n\n\n  <div style="text-align: center;">\n\n      <h1>Escolher imagem</h1>\n\n      <img *ngIf="noticia.url" src="{{ noticia.url }}" style="width:50px;height:50px;" (click)="chooseFile()">\n\n      <form ngNoForm>\n\n        <input id="imgAula" name="file" type="file" (change)="upload()">\n\n      </form>\n\n    </div>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label stacked>Url da aula</ion-label>\n\n        <ion-input type="text" [(ngModel)]="noticia.urlDaAula"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>Título da aula</ion-label>\n\n        <ion-input type="text" [(ngModel)]="noticia.titulo"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>Descrição da aula</ion-label>\n\n        <ion-textarea [(ngModel)]="noticia.descricao"></ion-textarea>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Qual aula?</ion-label>\n\n        <ion-textarea [(ngModel)]="noticia.aula"></ion-textarea>\n\n      </ion-item>\n\n      <ion-item>\n\n        <button ion-button block (click)="save()">Salvar</button>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>'/*ion-inline-end:"C:\xampp\htdocs\apiFP\src\pages\incluir-aula-curso-complementar\incluir-aula-curso-complementar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], IncluirAulaCursoComplementarPage);
    return IncluirAulaCursoComplementarPage;
}());

//# sourceMappingURL=incluir-aula-curso-complementar.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncluirAulaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the IncluirAulaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncluirAulaPage = (function () {
    function IncluirAulaPage(viewCtrl, nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.torcedor = {};
        this.noticia = {};
        this.torcedorKey = navParams.get('key');
    }
    IncluirAulaPage.prototype.ionViewDidLoad = function () {
        this.getTorcedorInfo();
    };
    IncluirAulaPage.prototype.getTorcedorInfo = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('modulos_curso_principal_view_api/' + this.torcedorKey).on('value', function (snapshot) {
            _this.torcedor = snapshot.val();
        });
    };
    IncluirAulaPage.prototype.chooseFile = function () { document.getElementById('imgAula').click(); };
    IncluirAulaPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgAula').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/aulascomplementar/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.noticia.url = snapshot.downloadURL;
            });
        }
    };
    IncluirAulaPage.prototype.save = function () {
        var _this = this;
        this.upload();
        this.noticia.status = 'SUCESSO';
        this.noticia.timestamp = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
        this.noticia.id_do_modulo = this.torcedorKey;
        this.noticia.etapa = this.torcedor.etapa;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulas_curso_principal/' + this.torcedor.etapa + '/' + this.noticia.aula).update(this.noticia).then(function (data) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulas_curso_principal_premium_api/' + _this.noticia.aula).update(_this.noticia).then(function (data) {
                _this.displayToast("Upado com sucesso");
            });
        });
    };
    IncluirAulaPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    IncluirAulaPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    IncluirAulaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-incluir-aula',template:/*ion-inline-start:"C:\xampp\htdocs\apiFP\src\pages\incluir-aula\incluir-aula.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{torcedor.titulo}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button clear (click)="close()">Fechar</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div style="text-align: center;">\n\n        <h1>Escolher imagem</h1>\n\n        <img *ngIf="noticia.url" src="{{ noticia.url }}" style="width:50px;height:50px;" (click)="chooseFile()">\n\n        <form ngNoForm>\n\n          <input id="imgAula" name="file" type="file" (change)="upload()">\n\n        </form>\n\n      </div>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label stacked>Url do conteúdo da aula</ion-label>\n\n      <ion-input type="text" [(ngModel)]="noticia.urlDoConteudo"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Url da aula</ion-label>\n\n      <ion-input type="text" [(ngModel)]="noticia.urlDaAula"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Título da aula</ion-label>\n\n      <ion-input type="text" [(ngModel)]="noticia.titulo"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Subtitulo da aula</ion-label>\n\n      <ion-input type="text" [(ngModel)]="noticia.subtitulo"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Qual a aula ?</ion-label>\n\n      <ion-input type="text" [(ngModel)]="noticia.aula"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Descrição da aula</ion-label>\n\n      <ion-textarea [(ngModel)]="noticia.descricao"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <button ion-button block (click)="save()">Salvar</button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\apiFP\src\pages\incluir-aula\incluir-aula.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], IncluirAulaPage);
    return IncluirAulaPage;
}());

//# sourceMappingURL=incluir-aula.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncluirCursoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the IncluirCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncluirCursoPage = (function () {
    function IncluirCursoPage(viewCtrl, nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.torcedor = {};
        this.noticia = {};
        this.torcedorKey = navParams.get('key');
    }
    IncluirCursoPage.prototype.ionViewDidLoad = function () {
        this.getTorcedorInfo();
    };
    IncluirCursoPage.prototype.getTorcedorInfo = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('curso_principal/' + this.torcedorKey).on('value', function (snapshot) {
            _this.torcedor = snapshot.val();
        });
    };
    IncluirCursoPage.prototype.save = function () {
        var _this = this;
        this.upload();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('modulos_curso_principal/' + this.torcedorKey + '/' + this.noticia.etapa).update(this.noticia).then(function (data) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('modulos_curso_principal_view_api/' + _this.noticia.etapa).update(_this.noticia).then(function (data) {
                _this.displayToast("Upado com sucesso");
            });
        });
    };
    IncluirCursoPage.prototype.chooseFile = function () { document.getElementById('imgModulo').click(); };
    IncluirCursoPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgModulo').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/modulos/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.noticia.url = snapshot.downloadURL;
                _this.noticia.status = 'SUCESSO';
                _this.noticia.timestamp = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
                _this.noticia.id_do_curso = _this.torcedorKey;
            });
        }
    };
    IncluirCursoPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    IncluirCursoPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    IncluirCursoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-incluir-curso',template:/*ion-inline-start:"C:\xampp\htdocs\apiFP\src\pages\incluir-curso\incluir-curso.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{torcedor.nome}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button clear (click)="close()">Fechar</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div style="text-align: center;">\n\n    <h1>Escolher imagem</h1>\n\n    <img *ngIf="noticia.url" src="{{ noticia.url }}" style="width:50px;height:50px;" (click)="chooseFile()">\n\n    <form ngNoForm>\n\n      <input id="imgModulo" name="file" type="file" (change)="upload()">\n\n    </form>\n\n  </div>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label stacked>Nome do módulo </ion-label>\n\n      <ion-input type="text" [(ngModel)]="noticia.titulo"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Qual etapa ?</ion-label>\n\n      <ion-input type="text" [(ngModel)]="noticia.etapa"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Descrição do módulo</ion-label>\n\n      <ion-textarea [(ngModel)]="noticia.descricao"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <button ion-button block (click)="save()">Salvar</button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\apiFP\src\pages\incluir-curso\incluir-curso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], IncluirCursoPage);
    return IncluirCursoPage;
}());

//# sourceMappingURL=incluir-curso.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__incluir_aula_incluir_aula__ = __webpack_require__(174);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ModulosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModulosPage = (function () {
    function ModulosPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.torcedores = [];
    }
    ModulosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllTorcedores();
    };
    ModulosPage.prototype.getAllTorcedores = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('modulos_curso_principal_view_api').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.torcedores = tmp;
        });
    };
    ModulosPage.prototype.delete = function (id, curso) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('modulos_curso_principal/' + curso + '/' + id).remove();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('modulos_curso_principal_view_api/' + id).remove();
    };
    ModulosPage.prototype.incluir = function (key) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__incluir_aula_incluir_aula__["a" /* IncluirAulaPage */], { key: key }).present();
    };
    ModulosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modulos',template:/*ion-inline-start:"C:\xampp\htdocs\apiFP\src\pages\modulos\modulos.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Módulo</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <table>\n\n    <thead>\n\n      <th>Foto</th>\n\n      <th>Título</th>\n\n      <th>Etapa</th>\n\n      <th>Ações</th>\n\n    </thead>\n\n    <tbody>\n\n      <tr *ngFor="let torcedor of torcedores">\n\n        <td>\n\n          <img [src]="torcedor.url">\n\n        </td>\n\n        <td>{{torcedor.titulo}}</td>\n\n        <td>{{torcedor.etapa}}</td>\n\n        <td>\n\n          <a href="#" (click)="incluir(torcedor.key)">Incluir aula</a>\n\n          <br>\n\n          <a href="#" (click)="delete(torcedor.key, torcedor.id_do_curso)">Deletar modulo</a>\n\n        </td>\n\n      </tr>\n\n    </tbody>\n\n  </table>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\apiFP\src\pages\modulos\modulos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ModulosPage);
    return ModulosPage;
}());

//# sourceMappingURL=modulos.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__incluir_curso_incluir_curso__ = __webpack_require__(175);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticiasPage = (function () {
    function NoticiasPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.noticia = {};
        this.noticias = [];
    }
    NoticiasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllNoticias();
    };
    NoticiasPage.prototype.save = function () {
        var _this = this;
        this.upload();
        this.upload2();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('curso_principal/' + this.noticia.id).update(this.noticia).then(function (data) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('search_cursos/' + _this.noticia.id).update(_this.noticia).then(function (data) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('tudo_para_search/' + _this.noticia.id).update(_this.noticia).then(function (data) {
                    _this.displayToast("Upado com sucesso");
                });
            });
        });
    };
    NoticiasPage.prototype.chooseFile = function () { document.getElementById('imgNoticia').click(); };
    NoticiasPage.prototype.chooseFile2 = function () { document.getElementById('imgNoticia2').click(); };
    NoticiasPage.prototype.upload2 = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgNoticia2').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/cursoPrincipal/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.noticia.url2 = snapshot.downloadURL;
            });
        }
    };
    NoticiasPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgNoticia').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/cursoPrincipal/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.noticia.url = snapshot.downloadURL;
                _this.noticia.status = 'SUCESSO';
                _this.noticia.timestamp = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
                _this.noticia.qual_papel = 'curso_principal';
            });
        }
    };
    NoticiasPage.prototype.getAllNoticias = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('curso_principal').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.noticias = tmp;
        });
    };
    NoticiasPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    NoticiasPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('curso_principal/' + id).remove();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('search_cursos/' + id).remove();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('tudo_para_search/' + id).remove();
    };
    NoticiasPage.prototype.incluir = function (key) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__incluir_curso_incluir_curso__["a" /* IncluirCursoPage */], { key: key }).present();
    };
    NoticiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticias',template:/*ion-inline-start:"C:\xampp\htdocs\apiFP\src\pages\noticias\noticias.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Curso principal</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div style="text-align: center;">\n\n    <h1>Escolher imagem</h1>\n\n    <img *ngIf="noticia.url" src="{{ noticia.url }}" style="width:100px;height:100px;" (click)="chooseFile()">\n\n    <form ngNoForm>\n\n      <input id="imgNoticia" name="file" type="file" (change)="upload()">\n\n    </form>\n\n  </div>\n\n\n\n  <div style="text-align: center;">\n\n    <h1>Escolher imagem com o play</h1>\n\n    <img *ngIf="noticia.url2" src="{{ noticia.url2 }}" style="width:100px;height:100px;" (click)="chooseFile2()">\n\n    <form ngNoForm>\n\n      <input id="imgNoticia2" name="file" type="file" (change)="upload2()">\n\n    </form>\n\n  </div>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label stacked>Id do curso</ion-label>\n\n      <ion-input type="text" [(ngModel)]="noticia.id"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Nome do curso</ion-label>\n\n      <ion-input type="text" [(ngModel)]="noticia.nome"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Destinado á qual tipo de usuário</ion-label>\n\n      <ion-input type="text" [(ngModel)]="noticia.tipoDeUsuario"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Descrição do curso</ion-label>\n\n      <ion-textarea [(ngModel)]="noticia.descricao"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <button ion-button block (click)="save()">Salvar</button>\n\n    </ion-item>\n\n  </ion-list>\n\n  <table>\n\n    <thead>\n\n      <th>Foto</th>\n\n      <th>Foto2</th>\n\n      <th>Nome</th>\n\n      <th>Descrição</th>\n\n      <th>Destinado</th>\n\n      <th>Ações</th>\n\n    </thead>\n\n    <tbody>\n\n      <tr *ngFor="let noticia of noticias">\n\n        <td>\n\n          <img [src]="noticia.url">\n\n        </td>\n\n        <td>\n\n          <img [src]="noticia.url2">\n\n        </td>\n\n        <td>{{noticia.nome}}</td>\n\n        <td>{{noticia.descricao}}</td>\n\n        <td>{{noticia.tipoDeUsuario}}</td>\n\n        <td>\n\n          <a href="#" *ngIf="noticia.status==\'SUCESSO\'" (click)="incluir(noticia.key)">Incluir Módulo</a>\n\n          <br>\n\n          <a href="#" *ngIf="noticia.status==\'SUCESSO\'" (click)="delete(noticia.key)">Deletar</a>\n\n        </td>\n\n      </tr>\n\n    </tbody>\n\n  </table>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\apiFP\src\pages\noticias\noticias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], NoticiasPage);
    return NoticiasPage;
}());

//# sourceMappingURL=noticias.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TorcedoresInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TorcedoresInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TorcedoresInfoPage = (function () {
    function TorcedoresInfoPage(navCtrl, navParams, viewCtrl, loadCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadCtrl = loadCtrl;
        this.toastCtrl = toastCtrl;
        this.torcedor = {};
        this.torcedorKey = navParams.get('key');
    }
    TorcedoresInfoPage.prototype.ionViewDidLoad = function () {
        this.getTorcedorInfo();
    };
    TorcedoresInfoPage.prototype.getTorcedorInfo = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('usuarios/' + this.torcedorKey).on('value', function (snapshot) {
            _this.torcedor = snapshot.val();
        });
    };
    TorcedoresInfoPage.prototype.updateUserInfo = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('usuarios/' + this.torcedorKey).update(this.torcedor).then(function (data) {
            _this.displayToast("Upado com sucesso");
        }).catch(function (err) { return console.log(err); });
    };
    TorcedoresInfoPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ message: message, duration: 2000 }).present();
    };
    TorcedoresInfoPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    TorcedoresInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-torcedores-info',template:/*ion-inline-start:"C:\xampp\htdocs\apiFP\src\pages\torcedores-info\torcedores-info.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{torcedor.nome}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button clear (click)="close()">Fechar</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n      <ion-item>\n\n        <ion-label stacked>Nome</ion-label>\n\n        <ion-input type="text" [(ngModel)]="torcedor.nome"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>CPF</ion-label>\n\n        <ion-input type="text" [(ngModel)]="torcedor.cpf"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>Endereço</ion-label>\n\n        <ion-input type="text" [(ngModel)]="torcedor.endereco"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>Número</ion-label>\n\n        <ion-input type="text" [(ngModel)]="torcedor.numero"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>Número de recados</ion-label>\n\n        <ion-input type="text" [(ngModel)]="torcedor.recados"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>Telefone</ion-label>\n\n        <ion-input type="text" [(ngModel)]="torcedor.telefone"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <button ion-button block (click)="updateUserInfo()">Update</button>\n\n      </ion-item>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\apiFP\src\pages\torcedores-info\torcedores-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], TorcedoresInfoPage);
    return TorcedoresInfoPage;
}());

//# sourceMappingURL=torcedores-info.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TorcedoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__torcedores_info_torcedores_info__ = __webpack_require__(178);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TorcedoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TorcedoresPage = (function () {
    function TorcedoresPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.torcedores = [];
    }
    TorcedoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllTorcedores();
    };
    TorcedoresPage.prototype.getAllTorcedores = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('usuarios').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.torcedores = tmp;
        });
    };
    TorcedoresPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('usuarios/' + id).remove();
    };
    TorcedoresPage.prototype.showPassengerInfo = function (key) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__torcedores_info_torcedores_info__["a" /* TorcedoresInfoPage */], { key: key }).present();
    };
    TorcedoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-torcedores',template:/*ion-inline-start:"C:\xampp\htdocs\apiFP\src\pages\torcedores\torcedores.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Usuários</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <table>\n\n    <thead>\n\n      <th>E-mail</th>\n\n      <th>Senha</th>\n\n      <th>Ações</th>\n\n    </thead>\n\n    <tbody>\n\n      <tr *ngFor="let torcedor of torcedores">\n\n        <td>{{torcedor.email}}</td>\n\n        <td>{{torcedor.password}}</td>\n\n        <td>\n\n          <a href="#" (click)="delete(torcedor.key)">Deletar</a>\n\n        </td>\n\n      </tr>\n\n    </tbody>\n\n  </table>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\apiFP\src\pages\torcedores\torcedores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], TorcedoresPage);
    return TorcedoresPage;
}());

//# sourceMappingURL=torcedores.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InserirUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the InserirUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InserirUsuarioPage = (function () {
    function InserirUsuarioPage(navCtrl, navParams, loadingCtrl, servidor, http, appCtrl, httpClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.servidor = servidor;
        this.http = http;
        this.appCtrl = appCtrl;
        this.httpClient = httpClient;
        this.usuarios = [];
        this.user = {};
        this.getDados();
    }
    InserirUsuarioPage.prototype.getDados = function () {
        var _this = this;
        this.servidor.getData().subscribe(function (data) { return _this.usuarios = data; }, function (err) { return console.log(err); });
    };
    InserirUsuarioPage.prototype.chooseFile = function () { document.getElementById('imgUser').click(); };
    InserirUsuarioPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgUser').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/fotoDoAluno/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.user.foto = snapshot.downloadURL;
            });
        }
    };
    InserirUsuarioPage.prototype.registro = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().createUserWithEmailAndPassword(_this.user.email, _this.user.senha).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.updateProfile({
                    displayName: _this.user.displayName,
                    photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
                }).then(function () {
                    _this.upload();
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('usuarios/' + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid).set({
                        uid: __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid,
                        url: _this.user.foto,
                        email: _this.user.email,
                        password: _this.user.senha,
                        nome: _this.user.nome,
                        tipo_de_usuario: _this.user.tipo_de_usuario,
                        qual_papel: 'usuarios'
                    });
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('tudo_para_search/' + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid).set({
                        uid: __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid,
                        url: _this.user.foto,
                        email: _this.user.email,
                        password: _this.user.senha,
                        nome: _this.user.nome,
                        tipo_de_usuario: _this.user.tipo_de_usuario,
                        qual_papel: 'usuarios'
                    }).then(function () {
                        resolve({ success: true });
                    }).catch(function (err) {
                        reject(err);
                    });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    InserirUsuarioPage.prototype.registrarFirebase = function (usuario) {
        if (usuario === void 0) { usuario = []; }
        var body = {
            id_cliente: usuario.id_cliente
        };
        this.servidor.updateData(body);
    };
    InserirUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inserir-usuario',template:/*ion-inline-start:"C:\xampp\htdocs\apiFP\src\pages\inserir-usuario\inserir-usuario.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Inserir usuário</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div style="text-align: center;">\n\n    <h1>Escolher imagem do usuário</h1>\n\n    <img *ngIf="user.foto" src="{{ user.foto }}" style="width:100px;height:100px;" (click)="chooseFile()">\n\n    <form ngNoForm>\n\n      <input id="imgUser" name="file" type="file" (change)="upload()">\n\n    </form>\n\n  </div>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label stacked>Email do usuário</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Senha do usuário</ion-label>\n\n      <ion-input type="password" [(ngModel)]="user.senha"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Nome do usuário</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.nome"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Professor(1) ou aluno free(0) ou aluno premium(2)</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.tipo_de_usuario"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <button ion-button block (click)="registro()">Salvar</button>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  \n\n  <ion-list>\n\n    <table>\n\n      <thead>\n\n        <td>Imagem</td>\n\n        <td>ID</td>\n\n        <td>Email</td>\n\n        <td>Senha</td>\n\n        <td>Nome</td>\n\n        <td>Nivel</td>\n\n        <td>Mandar pro Firebase</td>\n\n      </thead>\n\n      <tbody>\n\n        <tr *ngFor="let usuario of usuarios" >\n\n          <td>{{ usuario.caminho }}</td>\n\n          <td>{{ usuario.id_cliente }}</td>\n\n          <td>{{ usuario.email }}</td>\n\n          <td>{{ usuario.senha }}</td>\n\n          <td>{{ usuario.nome }} {{ usuario.sobrenome }}</td>\n\n          <td>{{ usuario.nivel }}</td>\n\n          <td><button ion-button (click)="registrarFirebase(usuario)" >Firebase</button></td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\apiFP\src\pages\inserir-usuario\inserir-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]) === "function" && _g || Object])
    ], InserirUsuarioPage);
    return InserirUsuarioPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=inserir-usuario.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aulas-curso-complementar/aulas-curso-complementar.module": [
		582,
		10
	],
	"../pages/aulas/aulas.module": [
		583,
		9
	],
	"../pages/curso-complementar/curso-complementar.module": [
		584,
		8
	],
	"../pages/incluir-aula-curso-complementar/incluir-aula-curso-complementar.module": [
		585,
		7
	],
	"../pages/incluir-aula/incluir-aula.module": [
		586,
		6
	],
	"../pages/incluir-curso/incluir-curso.module": [
		587,
		5
	],
	"../pages/inserir-usuario/inserir-usuario.module": [
		592,
		4
	],
	"../pages/modulos/modulos.module": [
		588,
		3
	],
	"../pages/noticias/noticias.module": [
		589,
		2
	],
	"../pages/torcedores-info/torcedores-info.module": [
		590,
		1
	],
	"../pages/torcedores/torcedores.module": [
		591,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 233;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceProvider = (function () {
    function ServiceProvider(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.api = 'http://localhost:80/apifp/';
    }
    ServiceProvider.prototype.getData = function () {
        return this.http.get(this.api + 'dados.php').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServiceProvider.prototype.updateData = function (data) {
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        this.http.post(this.api + "update.php", data, options).map(function (res) { return console.log(res); })
            .subscribe(function (res) {
            console.log(res);
        });
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
    ], ServiceProvider);
    return ServiceProvider;
    var _a, _b;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(346);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_incluir_curso_incluir_curso__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_torcedores_torcedores__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_noticias_noticias__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_torcedores_info_torcedores_info__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_incluir_aula_incluir_aula__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_modulos_modulos__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_aulas_aulas__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_curso_complementar_curso_complementar__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_aulas_curso_complementar_aulas_curso_complementar__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_incluir_aula_curso_complementar_incluir_aula_curso_complementar__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_inserir_usuario_inserir_usuario__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_service_service__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// import { HttpClientModule } from "@angular/common/http";
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_aulas_aulas__["a" /* AulasPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_inserir_usuario_inserir_usuario__["a" /* InserirUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_aulas_curso_complementar_aulas_curso_complementar__["a" /* AulasCursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_incluir_aula_curso_complementar_incluir_aula_curso_complementar__["a" /* IncluirAulaCursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_curso_complementar_curso_complementar__["a" /* CursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_torcedores_info_torcedores_info__["a" /* TorcedoresInfoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_incluir_curso_incluir_curso__["a" /* IncluirCursoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modulos_modulos__["a" /* ModulosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_torcedores_torcedores__["a" /* TorcedoresPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_incluir_aula_incluir_aula__["a" /* IncluirAulaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_noticias_noticias__["a" /* NoticiasPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aulas-curso-complementar/aulas-curso-complementar.module#AulasCursoComplementarPageModule', name: 'AulasCursoComplementarPage', segment: 'aulas-curso-complementar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aulas/aulas.module#AulasPageModule', name: 'AulasPage', segment: 'aulas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/curso-complementar/curso-complementar.module#CursoComplementarPageModule', name: 'CursoComplementarPage', segment: 'curso-complementar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/incluir-aula-curso-complementar/incluir-aula-curso-complementar.module#IncluirAulaCursoComplementarPageModule', name: 'IncluirAulaCursoComplementarPage', segment: 'incluir-aula-curso-complementar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/incluir-aula/incluir-aula.module#IncluirAulaPageModule', name: 'IncluirAulaPage', segment: 'incluir-aula', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/incluir-curso/incluir-curso.module#IncluirCursoPageModule', name: 'IncluirCursoPage', segment: 'incluir-curso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modulos/modulos.module#ModulosPageModule', name: 'ModulosPage', segment: 'modulos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noticias/noticias.module#NoticiasPageModule', name: 'NoticiasPage', segment: 'noticias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/torcedores-info/torcedores-info.module#TorcedoresInfoPageModule', name: 'TorcedoresInfoPage', segment: 'torcedores-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/torcedores/torcedores.module#TorcedoresPageModule', name: 'TorcedoresPage', segment: 'torcedores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inserir-usuario/inserir-usuario.module#InserirUsuarioPageModule', name: 'InserirUsuarioPage', segment: 'inserir-usuario', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_inserir_usuario_inserir_usuario__["a" /* InserirUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_aulas_aulas__["a" /* AulasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_aulas_curso_complementar_aulas_curso_complementar__["a" /* AulasCursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_incluir_aula_curso_complementar_incluir_aula_curso_complementar__["a" /* IncluirAulaCursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_curso_complementar_curso_complementar__["a" /* CursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_torcedores_info_torcedores_info__["a" /* TorcedoresInfoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_torcedores_torcedores__["a" /* TorcedoresPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_incluir_curso_incluir_curso__["a" /* IncluirCursoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_incluir_aula_incluir_aula__["a" /* IncluirAulaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modulos_modulos__["a" /* ModulosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_noticias_noticias__["a" /* NoticiasPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_service_service__["a" /* ServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_noticias_noticias__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_torcedores_torcedores__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_modulos_modulos__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_aulas_aulas__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_curso_complementar_curso_complementar__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_aulas_curso_complementar_aulas_curso_complementar__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_inserir_usuario_inserir_usuario__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_noticias_noticias__["a" /* NoticiasPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Usuários', component: __WEBPACK_IMPORTED_MODULE_5__pages_torcedores_torcedores__["a" /* TorcedoresPage */] },
            { title: 'Curso principal', component: __WEBPACK_IMPORTED_MODULE_4__pages_noticias_noticias__["a" /* NoticiasPage */] },
            { title: 'Módulos curso principal', component: __WEBPACK_IMPORTED_MODULE_7__pages_modulos_modulos__["a" /* ModulosPage */] },
            { title: 'Aulas curso principal', component: __WEBPACK_IMPORTED_MODULE_8__pages_aulas_aulas__["a" /* AulasPage */] },
            { title: 'Curso complementar', component: __WEBPACK_IMPORTED_MODULE_9__pages_curso_complementar_curso_complementar__["a" /* CursoComplementarPage */] },
            { title: 'Aula curso complementar', component: __WEBPACK_IMPORTED_MODULE_10__pages_aulas_curso_complementar_aulas_curso_complementar__["a" /* AulasCursoComplementarPage */] },
            { title: 'Inserir usuário', component: __WEBPACK_IMPORTED_MODULE_11__pages_inserir_usuario_inserir_usuario__["a" /* InserirUsuarioPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_firebase__["initializeApp"]({
            apiKey: "AIzaSyBrtAgU0fHKzwi99jFC0ETM_GRgnTwxoY4",
            authDomain: "dbfp-da58f.firebaseapp.com",
            databaseURL: "https://dbfp-da58f.firebaseio.com",
            projectId: "dbfp-da58f",
            storageBucket: "dbfp-da58f.appspot.com",
            messagingSenderId: "347251983378"
        });
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\apiFP\src\app\app.html"*/'<ion-split-pane>\n\n<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar color="dark">\n\n      <ion-title>API</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" main #content></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"C:\xampp\htdocs\apiFP\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[338]);
//# sourceMappingURL=main.js.map