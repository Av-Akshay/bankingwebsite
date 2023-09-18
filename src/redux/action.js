export const transferMoney = (data) => {
  return {
    type: "TRANSFER-MONEY",
    payload: data,
  };
};

export const tranferTheMoney = (data) => {
  return {
    type: "TRANSFER-THE-MONEY",
    payload: data,
  };
};
