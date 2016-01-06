# vui-input
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains Sass mixins and CSS that can be used to style inputs.

## Installation

Install from NPM:
```shell
npm install vui-input
```

Install from Bower:
```shell
bower install vui-input
```

## Usage

**Text:**

```scss
@import 'bower_components/vui-input/input.scss'; // or...

@import "node_modules/vui-input/input.scss";

.app {
	input {
		@include vui-input;
	}
}
```

**Checkbox:**

```scss
@import 'bower_components/vui-input/input-checkbox.scss'; // or...

@import "node_modules/vui-input/input-checkbox.scss";

.app {
	input[type="checkbox"] {
		@include vui-input-checkbox;
	}
}
```

**Radio:**

```scss
@import 'bower_components/vui-input/input-radio.scss'; // or...

@import "node_modules/vui-input/input-radio.scss";

.app {
	input[type="radio"] {
		@include vui-input-radio;
	}
}
```

**Select:**

```scss
@import 'bower_components/vui-input/select.scss'; // or...

@import "node_modules/vui-input/select.scss";

.app {
	select {
		@include vui-input-select;
	}
}
```

**Textarea:**

```scss
@import 'bower_components/vui-input/textarea.scss'; // or...

@import "node_modules/vui-input/textarea.scss";

.app {
	textarea {
		@include vui-input-textarea;
	}
}
```

For further information on this component and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

#### Coding styles
See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-input
[bower-image]: https://img.shields.io/bower/v/vui-input.svg
[npm-url]: https://npmjs.org/package/vui-input
[npm-image]: https://img.shields.io/npm/v/vui-input.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-input
[ci-image]: https://img.shields.io/travis-ci/Brightspace/valence-ui-input.svg
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-input
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-input.svg
