goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57946,match){
var map__57947 = p__57946;
var map__57947__$1 = (((((!((map__57947 == null))))?(((((map__57947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57947):map__57947);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57947__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57947__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57947__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4174__auto__ = identity;
if(cljs.core.truth_(and__4174__auto__)){
return parameters;
} else {
return and__4174__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57950(s__57951){
return (new cljs.core.LazySeq(null,(function (){
var s__57951__$1 = s__57951;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57951__$1);
if(temp__5735__auto__){
var s__57951__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57951__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57951__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57953 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57952 = (0);
while(true){
if((i__57952 < size__4581__auto__)){
var vec__57955 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57952);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57955,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57955,(1),null);
cljs.core.chunk_append(b__57953,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57973 = (i__57952 + (1));
i__57952 = G__57973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57953),reitit$frontend$controllers$get_identity_$_iter__57950(cljs.core.chunk_rest(s__57951__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57953),null);
}
} else {
var vec__57958 = cljs.core.first(s__57951__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57958,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57958,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57950(cljs.core.rest(s__57951__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__57961 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57961) : f.call(null,G__57961));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__57962_57974 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57963_57975 = null;
var count__57964_57976 = (0);
var i__57965_57977 = (0);
while(true){
if((i__57965_57977 < count__57964_57976)){
var controller_57978 = chunk__57963_57975.cljs$core$IIndexed$_nth$arity$2(null,i__57965_57977);
reitit.frontend.controllers.apply_controller(controller_57978,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57980 = seq__57962_57974;
var G__57981 = chunk__57963_57975;
var G__57982 = count__57964_57976;
var G__57983 = (i__57965_57977 + (1));
seq__57962_57974 = G__57980;
chunk__57963_57975 = G__57981;
count__57964_57976 = G__57982;
i__57965_57977 = G__57983;
continue;
} else {
var temp__5735__auto___57984 = cljs.core.seq(seq__57962_57974);
if(temp__5735__auto___57984){
var seq__57962_57985__$1 = temp__5735__auto___57984;
if(cljs.core.chunked_seq_QMARK_(seq__57962_57985__$1)){
var c__4609__auto___57986 = cljs.core.chunk_first(seq__57962_57985__$1);
var G__57987 = cljs.core.chunk_rest(seq__57962_57985__$1);
var G__57988 = c__4609__auto___57986;
var G__57989 = cljs.core.count(c__4609__auto___57986);
var G__57990 = (0);
seq__57962_57974 = G__57987;
chunk__57963_57975 = G__57988;
count__57964_57976 = G__57989;
i__57965_57977 = G__57990;
continue;
} else {
var controller_57991 = cljs.core.first(seq__57962_57985__$1);
reitit.frontend.controllers.apply_controller(controller_57991,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57992 = cljs.core.next(seq__57962_57985__$1);
var G__57993 = null;
var G__57994 = (0);
var G__57995 = (0);
seq__57962_57974 = G__57992;
chunk__57963_57975 = G__57993;
count__57964_57976 = G__57994;
i__57965_57977 = G__57995;
continue;
}
} else {
}
}
break;
}

var seq__57966_57996 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57967_57997 = null;
var count__57968_57998 = (0);
var i__57969_57999 = (0);
while(true){
if((i__57969_57999 < count__57968_57998)){
var controller_58000 = chunk__57967_57997.cljs$core$IIndexed$_nth$arity$2(null,i__57969_57999);
reitit.frontend.controllers.apply_controller(controller_58000,new cljs.core.Keyword(null,"start","start",-355208981));


var G__58001 = seq__57966_57996;
var G__58002 = chunk__57967_57997;
var G__58003 = count__57968_57998;
var G__58004 = (i__57969_57999 + (1));
seq__57966_57996 = G__58001;
chunk__57967_57997 = G__58002;
count__57968_57998 = G__58003;
i__57969_57999 = G__58004;
continue;
} else {
var temp__5735__auto___58005 = cljs.core.seq(seq__57966_57996);
if(temp__5735__auto___58005){
var seq__57966_58006__$1 = temp__5735__auto___58005;
if(cljs.core.chunked_seq_QMARK_(seq__57966_58006__$1)){
var c__4609__auto___58007 = cljs.core.chunk_first(seq__57966_58006__$1);
var G__58008 = cljs.core.chunk_rest(seq__57966_58006__$1);
var G__58009 = c__4609__auto___58007;
var G__58010 = cljs.core.count(c__4609__auto___58007);
var G__58011 = (0);
seq__57966_57996 = G__58008;
chunk__57967_57997 = G__58009;
count__57968_57998 = G__58010;
i__57969_57999 = G__58011;
continue;
} else {
var controller_58012 = cljs.core.first(seq__57966_58006__$1);
reitit.frontend.controllers.apply_controller(controller_58012,new cljs.core.Keyword(null,"start","start",-355208981));


var G__58013 = cljs.core.next(seq__57966_58006__$1);
var G__58014 = null;
var G__58015 = (0);
var G__58016 = (0);
seq__57966_57996 = G__58013;
chunk__57967_57997 = G__58014;
count__57968_57998 = G__58015;
i__57969_57999 = G__58016;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
