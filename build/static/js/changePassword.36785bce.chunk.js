(this["webpackJsonpfixlink-typescript"]=this["webpackJsonpfixlink-typescript"]||[]).push([[7],{120:function(e,c,s){"use strict";var t=s(9),r=s(16),a=s(28),n=s(118),i=s(0),o=["label","classes"];c.a=function(e){var c=e.label,s=e.classes,l=Object(a.a)(e,o),d=Object(n.e)(l),j=Object(r.a)(d,2),b=j[0],m=j[1],u=m.error&&m.touched,h=!m.error&&m.touched;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"form-group ".concat(s||""),children:[Object(i.jsxs)("div",{className:"form__div",children:[Object(i.jsx)("input",Object(t.a)(Object(t.a)(Object(t.a)({},b),l),{},{className:"form__input ".concat(u&&"error"," ").concat(h&&"success"),placeholder:"\u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"})),Object(i.jsx)("label",{htmlFor:"",className:"form__label",children:c})]}),Object(i.jsx)(n.a,{name:"".concat(l.name),className:"form__error",component:"div"})]})})}},354:function(e,c,s){},480:function(e,c,s){"use strict";s.r(c);var t=s(22),r=s.n(t),a=s(33),n=s(8),i=s(118),o=s(121),l={oldPassword:"",newPassword:"",confirmPassword:""},d=o.a({oldPassword:o.c().min(6,"\u067e\u0633\u0648\u0631\u062f \u0628\u0627\u06cc\u062f \u062d\u062f\u0627\u0642\u0644 \u062d\u0627\u0648\u06cc \u0634\u0634 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631 \u0628\u0627\u0634\u062f").required("\u0644\u0637\u0641\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f").trim(),newPassword:o.c().min(6,"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f \u0628\u0627\u06cc\u062f \u062d\u062f\u0627\u0642\u0644 \u062d\u0627\u0648\u06cc \u0634\u0634 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631 \u0628\u0627\u0634\u062f").required("\u0644\u0637\u0641\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f").trim(),confirmPassword:o.c().oneOf([o.b("newPassword"),""],"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f \u0628\u0627 \u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f \u0628\u0631\u0627\u0628\u0631 \u0646\u06cc\u0633\u062a").required("\u0644\u0637\u0641\u0627 \u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f").trim()}),j=s(49),b=s(120),m=s(48),u=(s(354),s(0));c.default=function(){var e=Object(n.f)(),c=Object(j.a)(m.b),s=function(){var s=Object(a.a)(r.a.mark((function s(t,a){return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:c.restQuery.mutate(t,{onSuccess:function(){a.resetForm(),e.replace("/")}});case 1:case"end":return s.stop()}}),s)})));return function(e,c){return s.apply(this,arguments)}}();return Object(u.jsx)("section",{className:"change-password center-content",children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("h5",{children:"\u062a\u063a\u06cc\u06cc\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631"}),Object(u.jsx)("p",{children:"\u062f\u0631 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u0634\u0645\u0627 \u0645\u06cc\u062a\u0648\u0627\u0646\u06cc\u062f \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u0635\u0648\u0631\u062a \u0646\u06cc\u0627\u0632 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u062f"})]}),Object(u.jsxs)("div",{className:"card change-password--card custom--card",children:[Object(u.jsx)("div",{className:"card__header-title",children:Object(u.jsx)("h4",{className:"text-center",children:"\u062a\u063a\u06cc\u06cc\u0631 \u0631\u0645\u0632"})}),Object(u.jsx)(i.d,{initialValues:l,validationSchema:d,onSubmit:s,children:function(){return Object(u.jsxs)(i.c,{children:[Object(u.jsx)(b.a,{name:"oldPassword",type:"password",label:"\u0631\u0645\u0632 \u0641\u0639\u0644\u06cc"}),Object(u.jsx)(b.a,{name:"newPassword",type:"password",label:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f"}),Object(u.jsx)(b.a,{name:"confirmPassword",type:"password",label:"\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f"}),Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)("button",{type:"submit",className:"btn custom-btn",children:"\u062b\u0628\u062a"})})]})}})]})]})})}}}]);