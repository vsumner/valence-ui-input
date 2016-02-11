# vui-input
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains [Sass mixins](http://sass-lang.com/) and CSS which can be used to style different types of HTML input elements (text, checkboxes, radios, selects and textareas).

For further information on this component and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`vui-input` can be installed from [Bower][bower-url]:
```shell
bower install vui-input
```

Or alternatively from [NPM][npm-url]:
```shell
npm install vui-input
```

## Usage

To style each type of input, first include its `SCSS` file from either `bower_components` or `node_modules`, depending on where it was installed from. Then, apply the mixin using a selector of your choosing -- an element or class selector is most common.

### Text Inputs:

![screenshot of text input](/screenshots/text.png?raw=true)

```scss
@import 'bower_components/vui-input/input.scss';
// or...
@import "node_modules/vui-input/input.scss";

input[type="text"],
input[type="password"],
input[type="email"],
input[type="url"] {
	@include vui-input();
}
```

### Checkboxes:

![screenshot of checkboxes](/screenshots/checkbox.png?raw=true)

```html
<label class="checkbox-label">
	<input type="checkbox" />
	Apples are great!
</label>
```

```scss
@import 'bower_components/vui-input/input-checkbox.scss';
// or...
@import "node_modules/vui-input/input-checkbox.scss";

input[type="checkbox"] {
	@include vui-input-checkbox();
}

.checkbox-label {
	@include vui-input-checkbox-label();
}
```

Note: the `vui-input-checkbox-label` mixin used above helps control the alignment of the label text in situations where it might wrap onto multiple lines.

### Radios:

![screenshot of radio buttons](/screenshots/radio.png?raw=true)

```html
<label class="radio-label">
	<input type="radio" />
	Apples are my favorite!
</label>
```

```scss
@import 'bower_components/vui-input/input-radio.scss';
// or...
@import "node_modules/vui-input/input-radio.scss";

input[type="radio"] {
	@include vui-input-radio();
}

.radio-label {
	@include vui-input-radio-label();
}
```

Note: the `vui-input-radio-label` mixin used above helps control the alignment of the label text in situations where it might wrap onto multiple lines.

### Selects:

![screenshot of select inputs](/screenshots/select.png?raw=true)

```html
<select>
	<option>Option 1</option>
	<option>Option 2</option>
</select>
```

```scss
@import 'bower_components/vui-input/select.scss';
// or...
@import "node_modules/vui-input/select.scss";

select {
	@include vui-input-select();
}
```

### Textareas:

![screenshot of textareas](/screenshots/textarea.png?raw=true)

```html
<textarea></textarea>
```

```scss
@import 'bower_components/vui-input/textarea.scss';
// or...
@import "node_modules/vui-input/textarea.scss";

textarea {
	@include vui-input-textarea();
}
```

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-input
[bower-image]: https://img.shields.io/bower/v/vui-input.svg
[npm-url]: https://npmjs.org/package/vui-input
[npm-image]: https://img.shields.io/npm/v/vui-input.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-input
[ci-image]: https://img.shields.io/travis-ci/Brightspace/valence-ui-input.svg
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-input
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-input.svg
