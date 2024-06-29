let questions = [
  {
    question:
      "Veb saytın ilkin strukturu (skeleti) hansı texnologiya istifadə edərək hazırlanır?",
    answer: "HTML",
    options: ["HTML", "CSS", "JAVASCRİPT", "REACT"],
  },
  {
    question:
      "İki array data tipini bir birinə birləşdirmək üçün hansı metoddan istifadə edilir?",
    answer: "concat()",
    options: ["push()", "pop()", "concat()", "unshift()"],
  },
  {
    question:
      "Front-End sahəsinə aid olan terminlər olan variantı seçin.",
    answer: "HTML, CSS, JavaScript, ReactJS",
    options: ["HTML, CSS, JavaScript, ReactJS, NodeJS", "HTML, CSS, Php, ReactJS", "HTML, CSS, JavaScript, ReactJS", "HTML, NodeJS, JavaScript, ReactJS"],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək link yaradılır?",
    answer: "a",
    options: ["href", "link", "a", "span"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin arxa fon rəngi təyin edilir?",
    answer: "background-color",
    options: ["color", "box-color", "background-color", "font-color"],
  },
  {
    question:
      "JavaScript-də hansı operator istifadə edilərək bərabərlik yoxlanılır?",
    answer: "==",
    options: ["=", "===", "==", "!="],
  },
  {
    question:
      "JavaScript-də hansı operator mənimsətmə üçün istifadə edilir?",
    answer: "=",
    options: ["=", "===", "==", "!="],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək şəkil əlavə edilir?",
    answer: "img",
    options: ["src", "image", "picture", "img"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin uzunluğu təyin edilir?",
    answer: "width",
    options: ["size", "width", "height", "dimension"],
  },
  {
    question:
      "JavaScript-də hansı funksiya istifadə edilərək ekrana xəbərdarlıq mesajı göstərilir?",
    answer: "alert()",
    options: ["console.log()", "alert()", "prompt()", "document.write()"],
  },
  {
    question:
      "JavaScript-də hansı funksiya istifadə edilərək istifadəçidən məlumatlar əldə etmək olar?",
    answer: "prompt()",
    options: ["console.log()", "alert()", "prompt()", "document.write()"],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək başlıq mətni yazılır?",
    answer: "h1",
    options: ["header", "h1", "head", "title"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin kənar  xətti təyin edilir?",
    answer: "border",
    options: ["border", "outline", "line", "frame"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək stringin uzunluğu əldə edilir?",
    answer: "length",
    options: ["size", "length", "count", "substring"],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək siyahı yaradılır?",
    answer: "ul",
    options: ["ul", "ol", "list", "li"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin mətn ölçüsü təyin edilir?",
    answer: "font-size",
    options: ["text-size", "font-size", "size", "text-dimension"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək arrayin sonuna element əlavə edilir?",
    answer: "push()",
    options: ["add()", "push()", "append()", "insert()"],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək paragraf yazılır?",
    answer: "p",
    options: ["paragraph", "text", "p", "para"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin görünməsi/yox olması təyin edilir?",
    answer: "display",
    options: ["visible", "display", "show", "hidden"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək bir stringin başqa stringə çevrilməsi mümkündür?",
    answer: "replace()",
    options: ["replace()", "convert()", "change()", "transform()"],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək düymə yaradılır?",
    answer: "button",
    options: ["input", "button", "submit", "click"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin daxili boşluğu təyin edilir?",
    answer: "padding",
    options: ["margin", "padding", "space", "inner-space"],
  },
  {
    question:
      "JavaScript-də hansı operator istifadə edilərək məntiqi bərabərlik yoxlanılır? (value and type) ",
    answer: "===",
    options: ["=", "==", "===", "!=="],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək cədvəl yaradılır?",
    answer: "table",
    options: ["tr", "td", "table", "tbody"],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək cədvəl sütunu yaradılır?",
    answer: "td",
    options: ["tr", "td", "table", "tbody"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin xarici boşluğu təyin edilir?",
    answer: "margin",
    options: ["padding", "space", "outer-space", "margin"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək arrayin ilk elementini silmək mümkündür?",
    answer: "shift()",
    options: ["unshift()", "shift()", "pop()", "splice()"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin yazı tipi təyin edilir?",
    answer: "font-family",
    options: ["font", "font-family", "text-family", "font-type"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək bir stringin başlanğıcından boşluqlar silinir?",
    answer: "trimStart()",
    options: ["trim()", "trimEnd()", "trimStart()", "cutStart()"],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək şəkil əlavə edilir?",
    answer: "img",
    options: ["picture", "photo", "img", "image"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin mətn xətti hündürlüyü təyin edilir?",
    answer: "line-height",
    options: ["height", "text-height", "line-height", "font-height"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək arrayin son elementini silmək mümkündür?",
    answer: "pop()",
    options: ["push()", "shift()", "pop()", "unshift()"],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək formlar yaradılır?",
    answer: "form",
    options: ["input", "submit", "form", "button"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin yerləşmə yeri təyin edilir?",
    answer: "position",
    options: ["position", "location", "align", "place"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək stringin kiçik hərflərə çevrilməsi mümkündür?",
    answer: "toLowerCase()",
    options: [
      "toUpperCase()",
      "toLower()",
      "toLowerCase()",
      "convertToLower()",
    ],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək video əlavə edilir?",
    answer: "video",
    options: ["media", "movie", "video", "clip"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin keçid effekti təyin edilir?",
    answer: "transition",
    options: ["transform", "animation", "transition", "effect"],
  },

  {
    question: "HTML-də hansı teq istifadə edilərək audio əlavə edilir?",
    answer: "audio",
    options: ["sound", "music", "voice", "audio"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin kölgəsi təyin edilir?",
    answer: "box-shadow",
    options: ["box-shadow", "shadow", "filter", "opacity"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək arrayın elementlərinin təyin edilən ardıcıllıqla sıralanması mümkündür?",
    answer: "sort()",
    options: ["order()", "filter()", "sort()", "map()"],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək cədvəl sətiri yaradılır?",
    answer: "tr",
    options: ["tr", "table", "td", "th"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin ölçüsünün(vvidth) avtomatik olması təyin edilir?",
    answer: "auto",
    options: ["inherit", "default", "auto", "initial"],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək input sahəsi yaradılır?",
    answer: "input",
    options: ["input", "form", "textbox", "field"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin şəffaflığı təyin edilir?",
    answer: "opacity",
    options: ["opacity", "transparency", "visibility", "alpha"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək bir arrayin elementlərini stringə çevirmək mümkündür?",
    answer: "join()",
    options: ["concat()", "combine()", "merge()", "join()"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək bir stringin müəyyən bir hissəsinin dəyişdirilməsi mümkündür?",
    answer: "replace()",
    options: ["edit()", "replace()", "change()", "transform()"],
  },

  {
    question:
      "CSS-də hansı property istifadə edilərək elementin kənarından boşluq təyin edilir?",
    answer: "margin",
    options: ["margin", "padding", "spacing", "border"],
  },

  {
    question:
      "HTML-də hansı teq istifadə edilərək siyahı daxili element yaradılır?",
    answer: "li",
    options: ["li", "ul", "ol", "list"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin yüksəkliyi təyin edilir?",
    answer: "height",
    options: ["width", "length", "height", "size"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək stringin hərfləri böyük hərflərə çevrilir?",
    answer: "toUpperCase()",
    options: ["toUpperCase()", "toLowerCase()", "toCaps()", "convertToUpper()"],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək mətn italic yazılır?",
    answer: "i",
    options: ["em", "i", "italic", "strong"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin mətn üslubu təyin edilir?",
    answer: "font-style",
    options: ["text-style", "font-weight", "text-weight", "font-style"],
  },

  {
    question:
      "CSS-də hansı property istifadə edilərək elementin şrift rəngi təyin edilir?",
    answer: "color",
    options: ["font-color", "text-color", "color", "foreground-color"],
  },

  {
    question: "HTML-də hansı teq istifadə edilərək horizontal xətt çəkilir?",
    answer: "hr",
    options: ["line", "horizontal", "br", "hr"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin xətt bəzəyi təyin edilir?",
    answer: "text-decoration",
    options: ["text-style", "text-format", "text-decoration", "text-transform"],
  },

  {
    question:
      "HTML-də hansı teq istifadə edilərək meta məlumatlar əlavə edilir?",
    answer: "meta",
    options: ["meta", "head", "link", "script"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin sərhəd xətti genişliyi təyin edilir?",
    answer: "border-width",
    options: ["border-size", "border-width", "border-height", "border-length"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək stringdən boşluqlar silinir?",
    answer: "trim()",
    options: ["cut()", "strip()", "trim()", "remove()"],
  },
  {
    question:
      "HTML-də hansı teq istifadə edilərək java script kodları səhifəyə  əlavə edilir?",
    answer: "script",
    options: ["link", "meta", "script", "style"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin sərhəd xətti stili təyin edilir?",
    answer: "border-style",
    options: ["border-type", "border-format", "border-pattern", "border-style"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək bir arrayin elementlərini tərsinə çevirmək mümkündür?",
    answer: "reverse()",
    options: ["invert()", "flip()", "reverse()", "turn()"],
  },
  {
    question:
      "HTML-də hansı teq istifadə edilərək html kodları arasında css yazmaq mümkündür?",
    answer: "style",
    options: ["css", "link", "style", "script"],
  },
  
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək bir arrayin müəyyən elementlərini return etmək mümkündür?",
    answer: "filter()",
    options: ["filter()", "map()", "reduce()", "find()"],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək əlaqə forması yaradılır?",
    answer: "form",
    options: ["form", "input", "button", "textarea"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin şrift ölçüsü təyin edilir?",
    answer: "font-size",
    options: ["font-size", "text-size", "font-height", "text-height"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək bir stringin uzunluğu əldə edilir?",
    answer: "length",
    options: ["length", "size", "count", "measure"],
  },

  {
    question:
      "CSS-də hansı property istifadə edilərək elementin rəngi təyin edilir?",
    answer: "color",
    options: ["color", "font-color", "text-color", "background-color"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək bir arrayin elementlərinin sayı təyin edilir?",
    answer: "length",
    options: ["length", "size", "count", "measure"],
  },
  {
    question:
      "HTML-də hansı teq istifadə edilərək bir səhifəyə başqa bir səhifə əlavə edilir?",
    answer: "iframe",
    options: ["iframe", "frame", "embed", "object"],
  },

  {
    question:
      "JavaScript-də hansı metod istifadə edilərək stringin müəyyən bir hissəsi dəyişdirilir?",
    answer: "replace()",
    options: ["replace()", "change()", "edit()", "update()"],
  },

  {
    question:
      "CSS-də hansı property istifadə edilərək elementin mətnin yönləndirilməsi təyin edilir?",
    answer: "text-align",
    options: ["text-align", "align", "text-direction", "text-position"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək bir arrayın tərkibini yoxlamaq mümkündür?",
    answer: "includes()",
    options: ["includes()", "contains()", "find()", "has()"],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək başlıq yaradılır?",
    answer: "h1",
    options: ["h1", "header", "title", "heading"],
  },

  {
    question:
      "JavaScript-də hansı metod istifadə edilərək stringin başlanğıcında boşluqlar silinir?",
    answer: "trimStart()",
    options: ["trimStart()", "trim()", "cutStart()", "stripStart()"],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək link yaradılır?",
    answer: "a",
    options: ["a", "link", "href", "anchor"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin yer dəyişməsi təyin edilir?",
    answer: "position",
    options: ["position", "location", "place", "align"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək arrayın hər bir elementi üçün bir funksiya tətbiq edilir?",
    answer: "forEach()",
    options: ["forEach()", "map()", "reduce()", "filter()"],
  },
  {
    question: "HTML-də hansı teq istifadə edilərək siyahı elementi yaradılır?",
    answer: "li",
    options: ["li", "ul", "ol", "list-item"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin xətt hündürlüyü təyin edilir?",
    answer: "line-height",
    options: ["line-height", "height", "font-height", "text-height"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək arrayın sonuna element əlavə edilir?",
    answer: "push()",
    options: ["push()", "pop()", "add()", "append()"],
  },
  {
    question:
      "HTML-də hansı teq istifadə edilərək mətn daxilində bölmə yaradılır?",
    answer: "span",
    options: ["span", "div", "section", "article"],
  },
  {
    question:
      "CSS-də hansı property istifadə edilərək elementin sərhəd radiusu təyin edilir?",
    answer: "border-radius",
    options: ["border-radius", "radius", "border-width", "border-style"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək bir arrayin əvvəlinə element əlavə edilir?",
    answer: "unshift()",
    options: ["unshift()", "push()", "add()", "prepend()"],
  },

  {
    question:
      "CSS-də hansı property istifadə edilərək elementin mətn kölgəsi təyin edilir?",
    answer: "text-shadow",
    options: ["text-shadow", "shadow", "box-shadow", "opacity"],
  },
  {
    question:
      "JavaScript-də hansı metod istifadə edilərək stringin müəyyən bir hissəsi əldə edilir?",
    answer: "substring()",
    options: ["substring()", "slice()", "substr()", "cut()"],
  },
];
