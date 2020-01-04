import * as React from 'react'
import { Switch, Route, Redirect} from 'react-router'
import { BaseLayout } from './components/BaseLayout/BaseLayout'
import { TopPage } from './pages'

export const App = () => {
    return (
        <BaseLayout title="SUBSTRATE TEMPLATE">
            <Switch>
                <Route path="/" component={TopPage}/>
            </Switch>
        </BaseLayout>
    )
}
