(this["webpackJsonpfixlink-typescript"]=this["webpackJsonpfixlink-typescript"]||[]).push([[26],{116:function(e,c,s){"use strict";var t=s(10),a=s(17),r=s(28),n=s(114),i=s(0),o=["label","classes"];c.a=function(e){var c=e.label,s=e.classes,l=Object(r.a)(e,o),d=Object(n.e)(l),j=Object(a.a)(d,2),b=j[0],u=j[1],m=u.error&&u.touched,O=!u.error&&u.touched;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"form-group ".concat(s||""),children:[Object(i.jsxs)("div",{className:"form__div",children:[Object(i.jsx)("input",Object(t.a)(Object(t.a)(Object(t.a)({},b),l),{},{className:"form__input ".concat(m&&"error"," ").concat(O&&"success"),placeholder:"\u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"})),Object(i.jsx)("label",{htmlFor:"",className:"form__label",children:c})]}),Object(i.jsx)(n.a,{name:"".concat(l.name),className:"form__error",component:"div"})]})})}},348:function(e,c,s){},475:function(e,c,s){"use strict";s.r(c);var t=s(23),a=s.n(t),r=s(10),n=s(33),i=s(9),o=s(114),l=s(116),d=s(117),j={newPassword:"",confirmPassword:""},b=d.a({newPassword:d.c().min(6,"\u067e\u0633\u0648\u0631\u062f \u0628\u0627\u06cc\u062f \u062d\u062f\u0627\u0642\u0644 \u062d\u0627\u0648\u06cc \u0634\u0634 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631 \u0628\u0627\u0634\u062f").required("\u0644\u0637\u0641\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f").trim(),confirmPassword:d.c().oneOf([d.b("newPassword"),""],"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0627 \u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0631\u0627\u0628\u0631 \u0646\u06cc\u0633\u062a").required("\u0644\u0637\u0641\u0627 \u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f").trim()}),u=s(48),m=s(47),O=(s(348),s(52)),p=s(0);c.default=function(){var e=Object(i.f)(),c=Object(i.g)().token,s=Object(u.a)(m.H,Object(p.jsx)(O.a,{})),t=s.restQuery,d=s.loadingMessage,f=function(){var s=Object(n.a)(a.a.mark((function s(n,i){return a.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:i.resetForm(),t.mutate(Object(r.a)(Object(r.a)({},n),{},{token:c}),{onSuccess:function(){e.replace("/user/login")}});case 2:case"end":return s.stop()}}),s)})));return function(e,c){return s.apply(this,arguments)}}();return Object(p.jsx)("section",{className:"submit-password center-content",children:Object(p.jsxs)("div",{className:"card submit-password--card card__custom",children:[Object(p.jsx)("div",{className:"card__header-title",children:Object(p.jsx)("h5",{className:"text-center",children:"\u062a\u063a\u06cc\u06cc\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631"})}),Object(p.jsx)(o.d,{initialValues:j,validationSchema:b,onSubmit:f,children:function(){return Object(p.jsxs)(o.c,{children:[Object(p.jsx)(l.a,{name:"newPassword",type:"password",label:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631"}),Object(p.jsx)(l.a,{name:"confirmPassword",type:"password",label:"\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631"}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)("button",{type:"submit",className:"btn__custom",disabled:!!d,children:null!==d&&void 0!==d?d:Object(p.jsx)("span",{children:"\u0648\u0631\u0648\u062f"})})})]})}})]})})}}}]);