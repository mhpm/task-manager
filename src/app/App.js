import React from "react"
import { ThemeProvider } from "styled-components"
import { Route, Switch } from "react-router-dom"

import Dashboard from "views/Dashboard"
import EditCard from "components/dashboard/EditCard"
import Header from "components/layout/Header"

const theme = {
  low: "gray",
  normal: "orange",
  high: "tomato",
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header title="Task Manager" />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/card/:id" component={EditCard}></Route>
        </Switch>
      </ThemeProvider>
    </div>
  )
}

export default App
