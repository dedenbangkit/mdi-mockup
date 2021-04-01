import faker from "faker";
import moment from "moment";

console.log(faker);

const newArray = (num = 40) => {
  return Array.from({ length: num }, () => Math.floor(Math.random() * num));
};
const name = faker.name;
const internet = faker.internet;
const dt = (dateType) => {
  switch (dateType) {
    case "past":
      return moment(faker.date.past(0)).format("L");
    default:
      return moment(faker.date.future(1)).format("L");
  }
};
const commerce = faker.commerce;
const address = faker.address;
const lorem = faker.lorem;
const company = faker.company;
const finance = faker.finance;

export { name, internet, dt, commerce, address, lorem, company, finance };

export default newArray;
