import { createSlice, nanoid } from '@reduxjs/toolkit';
import {
  calculateMonthlyPrice,
  calculateYearlyPrice,
} from '../../utils/utilities';

const plans = [
  {
    id: nanoid(),
    category: 'Arcade',
    price: 9,
    selected: false,
    img: '/src/assets/images/icon-arcade.svg',
  },
  {
    id: nanoid(),
    category: 'Advanced',
    price: 12,
    selected: false,
    img: '/src/assets/images/icon-advanced.svg',
  },
  {
    id: nanoid(),
    category: 'Pro',
    price: 15,
    selected: false,
    img: '/src/assets/images/icon-pro.svg',
  },
];

const addOns = [
  {
    id: nanoid(),
    selected: false,
    service: 'Online service',
    price: 1,
    description: 'Access to multiplayer games',
  },
  {
    id: nanoid(),
    selected: false,
    service: 'Larger storage',
    price: 2,
    description: 'Extra 1TB of cloud save',
  },
  {
    id: nanoid(),
    selected: false,
    service: 'Customizable profile',
    price: 2,
    description: 'Custom theme on your profile',
  },
];

const initialState = {
  payment: false,
  plans,
  addOns,
};

const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addPlan: {
      reducer(state, action) {
        const updatedPlans = state.plans.map((plan) => {
          if (plan.id === action.payload || plan.selected === true) {
            return {
              ...plan,
              selected: !plan.selected,
            };
          }
          return plan;
        });

        state.plans = updatedPlans;
      },
    },
    addPayment: {
      reducer(state) {
        state.payment = !state.payment;

        if (state.payment === false) {
          const updatedPlans = calculateMonthlyPrice(state.plans);
          const updatedAddons = calculateMonthlyPrice(state.addOns);

          state.addOns = updatedAddons;
          state.plans = updatedPlans;
        } else {
          const updatedPlans = calculateYearlyPrice(state.plans);
          const updatedAddons = calculateYearlyPrice(state.addOns);

          state.addOns = updatedAddons;
          state.plans = updatedPlans;
        }
      },
    },
    addAddOns: {
      reducer(state, action) {
        const updatedAddOns = state.addOns.map((addOn) => {
          if (addOn.id === action.payload.id) {
            return {
              ...addOn,
              selected: action.payload.selected,
            };
          }
          return addOn;
        });

        state.addOns = updatedAddOns;
      },
      prepare(id, selected) {
        return {
          payload: {
            id,
            selected,
          },
        };
      },
    },
  },
});

export const selectAllPlans = (state) => state.forms.plans;
export const selectPayment = (state) => state.forms.payment;
export const selectAllAddOns = (state) => state.forms.addOns;

export const { addPlan, addPayment, addAddOns } = formsSlice.actions;

export default formsSlice.reducer;
