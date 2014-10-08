#VUI Inputs [![Build Status](https://travis-ci.org/Desire2Learn-Valence/valence-ui-input.svg?branch=master)](https://travis-ci.org/Desire2Learn-Valence/valence-ui-input)

This library contains a series of LESS mixins and CSS which can be used to
style form inputs.

##Usage

Install as a development dependency:

```shell
npm install --save-dev vui-input
```

##LESS Mixins

To make use of the LESS mixins, first import the library into your LESS file:

```css
@import 'node_modules/vui-input/input'
```

Styles can be applied to `<input>`, `<textarea>` and `<select>` elements
using the `vui-input` mixin:

```css
input[type="text"],
input[type="password"],
input[type="email"],
input[type="url"],
textarea,
select {
  .vui-input();
}
```

```html
<input type="text" />
<input type="password" />
<input type="email" />
<input type="url" />
<textarea></textarea>
<select></select>
```

##CSS

If you'd prefer to use CSS, bundle up the provided `input.css` file with
your application's CSS. Then apply the `vui-input` CSS class to elements:

```html
<input class="vui-input" type="text" />
<input class="vui-input" type="password" />
<input class="vui-input" type="email" />
<input class="vui-input" type="url" />
<textarea class="vui-input"></textarea>
<select class="vui-input"></select>
```

##Selects

Styles can be applied to `<select>` elements by adding the .vui-input class.

```css
@import 'node_modules/vui-button/dist/label'

.myFieldRow > label {
	.vui-label();
}
```

```html
<div class="myFieldRow">
    <label for="name">Name</label>
    <input type="text" id="name" />
</div>
```

Or, with CSS instead using the `vui-label` class:

```html
<div class="vui-field-row">
    <label class="vui-label" for="name">Name</label>
    <input type="text" id="name" />
</div>
```

##Building

After grabbing the source, [Gulp](http://gulpjs.com/) should be installed globally
using the `npm install -g gulp` command. Then install package dependencies:

```shell
npm install
```

To build, run:

```shell
gulp
```

To test using Karma:

```shell
gulp test
```
