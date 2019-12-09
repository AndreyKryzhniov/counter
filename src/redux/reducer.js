const INCREMENT_CURRENT = 'INCREMENT_CURRENT'
const SET_RESET_CURRENT_CURRENT = 'SET_RESET_CURRENT_CURRENT'
const CHANGE_MAXVALUE = 'CHANGE_MAXVALUE'
const CHANGE_STARTVALUE = 'CHANGE_STARTVALUE'
const CHANGE_DISABLED_BUTTON = 'CHANGE_DISABLED_BUTTON'

const initialState = {
    disabled: true,
    currentValue: 0,
    maxValue: 10,
    startValue: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_CURRENT: {
            return {
                ...state, currentValue: state.currentValue+1
            }
        }
        case SET_RESET_CURRENT_CURRENT: {
            return {
                ...state, currentValue: state.startValue, disabled: true
            }
        }
        case CHANGE_MAXVALUE: {
            let currentValue = '';
            let disabled = false;
            let maxValue = 0;
            if (action.value <= state.startValue) {
                currentValue = 'error';
                disabled = true;
                maxValue = Number(action.value)
            } else {
                currentValue = 'norm';
                disabled = false;
                maxValue = Number(action.value)
            }
            return {
                ...state,
                currentValue: currentValue,
                disabled: disabled,
                maxValue: maxValue
            }
        }
        case CHANGE_STARTVALUE: {
            let currentValue = '';
            let disabled = false;
            let startValue = 0;
            if (action.value < 0) {
                currentValue = 'error';
                disabled = true;
                startValue = action.value
            } else if (state.maxValue <= action.value) {
                currentValue = 'error';
                disabled = true;
                startValue = action.value
            } else {
                currentValue = 'norm';
                disabled = false;
                startValue = Number(action.value)
            }
            return {
                ...state,
                currentValue: currentValue,
                disabled: disabled,
                startValue: startValue
            }
        }
        case CHANGE_DISABLED_BUTTON: {
            return {
                ...state, disabled: state.disabled ? false : true
            }
        }
    }
    return state
}

export const incrementCurrentAC = () => {
    return {type: 'INCREMENT_CURRENT'}
}

export const changeStartValueAC = (value) => {
    return {type: 'CHANGE_STARTVALUE', value}
}

export const changeMaxValueAC = (value) => {
    return {type: 'CHANGE_MAXVALUE', value}
}

export const setAndResetCurrentValueAC = () => {
    return {type: 'SET_RESET_CURRENT_CURRENT'}
}

export default reducer