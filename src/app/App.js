import React from "react"
import { ThemeProvider } from "styled-components"
import { Route, Switch, Redirect } from "react-router-dom"

import Dashboard from "views/Dashboard"

const theme = {
  low: "gray",
  normal: "orange",
  high: "tomato",
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </ThemeProvider>
    </div>
  )
}

export default App
