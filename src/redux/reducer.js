import { v4 as uuidv4 } from "uuid";

const initialState = {
  transectionHistory: [],
  clint: [
    {
      name: "Akshay",
      email: "akshay@gmail.com",
      current_balance: 1000,
      id: uuidv4(),
    },
    {
      name: "Saksham",
      email: "saksham@gmail.com",
      current_balance: 1700,
      id: uuidv4(),
    },
    {
      name: "Tinu",
      email: "tinu@gmail.com",
      current_balance: 8000,
      id: uuidv4(),
    },
    {
      name: "Akshit",
      email: "akshit@gmail.com",
      current_balance: 900,
      id: uuidv4(),
    },
    {
      name: "Vishal",
      email: "vishal@gmail.com",
      current_balance: 1090,
      id: uuidv4(),
    },
    {
      name: "Sovitra",
      email: "sovitra@gmail.com",
      current_balance: 1100,
      id: uuidv4(),
    },
    {
      name: "Arun",
      email: "arun@gmail.com",
      current_balance: 1005,
      id: uuidv4(),
    },
    {
      name: "Shubham",
      email: "shubham@gmail.com",
      current_balance: 1070,
      id: uuidv4(),
    },
    {
      name: "Sumit",
      email: "sumit@gmail.com",
      current_balance: 1020,
      id: uuidv4(),
    },
    {
      name: "Aakash",
      email: "aakash@gmail.com",
      current_balance: 1300,
      id: uuidv4(),
    },
  ],
};
const dumyData = (state = initialState, action) => {
  switch (action.type) {
    case "TRANSFER-MONEY":
      return {
        ...state,
        transferMoney: action.payload,
      };
    case "TRANSFER-THE-MONEY":
      let arr1 = state?.clint?.filter((val) => {
        return val.name === action.payload.transferCustomer;
      });
      let arr2 = state?.clint?.filter((val) => {
        return val.name === action.payload.tranferTo;
      });
      let newArray = [...arr1, arr2];
      let newClints = state?.clint.map((items) => {
        if (items.name === action.payload.tranferTo) {
          if (action.payload.amount > newArray[0].current_balance) {
            return {
              ...items,
            };
          } else {
            return {
              ...items,
              current_balance:
                items.current_balance + Number(action.payload.amount),
            };
          }
        } else if (items.name === action.payload.transferCustomer) {
          if (action.payload.amount > newArray[0].current_balance) {
            alert("balance is lower then amount");
            return {
              ...items,
            };
          } else {
            return {
              ...items,
              current_balance: items.current_balance - action.payload.amount,
            };
          }
        } else {
          return items;
        }
      });
      if (newArray[0].current_balance < action.payload.amount) {
        return {
          ...state,
          clint: newClints,
          transectionHistory: [...state.transectionHistory],
        };
      } else {
        let date = new Date().toDateString();
        let time = new Date().toLocaleTimeString();
        return {
          ...state,
          clint: newClints,
          transectionHistory: [
            ...state.transectionHistory,
            { ...action.payload, history: `${date}/${time}` },
          ],
        };
      }

    default:
      return state;
  }
};
export default dumyData;
