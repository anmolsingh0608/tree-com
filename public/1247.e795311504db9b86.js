"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1247],{1247:(C,u,o)=>{o.r(u),o.d(u,{NavPageModule:()=>A});var d=o(6895),h=o(4719),c=o(2977),l=o(9625),r=(()=>{return(t=r||(r={})).USERS="USERS",t.TREES="TREES",t.IMAGES="IMAGES",t.ORDERS="ORDERS",t.CUSTOMERS="CUSTOMERS",t.FILTERS="FILTERS",t.CITIES="CITIES",r;var t})(),v=o(8751),e=o(6353),g=o(6311);let p=(()=>{class t{constructor(n,a){this.elementRef=n,this.auth=a}ngOnChanges(n){this.checkAccess()}ngOnInit(){console.log("running"),this.checkAccess()}checkAccess(){const n=this.appAccessControl.role;switch(this.appAccessControl.resourceType){case r.USERS:case r.TREES:case r.CITIES:case r.FILTERS:case r.CUSTOMERS:this.elementRef.nativeElement.style.display=n!==v.i.ADMIN?"none":"block"}}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq),e.Y36(g.e))},t.\u0275dir=e.lG2({type:t,selectors:[["","appAccessControl",""]],inputs:{appAccessControl:"appAccessControl"},features:[e.TTD]}),t})();const i=function(t,s){return{role:t,resourceType:s}},m=[{path:"",component:(()=>{class t{constructor(n,a){this.router=n,this.authService=a,this.role=v.i.FORESTER,this.ResourceType=r}ngOnInit(){}ionViewDidEnter(){console.log("Helloooooooo"),this.role=this.authService.getRole()}logout(){this.authService.logout().subscribe(()=>{this.authService.clearLocalStorage(),this.router.navigateByUrl("/")})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(l.F0),e.Y36(g.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-nav"]],decls:27,vars:20,consts:[[1,"navbar","navbar-expand-lg"],[1,"container-fluid"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarTogglerDemo03","aria-controls","navbarTogglerDemo03","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["routerLink","/main/trees",1,"navbar-brand"],["src","assets/images/form-tree-icon.svg","alt","","width","40","height","40"],["id","navbarTogglerDemo03",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item",3,"appAccessControl"],["routerLinkActive","active","routerLink","/admin/users",1,"nav-link"],["routerLinkActive","active","routerLink","/admin/filters",1,"nav-link"],["routerLinkActive","active","routerLink","/admin/trees",1,"nav-link"],["routerLinkActive","active","routerLink","/admin/orders",1,"nav-link"],["routerLinkActive","active","routerLink","/admin/cities",1,"nav-link"],[1,"d-fluid"],[3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"nav",0)(1,"div",1)(2,"button",2),e._UZ(3,"span",3),e.qZA(),e.TgZ(4,"a",4),e._UZ(5,"img",5),e.qZA(),e.TgZ(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),e._uU(10,"Users"),e.qZA()(),e.TgZ(11,"li",8)(12,"a",10),e._uU(13,"Filters"),e.qZA()(),e.TgZ(14,"li",8)(15,"a",11),e._uU(16,"Trees"),e.qZA()(),e.TgZ(17,"li",8)(18,"a",12),e._uU(19,"Orders"),e.qZA()(),e.TgZ(20,"li",8)(21,"a",13),e._uU(22,"Cities"),e.qZA()()()(),e.TgZ(23,"div",14)(24,"a",15),e.NdJ("click",function(){return a.logout()}),e._uU(25,"Logout"),e.qZA()()()(),e._UZ(26,"ion-router-outlet")),2&n&&(e.xp6(8),e.Q6J("appAccessControl",e.WLB(5,i,a.role,a.ResourceType.USERS)),e.xp6(3),e.Q6J("appAccessControl",e.WLB(8,i,a.role,a.ResourceType.FILTERS)),e.xp6(3),e.Q6J("appAccessControl",e.WLB(11,i,a.role,a.ResourceType.TREES)),e.xp6(3),e.Q6J("appAccessControl",e.WLB(14,i,a.role,a.ResourceType.ORDERS)),e.xp6(3),e.Q6J("appAccessControl",e.WLB(17,i,a.role,a.ResourceType.CITIES)))},dependencies:[c.jP,c.Fo,p,l.yS,l.Od],styles:["nav[_ngcontent-%COMP%]{background-color:var(--dcr-primary-color);z-index:9}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--dcr-primary-text-color)}ion-router-outlet[_ngcontent-%COMP%]{margin-top:70px}"]}),t})(),children:[{path:"users",loadChildren:()=>o.e(521).then(o.bind(o,521)).then(t=>t.UsersModule)},{path:"trees",loadChildren:()=>Promise.all([o.e(2784),o.e(8592),o.e(4550)]).then(o.bind(o,4550)).then(t=>t.TreesModule)},{path:"orders",loadChildren:()=>Promise.all([o.e(8592),o.e(3521)]).then(o.bind(o,4501)).then(t=>t.OrdersModule)},{path:"filters",loadChildren:()=>Promise.all([o.e(8592),o.e(5625)]).then(o.bind(o,5625)).then(t=>t.FiltersModule)},{path:"cities",loadChildren:()=>Promise.all([o.e(8592),o.e(5995)]).then(o.bind(o,5995)).then(t=>t.CitiesModule)}]}];let S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(m),l.Bz]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,h.u5,c.Pc,T,S]}),t})()}}]);