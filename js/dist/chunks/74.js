yoastWebpackJsonp([74],{506:function(module,exports,__webpack_require__){"use strict";eval('var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };\n\n!function (e, t) {\n  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === \'function\' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}, e.ReactIntlLocaleData.pl = t());\n}(undefined, function () {\n  "use strict";\n  return [{ locale: "pl", pluralRuleFunction: function pluralRuleFunction(e, t) {\n      var a = String(e).split("."),\n          i = a[0],\n          n = !a[1],\n          m = i.slice(-1),\n          u = i.slice(-2);return t ? "other" : 1 == e && n ? "one" : n && m >= 2 && m <= 4 && (u < 12 || u > 14) ? "few" : n && 1 != i && (0 == m || 1 == m) || n && m >= 5 && m <= 9 || n && u >= 12 && u <= 14 ? "many" : "other";\n    }, fields: { year: { displayName: "rok", relative: { 0: "w tym roku", 1: "w przyszłym roku", "-1": "w zeszłym roku" }, relativeTime: { future: { one: "za {0} rok", few: "za {0} lata", many: "za {0} lat", other: "za {0} roku" }, past: { one: "{0} rok temu", few: "{0} lata temu", many: "{0} lat temu", other: "{0} roku temu" } } }, month: { displayName: "miesiąc", relative: { 0: "w tym miesiącu", 1: "w przyszłym miesiącu", "-1": "w zeszłym miesiącu" }, relativeTime: { future: { one: "za {0} miesiąc", few: "za {0} miesiące", many: "za {0} miesięcy", other: "za {0} miesiąca" }, past: { one: "{0} miesiąc temu", few: "{0} miesiące temu", many: "{0} miesięcy temu", other: "{0} miesiąca temu" } } }, day: { displayName: "dzień", relative: { 0: "dzisiaj", 1: "jutro", 2: "pojutrze", "-2": "przedwczoraj", "-1": "wczoraj" }, relativeTime: { future: { one: "za {0} dzień", few: "za {0} dni", many: "za {0} dni", other: "za {0} dnia" }, past: { one: "{0} dzień temu", few: "{0} dni temu", many: "{0} dni temu", other: "{0} dnia temu" } } }, hour: { displayName: "godzina", relative: { 0: "ta godzina" }, relativeTime: { future: { one: "za {0} godzinę", few: "za {0} godziny", many: "za {0} godzin", other: "za {0} godziny" }, past: { one: "{0} godzinę temu", few: "{0} godziny temu", many: "{0} godzin temu", other: "{0} godziny temu" } } }, minute: { displayName: "minuta", relative: { 0: "ta minuta" }, relativeTime: { future: { one: "za {0} minutę", few: "za {0} minuty", many: "za {0} minut", other: "za {0} minuty" }, past: { one: "{0} minutę temu", few: "{0} minuty temu", many: "{0} minut temu", other: "{0} minuty temu" } } }, second: { displayName: "sekunda", relative: { 0: "teraz" }, relativeTime: { future: { one: "za {0} sekundę", few: "za {0} sekundy", many: "za {0} sekund", other: "za {0} sekundy" }, past: { one: "{0} sekundę temu", few: "{0} sekundy temu", many: "{0} sekund temu", other: "{0} sekundy temu" } } } } }];\n});\n\n//////////////////\n// WEBPACK FOOTER\n// /Users/joostdevalk/Code/GitHub/wordpress-seo/node_modules/react-intl/locale-data/pl.js\n// module id = 506\n// module chunks = 74\n\n//# sourceURL=webpack:////Users/joostdevalk/Code/GitHub/wordpress-seo/node_modules/react-intl/locale-data/pl.js?')}});