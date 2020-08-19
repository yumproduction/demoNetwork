import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer";

let store = {
  _state: {
    profilePage: {
      post: [
        { item: 1, text: 'Hi', likes: 15 },
        { item: 2, text: 'How are you?', likes: 20 },
        { item: 3, text: 'Well Im doin just fine', likes: 14 },
        { item: 4, text: 'I lied Im dying inside', likes: 5 }
      ],
      newPostText: ''
    },

    messagePage: {
      dialog: [
        { item: 1, name: 'Mekhri' },
        { item: 2, name: 'Madina' },
        { item: 3, name: 'Iroda' },
        { item: 4, name: 'Alyona' },
        { item: 5, name: 'Katya' },
        { item: 6, name: 'Feruza' }
      ],
      message: [
        { item: 1, text: 'Hey' },
        { item: 2, text: 'How u doin?' },
        { item: 3, text: 'Well Im doin just fine...' },
      ],
      newMessageItem: ''
    },

    sidebar: {
      friends: [
        { friend: 'Andrew' },
        { friend: 'Dima' },
        { friend: 'Sasha' }
      ]
    }
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {

  },

  subscribe(observer) {
    this._callSubscriber = observer; //observer, pattern
  },

  dispatch(action) {
    this._state.messagePage = dialogsReducer(this._state.messagePage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}


window.stote = store;


//store 

export default store;