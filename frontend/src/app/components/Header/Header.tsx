import * as React from 'react'
import { withRouter } from 'react-router-dom'

import { Back } from '../../../components/icons'
import { Grid, IconButton, Typography } from '../../../components'

const HeaderComponent = () => {
    return (
        <div>
            <Grid container alignItems="center" spacing={2}>
                <Grid item>
                    <Back />
                </Grid>
            </Grid>
        </div>
    )
}
export const Header = withRouter(HeaderComponent)