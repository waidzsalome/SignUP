import React from 'react'
import { Redirect } from 'react-router-dom'
import { Router, Route, Switch } from 'dva/router'
import createBrowserHistory from 'history/createBrowserHistory'
import Home from './routes/Home'
import Layout from './components/Layout/index'
import NetCmp from './routes/Net/netCompetition'
import success from './routes/Message/message'

function RouterConfig ({history}) {
  return (
    <Router history={createBrowserHistory()}>
    <Switch>
      <Route path='/success' component={success} />
      <Layout>
        <Switch>
          <Redirect exact from='/' to='/home' />
          <Route path='/home' component={Home} />
          <Route path='/net' component={NetCmp} />
        </Switch>
      </Layout>
    </Switch>
    </Router>
  )
}

export default RouterConfig
