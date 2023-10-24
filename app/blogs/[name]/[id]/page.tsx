import React from 'react'

type Props = {
  params: {
    name: string
    id: string
  }
}

const Page = ({ params }: Props) => {
  return (
    <div>params {params.name} {params.id}</div>
  )
}

export default Page