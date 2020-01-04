import * as React from 'react'

import { RowsLayout } from '../../../components'
import { Header } from '../Header/Header'

interface IProps {
    title: React.ReactNode;
    actions?: React.ReactNode[];
    backRoutePath?: string;
    additionalHeaderContent?: React.ReactNode;
    showBalances?: boolean;
    showEra?: boolean;
    hidePageNavigation?: boolean;
    children: React.ReactNode;
}
type GetProps<T extends React.ComponentType<any>> = T extends React.StatelessComponent<infer SP>
    ? SP
    : T extends React.ComponentClass<infer CP>
    ? CP
    : never

const BaseLayout = (props: IProps) => {
    const { children, backRoutePath, title, additionalHeaderContent, hidePageNavigation } = props
    const headerProps: GetProps<typeof Header> = {
        backRoutePath,
        title,
        additionalContent: additionalHeaderContent,
    }

    return (
        <RowsLayout spacing={4}>
            <RowsLayout.ContentBlock>
                <Header />
            </RowsLayout.ContentBlock>
            <RowsLayout.ContentBlock fillIn>{children}</RowsLayout.ContentBlock>
        </RowsLayout>

    )
}

export { BaseLayout }