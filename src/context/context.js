import React from 'react';

const ContextData =React.createContext()
const ContextProvider=ContextData.Provider
const ContextConsumer=ContextData.Consumer
export default ContextData;
export {ContextProvider,ContextConsumer}