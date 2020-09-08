import React from "react"
import { ThemeProvider } from "styled-components"
import { Route, Switch } from "react-router-dom"

import Dashboard from "views/Dashboard"
import EditCard from "components/dashboard/EditCard"

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
          <Route exact path="/card/:id" component={EditCard}></Route>
        </Switch>
      </ThemeProvider>
    </div>
  )
}

export default App
