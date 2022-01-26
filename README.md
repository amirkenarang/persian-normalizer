
A Package for normalizing text and number to persian

## Table of contents

- [Table of contents](#table-of-contents)
  - [Installation](#installation)
- [Usage](#usage)
- [Change Log](#change-log)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

### Installation

```bash
npm install --save persian-normalizer
```

## Usage

The simplest way to check convert english or arabic text and number to persian. Also, it create a search field for persian search in databases:

Import in `Typescipt`:

```ts
import { normalizePersianTex} from "persian-normalizer";

```

Import in `Javascript` files:

```js
const { normalizePersianText } = require("persian-normalizer");
```

**Example usag:**

```ts
import {
  normalizePersianTex`t,
  extractNumbers,
  persianToEnglishNumber,
  removeSpaces,
  createSearchField,
  isEnglish,
} from "persian-normalizer";

const result1 = normalizePersianText(" علیـ ٌِرضآ امئر ٌ");
const result2 = extractNumbers("a٠١۳٣٤٥٦٧٨٩");
const result3 = persianToEnglishNumber("a٠١۳٣٤٥٦٧٨٩");
const result4 = removeSpaces("امیر ali");
const result5 = createSearchField("امیر علءئ شهر اّصفهان");
const result6 = isEnglish("amir امیر");

```

Results are like this:

```ts
// result1 = علیرضآامیر
// result2 = 0133456789
// result3 = a011473456789
// result4 = امیرali
// result5 = امیرعلءیشهراّصفهان
// result6 = false
```

## Change Log

See [Changelog](CHANGELOG.md) for more information.

## Contributing

Contributions welcome! See [Contributing](CONTRIBUTING.md).

## Author

**Amir Kenarang**
Email: amir.kenarang@gmail.com
Website: www.amirkenarang.me

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
