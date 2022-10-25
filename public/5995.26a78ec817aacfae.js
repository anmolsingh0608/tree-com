"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5995],{5995:(F,d,c)=>{c.r(d),c.d(d,{CitiesModule:()=>T});var h=c(6895),r=c(4719),u=c(2977),l=c(9625),g=c(5861),t=c(6353),p=c(3401);function b(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"button",6)(7,"span",7),t._uU(8," edit "),t.qZA()(),t.TgZ(9,"button",8),t.NdJ("click",function(){const a=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.delete(a.id))}),t.TgZ(10,"span",7),t._uU(11," delete "),t.qZA()()()()}if(2&i){const e=n.$implicit,s=n.index;t.xp6(2),t.Oqu(s+1),t.xp6(2),t.Oqu(null==e?null:e.name),t.xp6(2),t.MGl("routerLink","/admin/cities/create/",e.id,"")}}let f=(()=>{class i{constructor(e,s){this.cityService=e,this.alertController=s,this.subscriptions=[],this.cities=[]}ngOnInit(){}ionViewDidEnter(){const e=this.getCities().subscribe(s=>{this.cities=s.data});this.subscriptions.push(e)}getCities(){return this.cityService.getCities()}delete(e){var s=this;return(0,g.Z)(function*(){yield(yield s.alertController.create({header:"Do you want to delete this city?",buttons:[{text:"Cancel",role:"cancel",handler:()=>{}},{text:"Delete",role:"confirm",handler:()=>{const a=s.cityService.deleteCity(e).subscribe(m=>{s.cities=s.cities.filter(A=>A.id!==e)});s.subscriptions.push(a)}}]})).present()})()}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.e),t.Y36(u.Br))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-list"]],decls:18,vars:1,consts:[[1,"container"],[1,"header","d-flex","justify-content-between"],["routerLink","/admin/cities/create",1,"btn","btn-primary"],[1,"table-responsive"],[1,"table-striped","w-100"],[4,"ngFor","ngForOf"],[1,"btn","btn-primary",3,"routerLink"],[1,"material-icons-outlined"],[1,"btn","btn-danger","ms-1",3,"click"]],template:function(e,s){1&e&&(t.TgZ(0,"ion-content")(1,"div",0)(2,"div",1)(3,"h2"),t._uU(4,"Cities"),t.qZA(),t.TgZ(5,"button",2),t._uU(6,"Add City"),t.qZA()(),t.TgZ(7,"div",3)(8,"table",4)(9,"thead")(10,"th"),t._uU(11,"#"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Name"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Actions"),t.qZA()(),t.TgZ(16,"tbody"),t.YNc(17,b,12,3,"tr",5),t.qZA()()()()()),2&e&&(t.xp6(17),t.Q6J("ngForOf",s.cities))},dependencies:[h.sg,l.rH,u.W2,u.YI]}),i})();var v=c(4465);let y=(()=>{class i{constructor(e,s,o,a){this.toastService=e,this.cityService=s,this.router=o,this.route=a,this.subscriptions=[],this.cityForm=new r.cw({name:new r.NI("",r.kI.required)})}ngOnInit(){const e=this.route.params.subscribe(s=>{if(s.id){this.cityId=s.id;const o=this.cityService.getCity(this.cityId).subscribe(a=>{this.city=a.data,this.cityForm.patchValue(this.city)});this.subscriptions.push(o)}});this.subscriptions.push(e)}save(){if(!this.cityForm.valid)return void this.toastService.presentToast("Please enter city");let e;e=this.cityService.createCity(this.cityForm.value),this.cityId&&(e=this.cityService.updateCity(this.cityForm.value,this.cityId));const s=e.subscribe(o=>{this.navigate()});this.subscriptions.push(s)}navigate(){this.router.navigate(["admin/cities"])}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(v.k),t.Y36(p.e),t.Y36(l.F0),t.Y36(l.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-create"]],decls:13,vars:1,consts:[[1,"container"],[1,"header","d-flex","justify-content-between"],[3,"formGroup"],[1,"form-group"],["for","city"],["type","text","id","city","formControlName","name","placeholder","Enter City",1,"form-control"],[1,"btn","btn-primary","mt-2",3,"click"]],template:function(e,s){1&e&&(t.TgZ(0,"ion-content")(1,"ion-content")(2,"div",0)(3,"div",1)(4,"h2"),t._uU(5,"Users"),t.qZA()(),t.TgZ(6,"form",2)(7,"div",3)(8,"label",4),t._uU(9,"City"),t.qZA(),t._UZ(10,"input",5),t.qZA(),t.TgZ(11,"button",6),t.NdJ("click",function(){return s.save()}),t._uU(12,"Save"),t.qZA()()()()()),2&e&&(t.xp6(6),t.Q6J("formGroup",s.cityForm))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,u.W2]}),i})();const C=[{path:"",component:f},{path:"create",component:y},{path:"create/:id",component:y}];let Z=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[l.Bz.forChild(C),l.Bz]}),i})(),T=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[h.ez,Z,r.UX,u.Pc,r.u5]}),i})()}}]);