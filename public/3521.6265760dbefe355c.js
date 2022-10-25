"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3521],{4501:(ii,$e,v)=>{v.r($e),v.d($e,{OrdersModule:()=>$r});var h=v(6895),re=v(2977),we=v(9625),ai=v(2340),a=v(6353),Lt=v(8132),q=v(4719);function oi(t,n){1&t&&(a.TgZ(0,"p"),a._uU(1,"No Sketch Available"),a.qZA())}function si(t,n){if(1&t&&a._UZ(0,"img",7),2&t){const e=a.oxw();a.Q6J("src",e.webUrl+"/"+(null==e.order||null==e.order.yard_sketch_image?null:e.order.yard_sketch_image.path),a.LSH)("alt","Sketch for order ID:")}}let jt=(()=>{class t{constructor(e,i,o){this.orderService=e,this.router=i,this.activatedRoute=o,this.subscriptions=[],this.webUrl=ai.N.webUrl}ngOnInit(){const e=this.activatedRoute.params.subscribe(i=>{i.id&&(this.orderId=i.id,this.orderService.getOrder(this.orderId).subscribe(o=>{this.order=o.data[0]}))});this.subscriptions.push(e)}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(Lt.p),a.Y36(we.F0),a.Y36(we.gz))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-create"]],decls:31,vars:8,consts:[[1,"container"],[1,"header","d-flex","justify-content-between"],[1,"form-group","mt-4"],["for",""],["type","text","id","","readonly","",1,"form-control",3,"value"],[4,"ngIf"],["class","d-block","style","border: 1px solid black;",3,"src","alt",4,"ngIf"],[1,"d-block",2,"border","1px solid black",3,"src","alt"]],template:function(e,i){1&e&&(a.TgZ(0,"ion-content")(1,"div",0)(2,"div",1)(3,"h2"),a._uU(4,"Order"),a.qZA()(),a.TgZ(5,"form")(6,"div",2)(7,"label",3),a._uU(8,"Customer Name"),a.qZA(),a._UZ(9,"input",4),a.qZA(),a.TgZ(10,"div",2)(11,"label",3),a._uU(12,"Tree Name"),a.qZA(),a._UZ(13,"input",4),a.qZA(),a.TgZ(14,"div",2)(15,"label",3),a._uU(16,"Quantity"),a.qZA(),a._UZ(17,"input",4),a.qZA(),a.TgZ(18,"div",2)(19,"label",3),a._uU(20,"Address"),a.qZA(),a._UZ(21,"input",4),a.qZA(),a.TgZ(22,"div",2)(23,"label",3),a._uU(24,"City"),a.qZA(),a._UZ(25,"input",4),a.qZA(),a.TgZ(26,"div",2)(27,"label",3),a._uU(28,"Sketch"),a.qZA(),a.YNc(29,oi,2,0,"p",5),a.YNc(30,si,1,2,"img",6),a.qZA()()()()),2&e&&(a.xp6(9),a.s9C("value",null==i.order?null:i.order.customer.name),a.xp6(4),a.hYB("value","",null==i.order?null:i.order.tree.name," (",null==i.order?null:i.order.tree.scientificName,")"),a.xp6(4),a.s9C("value",null==i.order?null:i.order.quantity),a.xp6(4),a.s9C("value",null==i.order?null:i.order.customer.address),a.xp6(4),a.s9C("value",null==i.order?null:i.order.customer.city),a.xp6(4),a.Q6J("ngIf",!(null!=i.order&&i.order.yard_sketch_image)||!(null!=i.order&&null!=i.order.yard_sketch_image&&i.order.yard_sketch_image.path)||(null==i.order?null:i.order.yard_sketch_image.path.length)<1),a.xp6(1),a.Q6J("ngIf",(null==i.order||null==i.order.yard_sketch_image?null:i.order.yard_sketch_image.path.length)>0))},dependencies:[h.O5,re.W2,q._Y,q.JL,q.F]}),t})();var A=v(591),Ve=v(6053),V=v(9645);function oo(t,n){1&t&&(a.TgZ(0,"span",9),a.SDv(1,10),a.qZA())}function so(t,n){1&t&&(a.TgZ(0,"span",9),a.SDv(1,11),a.qZA())}function ro(t,n){1&t&&(a.TgZ(0,"span",9),a.SDv(1,12),a.qZA())}function lo(t,n){1&t&&(a.TgZ(0,"span",9),a.SDv(1,13),a.qZA())}function co(t,n){1&t&&a._uU(0,"...")}function uo(t,n){1&t&&(a.TgZ(0,"span",15),a._uU(1,"(current)"),a.qZA())}function po(t,n){if(1&t&&(a._uU(0),a.YNc(1,uo,2,0,"span",14)),2&t){const e=n.$implicit,i=n.currentPage;a.hij(" ",e," "),a.xp6(1),a.Q6J("ngIf",e===i)}}function go(t,n){}v(6498),v(8896),v(1086),v(5529),v(3753),v(7739),v(6688),v(3009),v(826),v(448),v(7274),v(3489),v(5430),v(1177),v(1221),v(7625),v(2198),v(2986),v(4850),v(1059),v(5778),v(7545),v(2994),v(9177),Math,Math,Math;const fo=function(t){return{disabled:!0,currentPage:t}};function _o(t,n){if(1&t&&(a.TgZ(0,"a",20),a.YNc(1,go,0,0,"ng-template",8),a.qZA()),2&t){const e=a.oxw(2).$implicit,i=a.oxw(),o=a.MAs(9);a.xp6(1),a.Q6J("ngTemplateOutlet",(null==i.tplEllipsis?null:i.tplEllipsis.templateRef)||o)("ngTemplateOutletContext",a.VKq(2,fo,e))}}function ho(t,n){}const mo=function(t,n,e){return{disabled:t,$implicit:n,currentPage:e}};function bo(t,n){if(1&t){const e=a.EpF();a.TgZ(0,"a",21),a.NdJ("click",function(o){a.CHM(e);const s=a.oxw().$implicit;return a.oxw(2).selectPage(s),a.KtG(o.preventDefault())}),a.YNc(1,ho,0,0,"ng-template",8),a.qZA()}if(2&t){const e=a.oxw().$implicit,i=a.oxw(),o=i.disabled,s=i.$implicit,r=a.oxw(),l=a.MAs(11);a.uIk("tabindex",o?"-1":null)("aria-disabled",o?"true":null),a.xp6(1),a.Q6J("ngTemplateOutlet",(null==r.tplNumber?null:r.tplNumber.templateRef)||l)("ngTemplateOutletContext",a.kEZ(4,mo,o,e,s))}}function vo(t,n){if(1&t&&(a.TgZ(0,"li",17),a.YNc(1,_o,2,4,"a",18),a.YNc(2,bo,2,8,"a",19),a.qZA()),2&t){const e=n.$implicit,i=a.oxw(),o=i.$implicit,s=i.disabled,r=a.oxw();a.ekj("active",e===o)("disabled",r.isEllipsis(e)||s),a.uIk("aria-current",e===o?"page":null),a.xp6(1),a.Q6J("ngIf",r.isEllipsis(e)),a.xp6(1),a.Q6J("ngIf",!r.isEllipsis(e))}}function yo(t,n){1&t&&a.YNc(0,vo,3,7,"li",16),2&t&&a.Q6J("ngForOf",n.pages)}function No(t,n){}const Tt=function(t,n){return{disabled:t,currentPage:n}};function Do(t,n){if(1&t){const e=a.EpF();a.TgZ(0,"li",17)(1,"a",22),a.NdJ("click",function(o){return a.CHM(e),a.oxw().selectPage(1),a.KtG(o.preventDefault())}),a.YNc(2,No,0,0,"ng-template",8),a.qZA()()}if(2&t){const e=a.oxw(),i=a.MAs(1);a.ekj("disabled",e.previousDisabled()),a.xp6(1),a.uIk("tabindex",e.previousDisabled()?"-1":null)("aria-disabled",e.previousDisabled()?"true":null),a.xp6(1),a.Q6J("ngTemplateOutlet",(null==e.tplFirst?null:e.tplFirst.templateRef)||i)("ngTemplateOutletContext",a.WLB(6,Tt,e.previousDisabled(),e.page))}}function Co(t,n){}const To=function(t){return{disabled:t}};function So(t,n){if(1&t){const e=a.EpF();a.TgZ(0,"li",17)(1,"a",23),a.NdJ("click",function(o){a.CHM(e);const s=a.oxw();return s.selectPage(s.page-1),a.KtG(o.preventDefault())}),a.YNc(2,Co,0,0,"ng-template",8),a.qZA()()}if(2&t){const e=a.oxw(),i=a.MAs(3);a.ekj("disabled",e.previousDisabled()),a.xp6(1),a.uIk("tabindex",e.previousDisabled()?"-1":null)("aria-disabled",e.previousDisabled()?"true":null),a.xp6(1),a.Q6J("ngTemplateOutlet",(null==e.tplPrevious?null:e.tplPrevious.templateRef)||i)("ngTemplateOutletContext",a.VKq(6,To,e.previousDisabled()))}}function wo(t,n){}function Oo(t,n){}function Ro(t,n){if(1&t){const e=a.EpF();a.TgZ(0,"li",17)(1,"a",24),a.NdJ("click",function(o){a.CHM(e);const s=a.oxw();return s.selectPage(s.page+1),a.KtG(o.preventDefault())}),a.YNc(2,Oo,0,0,"ng-template",8),a.qZA()()}if(2&t){const e=a.oxw(),i=a.MAs(5);a.ekj("disabled",e.nextDisabled()),a.xp6(1),a.uIk("tabindex",e.nextDisabled()?"-1":null)("aria-disabled",e.nextDisabled()?"true":null),a.xp6(1),a.Q6J("ngTemplateOutlet",(null==e.tplNext?null:e.tplNext.templateRef)||i)("ngTemplateOutletContext",a.WLB(6,Tt,e.nextDisabled(),e.page))}}function Eo(t,n){}function Io(t,n){if(1&t){const e=a.EpF();a.TgZ(0,"li",17)(1,"a",25),a.NdJ("click",function(o){a.CHM(e);const s=a.oxw();return s.selectPage(s.pageCount),a.KtG(o.preventDefault())}),a.YNc(2,Eo,0,0,"ng-template",8),a.qZA()()}if(2&t){const e=a.oxw(),i=a.MAs(7);a.ekj("disabled",e.nextDisabled()),a.xp6(1),a.uIk("tabindex",e.nextDisabled()?"-1":null)("aria-disabled",e.nextDisabled()?"true":null),a.xp6(1),a.Q6J("ngTemplateOutlet",(null==e.tplLast?null:e.tplLast.templateRef)||i)("ngTemplateOutletContext",a.WLB(6,Tt,e.nextDisabled(),e.page))}}const Mo=function(t,n,e){return{$implicit:t,pages:n,disabled:e}};function ne(t){return!isNaN(function qe(t){return parseInt(`${t}`,10)}(t))}typeof navigator<"u"&&navigator.userAgent&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2||/Android/.test(navigator.userAgent)),["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", "),new Date(1882,10,12),new Date(2174,10,25);let or=(()=>{class t{constructor(){this.disabled=!1,this.boundaryLinks=!1,this.directionLinks=!0,this.ellipses=!0,this.maxSize=0,this.pageSize=10,this.rotate=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Gn=(()=>{class t{constructor(e){this.templateRef=e}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(a.Rgc))},t.\u0275dir=a.lG2({type:t,selectors:[["ng-template","ngbPaginationEllipsis",""]]}),t})(),Ln=(()=>{class t{constructor(e){this.templateRef=e}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(a.Rgc))},t.\u0275dir=a.lG2({type:t,selectors:[["ng-template","ngbPaginationFirst",""]]}),t})(),jn=(()=>{class t{constructor(e){this.templateRef=e}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(a.Rgc))},t.\u0275dir=a.lG2({type:t,selectors:[["ng-template","ngbPaginationLast",""]]}),t})(),Hn=(()=>{class t{constructor(e){this.templateRef=e}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(a.Rgc))},t.\u0275dir=a.lG2({type:t,selectors:[["ng-template","ngbPaginationNext",""]]}),t})(),$n=(()=>{class t{constructor(e){this.templateRef=e}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(a.Rgc))},t.\u0275dir=a.lG2({type:t,selectors:[["ng-template","ngbPaginationNumber",""]]}),t})(),Vn=(()=>{class t{constructor(e){this.templateRef=e}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(a.Rgc))},t.\u0275dir=a.lG2({type:t,selectors:[["ng-template","ngbPaginationPrevious",""]]}),t})(),Un=(()=>{class t{constructor(e){this.templateRef=e}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(a.Rgc))},t.\u0275dir=a.lG2({type:t,selectors:[["ng-template","ngbPaginationPages",""]]}),t})(),Jn=(()=>{class t{constructor(e){this.pageCount=0,this.pages=[],this.page=1,this.pageChange=new a.vpe(!0),this.disabled=e.disabled,this.boundaryLinks=e.boundaryLinks,this.directionLinks=e.directionLinks,this.ellipses=e.ellipses,this.maxSize=e.maxSize,this.pageSize=e.pageSize,this.rotate=e.rotate,this.size=e.size}hasPrevious(){return this.page>1}hasNext(){return this.page<this.pageCount}nextDisabled(){return!this.hasNext()||this.disabled}previousDisabled(){return!this.hasPrevious()||this.disabled}selectPage(e){this._updatePages(e)}ngOnChanges(e){this._updatePages(this.page)}isEllipsis(e){return-1===e}_applyEllipses(e,i){this.ellipses&&(e>0&&(e>2?this.pages.unshift(-1):2===e&&this.pages.unshift(2),this.pages.unshift(1)),i<this.pageCount&&(i<this.pageCount-2?this.pages.push(-1):i===this.pageCount-2&&this.pages.push(this.pageCount-1),this.pages.push(this.pageCount)))}_applyRotation(){let e=0,i=this.pageCount,o=Math.floor(this.maxSize/2);return this.page<=o?i=this.maxSize:this.pageCount-this.page<o?e=this.pageCount-this.maxSize:(e=this.page-o-1,i=this.page+(this.maxSize%2==0?o-1:o)),[e,i]}_applyPagination(){let i=(Math.ceil(this.page/this.maxSize)-1)*this.maxSize;return[i,i+this.maxSize]}_setPageInRange(e){const i=this.page;this.page=function Uo(t,n,e=0){return Math.max(Math.min(t,n),e)}(e,this.pageCount,1),this.page!==i&&ne(this.collectionSize)&&this.pageChange.emit(this.page)}_updatePages(e){this.pageCount=Math.ceil(this.collectionSize/this.pageSize),ne(this.pageCount)||(this.pageCount=0),this.pages.length=0;for(let i=1;i<=this.pageCount;i++)this.pages.push(i);if(this._setPageInRange(e),this.maxSize>0&&this.pageCount>this.maxSize){let i=0,o=this.pageCount;[i,o]=this.rotate?this._applyRotation():this._applyPagination(),this.pages=this.pages.slice(i,o),this._applyEllipses(i,o)}}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(or))},t.\u0275cmp=a.Xpm({type:t,selectors:[["ngb-pagination"]],contentQueries:function(e,i,o){if(1&e&&(a.Suo(o,Gn,5),a.Suo(o,Ln,5),a.Suo(o,jn,5),a.Suo(o,Hn,5),a.Suo(o,$n,5),a.Suo(o,Vn,5),a.Suo(o,Un,5)),2&e){let s;a.iGM(s=a.CRH())&&(i.tplEllipsis=s.first),a.iGM(s=a.CRH())&&(i.tplFirst=s.first),a.iGM(s=a.CRH())&&(i.tplLast=s.first),a.iGM(s=a.CRH())&&(i.tplNext=s.first),a.iGM(s=a.CRH())&&(i.tplNumber=s.first),a.iGM(s=a.CRH())&&(i.tplPrevious=s.first),a.iGM(s=a.CRH())&&(i.tplPages=s.first)}},hostAttrs:["role","navigation"],inputs:{disabled:"disabled",boundaryLinks:"boundaryLinks",directionLinks:"directionLinks",ellipses:"ellipses",rotate:"rotate",collectionSize:"collectionSize",maxSize:"maxSize",page:"page",pageSize:"pageSize",size:"size"},outputs:{pageChange:"pageChange"},features:[a.TTD],decls:20,vars:12,consts:function(){let n,e,i,o,s,r,l,c;return n=$localize`:@@ngb.pagination.first:««`,e=$localize`:@@ngb.pagination.previous:«`,i=$localize`:@@ngb.pagination.next:»`,o=$localize`:@@ngb.pagination.last:»»`,s=$localize`:@@ngb.pagination.first-aria:First`,r=$localize`:@@ngb.pagination.previous-aria:Previous`,l=$localize`:@@ngb.pagination.next-aria:Next`,c=$localize`:@@ngb.pagination.last-aria:Last`,[["first",""],["previous",""],["next",""],["last",""],["ellipsis",""],["defaultNumber",""],["defaultPages",""],["class","page-item",3,"disabled",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["aria-hidden","true"],n,e,i,o,["class","visually-hidden",4,"ngIf"],[1,"visually-hidden"],["class","page-item",3,"active","disabled",4,"ngFor","ngForOf"],[1,"page-item"],["class","page-link","tabindex","-1","aria-disabled","true",4,"ngIf"],["class","page-link","href","",3,"click",4,"ngIf"],["tabindex","-1","aria-disabled","true",1,"page-link"],["href","",1,"page-link",3,"click"],["aria-label",s,"href","",1,"page-link",3,"click"],["aria-label",r,"href","",1,"page-link",3,"click"],["aria-label",l,"href","",1,"page-link",3,"click"],["aria-label",c,"href","",1,"page-link",3,"click"]]},template:function(e,i){if(1&e&&(a.YNc(0,oo,2,0,"ng-template",null,0,a.W1O),a.YNc(2,so,2,0,"ng-template",null,1,a.W1O),a.YNc(4,ro,2,0,"ng-template",null,2,a.W1O),a.YNc(6,lo,2,0,"ng-template",null,3,a.W1O),a.YNc(8,co,1,0,"ng-template",null,4,a.W1O),a.YNc(10,po,2,2,"ng-template",null,5,a.W1O),a.YNc(12,yo,1,1,"ng-template",null,6,a.W1O),a.TgZ(14,"ul"),a.YNc(15,Do,3,9,"li",7),a.YNc(16,So,3,8,"li",7),a.YNc(17,wo,0,0,"ng-template",8),a.YNc(18,Ro,3,9,"li",7),a.YNc(19,Io,3,9,"li",7),a.qZA()),2&e){const o=a.MAs(13);a.xp6(14),a.Tol("pagination"+(i.size?" pagination-"+i.size:"")),a.xp6(1),a.Q6J("ngIf",i.boundaryLinks),a.xp6(1),a.Q6J("ngIf",i.directionLinks),a.xp6(1),a.Q6J("ngTemplateOutlet",(null==i.tplPages?null:i.tplPages.templateRef)||o)("ngTemplateOutletContext",a.kEZ(8,Mo,i.page,i.pages,i.disabled)),a.xp6(1),a.Q6J("ngIf",i.directionLinks),a.xp6(1),a.Q6J("ngIf",i.boundaryLinks)}},dependencies:[h.sg,h.O5,h.tP],encapsulation:2,changeDetection:0}),t})(),Yn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[h.ez]}),t})();function Nr(t,n){if(1&t&&(a.TgZ(0,"span"),a._uU(1),a.qZA()),2&t){const e=a.oxw(2);a.xp6(1),a.Oqu("asc"===e.sortDirection$.value?"\u21a5":"\u21a7")}}function Dr(t,n){if(1&t){const e=a.EpF();a.TgZ(0,"th",25),a.NdJ("click",function(){a.CHM(e);const o=a.oxw();return a.KtG(o.adjustSort("name"))}),a._uU(1," Customer Name "),a.YNc(2,Nr,2,1,"span",26),a.qZA()}if(2&t){const e=a.oxw();a.xp6(2),a.Q6J("ngIf","name"===e.sortKey$.value)}}function Cr(t,n){if(1&t&&(a.TgZ(0,"td",27),a._uU(1),a.qZA()),2&t){const e=n.$implicit;a.xp6(1),a.hij(" ",null==e||null==e.customer?null:e.customer.name," ")}}function Tr(t,n){if(1&t&&(a.TgZ(0,"span"),a._uU(1),a.qZA()),2&t){const e=a.oxw(2);a.xp6(1),a.Oqu("asc"===e.sortDirection$.value?"\u21a5":"\u21a7")}}function Sr(t,n){if(1&t){const e=a.EpF();a.TgZ(0,"th",25),a.NdJ("click",function(){a.CHM(e);const o=a.oxw();return a.KtG(o.adjustSort("city"))}),a._uU(1," City "),a.YNc(2,Tr,2,1,"span",26),a.qZA()}if(2&t){const e=a.oxw();a.xp6(2),a.Q6J("ngIf","city"===e.sortKey$.value)}}function wr(t,n){if(1&t&&(a.TgZ(0,"td",27),a._uU(1),a.qZA()),2&t){const e=n.$implicit;a.xp6(1),a.hij(" ",null==e||null==e.customer?null:e.customer.city," ")}}function Or(t,n){if(1&t&&(a.TgZ(0,"span"),a._uU(1),a.qZA()),2&t){const e=a.oxw(2);a.xp6(1),a.Oqu("asc"===e.sortDirection$.value?"\u21a5":"\u21a7")}}function Rr(t,n){if(1&t){const e=a.EpF();a.TgZ(0,"th",25),a.NdJ("click",function(){a.CHM(e);const o=a.oxw();return a.KtG(o.adjustSort("treeName"))}),a._uU(1," Tree Name "),a.YNc(2,Or,2,1,"span",26),a.qZA()}if(2&t){const e=a.oxw();a.xp6(2),a.Q6J("ngIf","treeName"===e.sortKey$.value)}}function Er(t,n){if(1&t&&(a.TgZ(0,"td",27),a._uU(1),a.qZA()),2&t){const e=n.$implicit;a.xp6(1),a.hij(" ",null==e||null==e.tree?null:e.tree.name," ")}}function Ir(t,n){if(1&t&&(a.TgZ(0,"span"),a._uU(1),a.qZA()),2&t){const e=a.oxw(2);a.xp6(1),a.Oqu("asc"===e.sortDirection$.value?"\u21a5":"\u21a7")}}function Mr(t,n){if(1&t){const e=a.EpF();a.TgZ(0,"th",25),a.NdJ("click",function(){a.CHM(e);const o=a.oxw();return a.KtG(o.adjustSort("quantity"))}),a._uU(1," Quantity "),a.YNc(2,Ir,2,1,"span",26),a.qZA()}if(2&t){const e=a.oxw();a.xp6(2),a.Q6J("ngIf","quantity"===e.sortKey$.value)}}function Pr(t,n){if(1&t&&(a.TgZ(0,"td",27),a._uU(1),a.qZA()),2&t){const e=n.$implicit;a.xp6(1),a.hij(" ",null==e?null:e.quantity," ")}}function xr(t,n){if(1&t&&(a.TgZ(0,"span"),a._uU(1),a.qZA()),2&t){const e=a.oxw(2);a.xp6(1),a.Oqu("asc"===e.sortDirection$.value?"\u21a5":"\u21a7")}}function kr(t,n){if(1&t){const e=a.EpF();a.TgZ(0,"th",25),a.NdJ("click",function(){a.CHM(e);const o=a.oxw();return a.KtG(o.adjustSort("created_at"))}),a._uU(1," Order Date "),a.YNc(2,xr,2,1,"span",26),a.qZA()}if(2&t){const e=a.oxw();a.xp6(2),a.Q6J("ngIf","created_at"===e.sortKey$.value)}}function Ar(t,n){if(1&t&&(a.TgZ(0,"td",27),a._uU(1),a.ALo(2,"date"),a.qZA()),2&t){const e=n.$implicit;a.xp6(1),a.hij(" ",a.xi3(2,1,null==e?null:e.created_at,"MM-dd-yyyy")," ")}}function Fr(t,n){1&t&&(a.TgZ(0,"th",28),a._uU(1,"Actions"),a.qZA())}function Br(t,n){if(1&t&&(a.TgZ(0,"td",27)(1,"button",29)(2,"span",30),a._uU(3," visibility "),a.qZA()()()),2&t){const e=n.$implicit;a.xp6(1),a.MGl("routerLink","/admin/orders/create/",e.id,"")}}function Gr(t,n){1&t&&a._UZ(0,"tr",31)}function Lr(t,n){1&t&&a._UZ(0,"tr",32)}new a.OlP("live announcer delay",{providedIn:"root",factory:function vr(){return 100}});const jr=[{path:"create/:id",component:jt},{path:"order/:id",component:jt},{path:"",component:(()=>{class t{constructor(e){this.orderService=e,this.subscriptions=[],this.searchFormControl=new q.NI,this.searchKeyword="",this.orders=[],this.allOrders=[],this.tableDataSource=new A.X([]),this.displayedColumns=new A.X(["customerName","city","treeName","quantity","orderDate","actions"]),this.sortKey$=new A.X("created_at"),this.sortDirection$=new A.X("desc"),this.currentPage$=new A.X(1),this.pageSize$=new A.X(10),this.dataOnPage$=new A.X([])}ngOnInit(){this.getOrders();const e=(0,Ve.aj)([this.searchFormControl.valueChanges,this.sortKey$,this.sortDirection$,this.currentPage$,this.pageSize$]).subscribe(([o,s,r])=>{const l=this.orders;let c;c=o?l.filter(p=>p.customer.name.toLowerCase().includes(o.toLowerCase())||p.customer.city.toLowerCase().includes(o.toLowerCase())||p.tree.scientificName.toLowerCase().includes(o.toLowerCase())||p.tree.name.toLowerCase().includes(o.toLowerCase())||p.quantity.toString().toLowerCase().includes(o.toLowerCase())):l;const d=c.sort((u,p)=>{switch(s){case"name":return null===u.customer.name&&(u.customer.name=" "),u.customer.name.localeCompare(p.customer.name)>0?"asc"===r?1:-1:"desc"===r?1:-1;case"city":return u.customer.city.localeCompare(p.customer.city)>0?"asc"===r?1:-1:"desc"===r?1:-1;case"treeName":return u.tree.name.localeCompare(p.tree.name)>0?"asc"===r?1:-1:"desc"===r?1:-1;default:if(u[s]>p[s])return"asc"===r?1:-1;if(u[s]<p[s])return"asc"===r?-1:1}});this.tableDataSource.next(d)});this.subscriptions.push(e);const i=(0,Ve.aj)([this.tableDataSource,this.currentPage$,this.pageSize$]).subscribe(([o,s,r])=>{const l=(s-1)*r,c=o.slice(l,l+r);this.dataOnPage$.next(c)});this.subscriptions.push(i),this.searchFormControl.setValue("")}ionViewDidEnter(){}getOrders(){const e=this.orderService.getOrders().subscribe(i=>{this.allOrders=i.data.map(o=>({...o,customer:{...o.customer,name:o.customer.name?o.customer.name:""}})),this.orders=this.allOrders,this.tableDataSource.next(this.orders),this.pending=this.orders.filter(o=>!o.isSentToNursery).length,this.sentToNursery=this.orders.filter(o=>o.isSentToNursery).length});this.subscriptions.push(e)}filterSearch(){this.orders=this.allOrders.filter(e=>e.customer.name.toLowerCase().includes(this.searchKeyword.toLowerCase())||e.customer.city.toLowerCase().includes(this.searchKeyword.toLowerCase())||e.tree.scientificName.toLowerCase().includes(this.searchKeyword.toLowerCase())||e.tree.name.toLowerCase().includes(this.searchKeyword.toLowerCase()))}export(){this.orderService.orderExport().subscribe(e=>this.downLoadFile(e,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))}sendToNursery(){this.orderService.sendToNursery().subscribe(e=>{this.downLoadFile(e,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),this.getOrders()})}downLoadFile(e,i){let o=new Blob([e],{type:i}),s=window.URL.createObjectURL(o),r=window.open(s);(!r||r.closed||typeof r.closed>"u")&&alert("Please disable your Pop-up blocker and try again.")}adjustSort(e){this.sortKey$.value!==e?(this.sortKey$.next(e),this.sortDirection$.next("asc")):this.sortDirection$.next("asc"===this.sortDirection$.value?"desc":"asc")}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(Lt.p))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-list"]],decls:55,vars:10,consts:[[1,"container"],[1,"header","align-items-center","d-flex","justify-content-between"],["type","text","placeholder","Search",1,"form-control","w-25",3,"formControl"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-primary","ms-2",3,"click"],[1,"row","mt-4"],[1,"col-sm-4"],[1,"card","text-center"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"table-responsive","mt-4"],["cdk-table","",1,"table-striped","w-100",3,"dataSource"],["cdkColumnDef","customerName"],["cdk-header-cell","",3,"click",4,"cdkHeaderCellDef"],["cdk-cell","",4,"cdkCellDef"],["cdkColumnDef","city"],["cdkColumnDef","treeName"],["cdkColumnDef","quantity"],["cdkColumnDef","orderDate"],["cdkColumnDef","actions"],["cdk-header-cell","",4,"cdkHeaderCellDef"],["cdk-header-row","",4,"cdkHeaderRowDef"],["cdk-row","",4,"cdkRowDef","cdkRowDefColumns"],[3,"collectionSize","pageSize","page","pageChange"],["cdk-header-cell","",3,"click"],[4,"ngIf"],["cdk-cell",""],["cdk-header-cell",""],[1,"btn","btn-primary",3,"routerLink"],[1,"material-icons-outlined"],["cdk-header-row",""],["cdk-row",""]],template:function(e,i){1&e&&(a.TgZ(0,"ion-content")(1,"div",0)(2,"div",1)(3,"h2"),a._uU(4,"Orders"),a.qZA(),a._UZ(5,"input",2),a.qZA(),a.TgZ(6,"button",3),a.NdJ("click",function(){return i.export()}),a._uU(7,"Export"),a.qZA(),a.TgZ(8,"button",4),a.NdJ("click",function(){return i.sendToNursery()}),a._uU(9,"Send To Nursery"),a.qZA(),a.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"h5",9),a._uU(15,"Total orders"),a.qZA(),a.TgZ(16,"p",10),a._uU(17),a.qZA()()()(),a.TgZ(18,"div",6)(19,"div",7)(20,"div",8)(21,"h5",9),a._uU(22,"Pending orders"),a.qZA(),a.TgZ(23,"p",10),a._uU(24),a.qZA()()()(),a.TgZ(25,"div",6)(26,"div",7)(27,"div",8)(28,"h5",9),a._uU(29,"Sent to nursery"),a.qZA(),a.TgZ(30,"p",10),a._uU(31),a.qZA()()()()(),a.TgZ(32,"div",11)(33,"table",12),a.ynx(34,13),a.YNc(35,Dr,3,1,"th",14),a.YNc(36,Cr,2,1,"td",15),a.BQk(),a.ynx(37,16),a.YNc(38,Sr,3,1,"th",14),a.YNc(39,wr,2,1,"td",15),a.BQk(),a.ynx(40,17),a.YNc(41,Rr,3,1,"th",14),a.YNc(42,Er,2,1,"td",15),a.BQk(),a.ynx(43,18),a.YNc(44,Mr,3,1,"th",14),a.YNc(45,Pr,2,1,"td",15),a.BQk(),a.ynx(46,19),a.YNc(47,kr,3,1,"th",14),a.YNc(48,Ar,3,4,"td",15),a.BQk(),a.ynx(49,20),a.YNc(50,Fr,2,0,"th",21),a.YNc(51,Br,4,1,"td",15),a.BQk(),a.YNc(52,Gr,1,0,"tr",22),a.YNc(53,Lr,1,0,"tr",23),a.qZA()(),a.TgZ(54,"ngb-pagination",24),a.NdJ("pageChange",function(s){return i.currentPage$.next(s)}),a.qZA()()()),2&e&&(a.xp6(5),a.Q6J("formControl",i.searchFormControl),a.xp6(12),a.Oqu(i.orders.length),a.xp6(7),a.Oqu(i.pending),a.xp6(7),a.Oqu(i.sentToNursery),a.xp6(2),a.Q6J("dataSource",i.dataOnPage$),a.xp6(19),a.Q6J("cdkHeaderRowDef",i.displayedColumns.value),a.xp6(1),a.Q6J("cdkRowDefColumns",i.displayedColumns.value),a.xp6(1),a.Q6J("collectionSize",i.tableDataSource.value.length)("pageSize",i.pageSize$.value)("page",i.currentPage$.value))},dependencies:[h.O5,re.W2,re.YI,q.Fj,q.JJ,q.oH,V.zC,V.Sq,V.O_,V.D5,V.fo,V.hD,V._J,V.Af,V.xN,V.s$,we.rH,Jn,h.uU],styles:["td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:5px 0}"]}),t})()}];let Hr=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[we.Bz.forChild(jr),we.Bz]}),t})(),$r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[h.ez,re.Pc,q.u5,q.UX,V.HT,Hr,Yn]}),t})()},6529:(ii,$e,v)=>{v.d($e,{X:()=>h});var h=(()=>{return(re=h||(h={})).TREE="TREE",re.YARD_SKETCH="YARD_SKETCH",h;var re})()}}]);