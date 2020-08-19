const { default: profileReducer, addPost, deletePost } = require("./ProfileReducer");
import React from 'react';


it('lenght of posts incremented', () => {
    let action = addPost('it-kamasutra');

    let initialState = {
        post: [
            { item: 1, text: 'Hi', likes: 15 },
            { item: 2, text: 'How are you?', likes: 20 },
            { item: 3, text: 'Well Im doin just fine', likes: 14 },
            { item: 4, text: 'I lied Im dying inside', likes: 5 }
        ],
    }
    let newState = profileReducer(initialState, action);

    expect(newState.post.length).toBe(5);
    expect(newState.post[4].text).toBe('it-kamasutra');
});