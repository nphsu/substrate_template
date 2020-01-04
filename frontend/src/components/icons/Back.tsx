import * as React from 'react'
// import { GetProps } from '_helpers'
import SvgIcon from '@material-ui/core/SvgIcon'

type GetProps<T extends React.ComponentType<any>> = T extends React.StatelessComponent<infer SP>
    ? SP
    : T extends React.ComponentClass<infer CP>
    ? CP
    : never

const Back = (props: GetProps<typeof SvgIcon>) => {
    return (
        <SvgIcon {...props}></SvgIcon>
    )
}
export { Back }