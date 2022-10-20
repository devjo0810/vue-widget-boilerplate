![메인사진](/src/assets/readme/main_img.png)
<h1 align="center">Vue Widget Boilerplate</h1>

## [Live Demo](https://devjo0810.github.io/vue-widget-boilerplate/#)

## 목차

* [Features](#features)
* [Project setup](#project-setup)
* [Widget Menu Snippet](#widget-menu-snippet)

### Features

* Dependencies
  * vue-draggable-resizable@2.3.0
  * @fortawesome/fontawesome-svg-core@6.2.0
  * @fortawesome/free-solid-svg-icons@6.2.0
  * @fortawesome/vue-fontawesome@2.0.8
  * @toast-ui/vue-grid@4.21.4
  * tui-date-picker@4.3.1
  * dayjs@1.11.5
* 위젯 드래그 및 리사이징
* 동적 컴포넌트 로딩

---

## Project setup

### Quick Setup

* Clone this repository
* `npm install`
* `npm run dev`
* Visit [http://localhost:8080/](http://localhost:8080/)


```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

---

## Widget Menu Snippet
```json
"Vue Widget Template": {
  "prefix": "widget",
  "body": [
    "<template>",
    "  <div>",
    "    <WidgetSpinner :id=\"compoId\" />",
    "    <WidgetDialog :id=\"compoId\" />",
    "  </div>",
    "</template>",
    "",
    "<script>",
    "import Base from \"./BaseComponent.vue\";",
    "",
    "export default {",
    "  extends: Base,",
    "  name: \"${1}\",",
    "};",
    "</script>",
    "",
    "<style lang=\"scss\"></style>",
    "",
  ],
  "description": "Vue Widget Template"
}
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
