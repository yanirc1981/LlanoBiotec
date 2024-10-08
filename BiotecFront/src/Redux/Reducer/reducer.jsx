import {
  CLEAN_ACCOUNT_GROUP,
  CLEAN_COST_CENTER_SIIGO,
  CLEAN_CUSTOMERS_SIIGO, //
  CLEAN_CUSTOMER_BY_ID,
  CLEAN_CUSTOMER_DETAIL,
  CLEAN_INVOICE_BY_ID,
  CLEAN_PAYMENTS_TYPE_SIIGO,
  CLEAN_PRODUCTS_SIIGO,
  CLEAN_PRODUCT_BY_ID,
  CLEAN_TAXES,
  CLEAN_TYPE_INVOICE,
  CLEAN_USERS_SIIGO,
  CREATE_CUSTOMER_SIIGO,
  CREATE_PRODUCT_SIIGO,
  CUSTOMER_DETAILS_FAIL,
  CUSTOMER_DETAILS_REQUEST,
  CUSTOMER_DETAILS_SUCCESS,
  DELETE_PRODUCT_BY_ID,
  GET_ACCOUNT_GROUP,
  GET_COST_CENTER_SIIGO,
  GET_CUSTOMERS_SIIGO,
  GET_CUSTOMER_BY_ID,
  GET_INVOICE_BY_ID,
  GET_PAYMENTS_TYPE_SIIGO,
  GET_PRODUCTS_SIIGO,
  GET_PRODUCT_SIIGO_BY_ID,
  GET_TAXES,
  GET_TYPE_INVOICE,
  GET_USERS_SIIGO,
  POST_GENERATE_INVOICE,
  PUT_CUSTOMER_SIIGO,
  PUT_PRODUCT_SIIGO,
  SET_LOADING,
  SET_ERROR,
  DELETE_CUSTOMER_SIIGO,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../ActionsSiigo/actions-types-siigo";

const initialState = {
  customers: [],
  accounts: [],
  taxes: [],
  costCenters: [],
  productId: {},
  products_siigo: [],
  customerId: {},
  typeInvoices: [],
  usersSiigo: [],
  paymentsType: [],
  invoiceId: {},
  customerDetails: {
    customer: {},
    loading: false,
    error: null,
  },
  loading: false,
  error: null,
  email: null,
  token: null,
  isAuthenticated: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CUSTOMER_SIIGO:
      return {
        ...state,
      };
    case GET_CUSTOMERS_SIIGO:
      return {
        ...state,
        customers: action.payload,
      };
    case GET_CUSTOMER_BY_ID:
      return {
        ...state,
        customerId: action.payload,
      };
    case CUSTOMER_DETAILS_REQUEST:
      return {
        ...state,
        customerDetails: {
          ...state.customerDetails,
          loading: true,
          error: null,
        },
      };
    case CUSTOMER_DETAILS_SUCCESS:
      return {
        ...state,
        customerDetails: {
          ...state.customerDetails,
          loading: false,
          customer: action.payload,
        },
      };
    case CUSTOMER_DETAILS_FAIL:
      return {
        ...state,
        customerDetails: {
          ...state.customerDetails,
          loading: false,
          error: action.payload || "An error occurred",
        },
      };
    case DELETE_CUSTOMER_SIIGO:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    case PUT_CUSTOMER_SIIGO:
      return {
        ...state,
        customers: state.customers.map((customer) =>
          customer.id === action.payload.id ? action.payload : customer
        ),
      };
    case GET_ACCOUNT_GROUP:
      return {
        ...state,
        accounts: action.payload,
      };
    case GET_TAXES:
      return {
        ...state,
        taxes: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_COST_CENTER_SIIGO:
      return {
        ...state,
        costCenters: action.payload,
      };
    case GET_USERS_SIIGO:
      return {
        ...state,
        usersSiigo: action.payload,
      };
    case CREATE_PRODUCT_SIIGO:
      return {
        ...state,
      };
    case GET_PRODUCT_SIIGO_BY_ID:
      return {
        ...state,
        productId: action.payload,
      };
    case GET_PRODUCTS_SIIGO:
      return {
        ...state,
        products_siigo: action.payload,
      };
    case PUT_PRODUCT_SIIGO:
      return {
        ...state,
      };
    case DELETE_PRODUCT_BY_ID:
      return {
        ...state,
      };
    case GET_TYPE_INVOICE:
      return {
        ...state,
        typeInvoices: action.payload,
      };
    case GET_PAYMENTS_TYPE_SIIGO:
      return {
        ...state,
        paymentsType: action.payload,
      };
    case GET_INVOICE_BY_ID:
      return {
        ...state,
        invoiceId: action.payload,
      };
    case POST_GENERATE_INVOICE:
      return {
        ...state,
      };
    case CLEAN_CUSTOMERS_SIIGO:
      return {
        ...state,
        customers: [],
      };
    case CLEAN_CUSTOMER_BY_ID:
      return {
        ...state,
        customerId: {},
      };
    case CLEAN_ACCOUNT_GROUP:
      return {
        ...state,
        accounts: [],
      };
    case CLEAN_TAXES:
      return {
        ...state,
        taxes: [],
      };
    case CLEAN_COST_CENTER_SIIGO:
      return {
        ...state,
        costCenters: [],
      };
    case CLEAN_USERS_SIIGO:
      return {
        ...state,
        usersSiigo: [],
      };
    case CLEAN_PRODUCT_BY_ID:
      return {
        ...state,
        productId: {},
      };
    case CLEAN_PRODUCTS_SIIGO:
      return {
        ...state,
        products_siigo: [],
      };
    case CLEAN_TYPE_INVOICE:
      return {
        ...state,
        typeInvoices: [],
      };
    case CLEAN_PAYMENTS_TYPE_SIIGO:
      return {
        ...state,
        paymentsType: [],
      };
    case CLEAN_INVOICE_BY_ID:
      return {
        ...state,
        invoiceId: {},
      };
    case CLEAN_CUSTOMER_DETAIL:
      return {
        ...state,
        customerDetails: {
          customer: {},
          loading: false,
          error: null,
        },
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        email: action.payload.email,
        token: action.payload.token,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        email: null,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
