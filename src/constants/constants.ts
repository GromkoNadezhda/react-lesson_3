const DATA_BODY = {
  threeDigit: [123, 44, 5],
  twoDigit: [456, 19, 1],
  unambiguous: [789, 78, 9],
};

export const DATA_BODY_LiST = Object.values(DATA_BODY);

const DATA_HEADER = {
  threeDigit: { label: "Three-digit", sort: "default" },
  twoDigit: { label: "Two-digit", sort: "default" },
  unambiguous: { label: "Unambiguous", sort: "default" },
};

export const DATA_HEADER_LIST = Object.values(DATA_HEADER);
