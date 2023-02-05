import { useAuth } from "./components/Login/AuthContext";

export const initialState = {
    savedNews: [],
    currentUser: useAuth
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_SAVED':
            return{ 
                ...state,
                savedNews: [...state.savedNews],
            };

        case 'CLEAR_FROM_SAVED':
            return {
                ...state,
                savedNews: []
            };
        
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (saved) => saved.id === action.id
            );

            let newSaved = [...state.savedNews];
            
            if(index >= 0)
                newSaved.splice(index, 1);
            else
                console.warn(`Can't remove the news with id: ${action.id} from the Saved News`);

            return {
                ...state,
                user: action.user
            };

        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }

        default:
            return state;
    }
}

export default reducer;