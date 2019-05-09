/* eslint-disable consistent-return */
const axios = require('axios');

module.exports = async (currency, rateId) => {
  try {
    const url = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=${rateId}`;
    const ratesData = await axios.get(url);
    const ratesArray = ratesData.data;
    console.log('Rates from PrivatBank API were successfully received');

    let result;

    ratesArray.forEach((element) => {
      if (element.ccy === currency) {
        result = element;
        return result;
      }
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};
