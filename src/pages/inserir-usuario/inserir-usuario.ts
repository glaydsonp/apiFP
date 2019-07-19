import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, IonicPage, App } from 'ionic-angular';
import * as firebase from 'firebase';
import 'rxjs/add/operator/take';
import { ServiceProvider } from "../../providers/service/service";
import { HttpModule } from "@angular/http";
import { HttpClient, HttpClientModule } from "@angular/common/http";

/**
 * Generated class for the InserirUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inserir-usuario',
  templateUrl: 'inserir-usuario.html',
})
export class InserirUsuarioPage {

  usuarios: any = [];
  user: any = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController,
    public servidor: ServiceProvider,
    public http: HttpModule,
    public appCtrl: App,
    public httpClient: HttpClientModule) {
      this.getDados();
  }

  getDados(){
    this.servidor.getData().subscribe(
      data => this.usuarios = data,
      err => console.log(err)
    );
  }
  chooseFile() { document.getElementById('imgUser').click(); }
  upload() {
    // Create a root reference
    let storageRef = firebase.storage().ref();
    let loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
    loading.present();

    for (let selectedFile of [(<HTMLInputElement>document.getElementById('imgUser')).files[0]]) {
      let path = '/fotoDoAluno/' + Date.now() + `${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        loading.dismiss();
        this.user.foto = snapshot.downloadURL;
      });
    }
  }
  registro() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.senha).then(() => {
        firebase.auth().currentUser.updateProfile({
          displayName: this.user.displayName,
          photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
        }).then(() => {
          this.upload();
          firebase.database().ref('usuarios/'+firebase.auth().currentUser.uid).set({
            uid: firebase.auth().currentUser.uid,
            url: this.user.foto,
            email: this.user.email,
            password: this.user.senha,
            nome: this.user.nome,
            tipo_de_usuario: this.user.tipo_de_usuario,
            qual_papel: 'usuarios'
          });
          firebase.database().ref('tudo_para_search/' + firebase.auth().currentUser.uid).set({
            uid: firebase.auth().currentUser.uid,
            url: this.user.foto,
            email: this.user.email,
            password: this.user.senha,
            nome: this.user.nome,
            tipo_de_usuario: this.user.tipo_de_usuario,
            qual_papel: 'usuarios'
          }).then(() => {
            resolve({ success: true });
            }).catch((err) => {
              reject(err);
          })
          }).catch((err) => {
            reject(err);
        })
      }).catch((err) => {
        reject(err);
      })
    })
  }

  registrarFirebase(usuario: any = []){
    var str = usuario.caminho;
    let re = /\.\./gi;
    let result = str.replace(re, "https://www.fpeduc.com.br");
    let body = {
      id_cliente: usuario.id_cliente
    };
    if (usuario.senha.length < 6){
      usuario.senha = "@futuro";
      console.log(usuario.senha);
    }
    this.servidor.updateData(body);
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha).then(() => {
        firebase.auth().currentUser.updateProfile({
          displayName: usuario.email,
          photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
        }).then(() => {
          firebase.database().ref('usuarios/'+firebase.auth().currentUser.uid).set({
            uid: firebase.auth().currentUser.uid,
            url: result,
            email: usuario.email,
            password: usuario.senha,
            nome: usuario.nome,
            tipo_de_usuario: usuario.nivel,
            qual_papel: 'usuarios'
          });
          firebase.database().ref('tudo_para_search/' + firebase.auth().currentUser.uid).set({
            uid: firebase.auth().currentUser.uid,
            url: result,
            email: usuario.email,
            password: usuario.senha,
            nome: usuario.nome,
            tipo_de_usuario: usuario.nivel,
            qual_papel: 'usuarios'
          }).then(() => {
            resolve({ success: true });
            }).catch((err) => {
              reject(err);
          })
          }).catch((err) => {
            reject(err);
        })
      }).catch((err) => {
        reject(err);
      })
      this.appCtrl.getRootNav().setRoot(InserirUsuarioPage);
    })
  }
}
