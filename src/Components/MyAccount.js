import React from 'react'
import BrandNav from './BrandNav'
import Header from './Header'

function MyAccount({match}) {
    return (
        <div>
            <Header pathName={match.path} />
            <BrandNav pathName={match.path} />
        </div>
    )
}

export default MyAccount
