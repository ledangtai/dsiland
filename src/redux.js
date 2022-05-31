const reduxStore = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware)
)