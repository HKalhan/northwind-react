import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            <Button onClick={signIn} positive>Giriş Yap</Button>
            <Button negative style={{marginLeft:"0.5em"}} >Kayıt Ol</Button>
            </Menu.Item>
        </div>
    )
}
