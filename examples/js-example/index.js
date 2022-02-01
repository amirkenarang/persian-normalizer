const {
  normalizePersianText,
  extractNumbers,
  persianToEnglishNumber,
  removeSpaces,
  createSearchField,
  isEnglish,
} = require("persian-normalizer");

const result1 = normalizePersianText(" علیـ ٌِرضآ امئر ٌ");
const result2 = extractNumbers("a٠١۳٣٤٥٦٧٨٩");
const result3 = persianToEnglishNumber("a٠١۳٣٤٥٦٧٨٩");
const result4 = removeSpaces("امیر ali");
const result5 = createSearchField("امیر علئ شهر اصفهان");
const result6 = isEnglish("amir امیر");

console.log(result1); // علیرضآامیر
console.log(result2); // 0133456789
console.log(result3); // a011473456789
console.log(result4); // امیرali
console.log(result5); // امیرعلیشهراّصفهان
console.log(result6); // false
