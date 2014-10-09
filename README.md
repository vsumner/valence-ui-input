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
using the `#vui.input-*` mixins:

```css
input {
  #vui.input();
}
input[type="text"] {
  #vui.input-text();
}
input[type="password"] {
  #vui.input-password();
}
input[type="email"] {
  #vui.input-email();
}
input[type="url"] {
  #vui.input-url();
}
textarea {
  #vui.input-textarea();
}
select {
  #vui.input-select();
}
```

Here's what your corresponding HTML would look like:
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
