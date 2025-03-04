import { createContext, useReducer, useContext, useEffect, ReactNode, Dispatch } from 'react';
import { schoolCharacterService } from '@school/services/CharacterService';
import { schoolHistoryService } from '@school/services/HistoryService';
import { SchoolCoreState } from './types';

const initialState: SchoolCoreState = {
  character: {
    academics: 0,
  },
  history: [],
  event: null,
};

type Action =
  | { type: 'SET_CHARACTER'; payload: SchoolCoreState['character'] }
  | { type: 'SET_HISTORY'; payload: SchoolCoreState['history'] }
  | { type: 'SET_EVENT'; payload: SchoolCoreState['event'] };

const schoolCoreReducer = (state: SchoolCoreState, action: Action): SchoolCoreState => {
  switch (action.type) {
    case 'SET_CHARACTER':
      return { ...state, character: action.payload };
    case 'SET_HISTORY':
      return { ...state, history: action.payload };
    case 'SET_EVENT':
      return { ...state, event: action.payload };
    default:
      return state;
  }
};

const SchoolCoreContext = createContext<{ state: SchoolCoreState; dispatch: Dispatch<Action> }>({
  state: initialState,
  dispatch: () => {},
});

export const SchoolCoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(schoolCoreReducer, initialState);

  useEffect(() => {
    const init = async () => {
      try {
        const character = await schoolCharacterService.fetchCharacter();
        dispatch({ type: 'SET_CHARACTER', payload: character });

        const history = await schoolHistoryService.fetchHistory();
        dispatch({ type: 'SET_HISTORY', payload: history });
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  return (
    <SchoolCoreContext.Provider value={{ state, dispatch }}>{children}</SchoolCoreContext.Provider>
  );
};

export const useSchoolCoreContext = () => {
  const context = useContext(SchoolCoreContext);
  if (!context) throw new Error('useSchoolCoreContext must be used within a SchoolCoreProvider');
  return context;
};
