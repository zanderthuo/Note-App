import createDataContext from './CreateDataContext'
export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

const initialState = []

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
                return[...state, action.payload]

        case DELETE_NOTE:
                return state.filter (note => note.id !== action.payload)
    
        default:
            return state;
    }
}

const addNote = dispatch => async(note) => {
    dispatch({type: ADD_NOTE, payload: note})
}

const deleteNote = dispatch => async(id) => {
    dispatch({type: DELETE_NOTE, payload: id})
}

export const {Provider, Context } = createDataContext(
    noteReducer, {addNote, deleteNote},
    []
)