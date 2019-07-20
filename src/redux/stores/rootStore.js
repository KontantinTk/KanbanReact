import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const rootStore = createStore(rootReducer);

rootStore.subscribe(() => {
    console.log('Store updated')
})

export default rootStore;