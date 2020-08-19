let initialState = {
    dialog: [
        { id: 1, name: 'Mekhri' },
        { id: 2, name: 'Madina' },
        { id: 3, name: 'Iroda' },
        { id: 4, name: 'Alyona' },
        { id: 5, name: 'Katya' },
        { id: 6, name: 'Feruza' }
    ],
    message: [
        { id: 1, text: 'Hey' },
        { id: 2, text: 'How u doin?' },
        { id: 3, text: 'Well Im doin just fine...' },
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            return {
                ...state,
                message: [...state.message, {
                    id: 4,
                    text: action.newMessageBody
                }],
            }
        default:
            return state;
    }
}

export const sendMessage = (newMessageBody) => ({ type: 'SEND-MESSAGE', newMessageBody });


export default dialogsReducer;