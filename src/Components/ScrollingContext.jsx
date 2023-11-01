
import { createContext, useContext } from 'react';

const ScrollingContext = createContext();

export const useScrollingContext = () => useContext(ScrollingContext);

export default ScrollingContext;

