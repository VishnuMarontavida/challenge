export enum PizzaActionTypes {
    Add = 'Add',
    Cancel = 'Cancel',
    View = 'View',
    Pizza_Order_List = 'Pizza Order List',
    LOAD_ORDERS='[order page] Load Pizza Orders',
    LOAD_ORDERS_SUCCESS='[order page] Load Pizza Order List Success',
    ADD_ORDER_ACTION = '[order page] add order',
    ADD_ORDER_SUCCESS = '[order page] add order success',
    ADD_ORDER_FAIL = '[order page] add order failed',
    REMOVE_ORDER_ACTION = '[order page] remove order',
    REMOVE_ORDER_SUCCESS = '[order page] remove order success',
    REMOVE_ORDER_FAIL = '[order page] remove order failed',
    REMOVE_MESSAGE = 'remove message',
    
    Login = 'Login',
    LOGIN_START = '[auth page] login start',
    LOGIN_SUCCESS = '[auth page] login Success',
    LOGIN_FAIL = '[auth page] login Fail',
    LOGOUT_ACTION = '[auth page] logout'
}