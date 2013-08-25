# node-unicode-data [![Build status](https://travis-ci.org/mathiasbynens/node-unicode-data.png?branch=master)](https://travis-ci.org/mathiasbynens/node-unicode-data) [![Dependency status](https://gemnasium.com/mathiasbynens/node-unicode-data.png)](https://gemnasium.com/mathiasbynens/node-unicode-data)

JavaScript-compatible Unicode data generator. Arrays of code points, arrays of symbols, and regular expressions for every Unicode version’s categories, scripts, blocks, and properties.

## Usage

`npm run-script download` (re-)downloads the Unicode source files for all the Unicode versions defined in `data/resources.js`, saving them in the `data` folder.

`npm run-script generate` generates the data for categories, scripts, blocks, and properties for all the Unicode versions defined in `data/resources.js`. This may take a few minutes…

To use the actual data, you probably want to use one of the npm modules generated by this script. Separate packages are available for each Unicode version. This allows you to do stuff like:

```js
var codePoints = require('unicode-6.2.0/properties/White_Space/code-points');
var symbols = require('unicode-6.2.0/categories/Lu/symbols');
var regex = require('unicode-6.2.0/blocks/Aegean Numbers/regex');
var egyptian = require('unicode-6.2.0/scripts/Egyptian_Hieroglyphs/code-points');
```

For more information, see the readme for the package you’re interested in. [Here’s a link to the readme for _unicode-6.2.0_.](https://npmjs.org/package/unicode-6.2.0#readme) (Yep, those are auto-generated by this script, too!)

## Testing

`npm test` generates the data for the oldest and latest available Unicode version. This is a good way to test changes to the generator scripts before running `npm run-script generate`.

`npm run-script cover` generates [the code coverage report](http://rawgithub.com/mathiasbynens/node-unicode-data/master/coverage/index.html).

## Author

| [![twitter/mathias](http://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](http://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](http://mathiasbynens.be/) |

## License

This module is available under the [MIT](http://mths.be/mit) license.
