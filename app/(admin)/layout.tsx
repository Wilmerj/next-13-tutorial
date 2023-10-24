import React from 'react'

type Props = {
    children: React.ReactNode
}

const Page = ({ children }: Props) => {
  return (
    <div>
        aca va el heahder y este es el layout
        {children}
    </div>
  )
}

export default Page