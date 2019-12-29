import * as React from 'react'
import Grid from '@material-ui/core/Grid/Grid'
import { makeStyles } from '@material-ui/core'

interface IProps {
    children?: React.ReactNode;
    spacing?: GetProps<typeof Grid>['spacing'];
    className?: string;
}

type GetProps<T extends React.ComponentType<any>> = T extends React.StatelessComponent<infer SP>
    ? SP
    : T extends React.ComponentClass<infer CP>
    ? CP
    : never

const useContentStyles = makeStyles(
    {
        root: {
            width: `100%`,
        },
    },
    { name: 'ContentBlock' }
)

function attachStaticFields<T extends {}, I extends Record<string, any>>(
    target: T,
    staticFields: I,
): T & I {
    const result: T & I = target as T & I;

    Object.keys(staticFields).forEach((key: keyof I) => {
        (result as I)[key] = staticFields[key];
    });

    return result;
}

const RowsLayoutComponent = ({ children, spacing, className }: IProps) => {
    return (
        <div>
            <Grid container direction="column" spacing={spacing}>
                {children}
            </Grid>
        </div>
    )
}

const ContentBlock = (props: { children: React.ReactNode; fillIn?: boolean }) => {
    const { fillIn, children } = props
    const classes = useContentStyles()
    return (
        <Grid item xs={fillIn} className={classes.root}>
            {children}
        </Grid>
    )
}
export const RowsLayout = attachStaticFields(RowsLayoutComponent, { ContentBlock })