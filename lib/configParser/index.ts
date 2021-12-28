export function parseObject(obj = {} as Record<string, unknown>) {
  return Object.entries(obj).map(([key, value]) => {
    const [keyword, comments] = key.split(' ');
    const returnItem = {
      keyword,
      value,
      describe: comments,
      type: typeCheck(value),
      optional: false,
    };

    if (/^\[.*\]$/.test(keyword)) {
      returnItem.optional = true;
      returnItem.keyword = keyword.substring(1, keyword.length - 1);
    }
    return returnItem;
  });
}

function typeCheck(item: unknown) {
  const itemType = Object.prototype.toString.call(item);
  return itemType
    .substring(1, itemType.length - 1)
    .split(' ')[1]
    .toLowerCase();
}
