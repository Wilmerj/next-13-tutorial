import React from 'react'

type Props = {
  params: {
    name: string
    id: string
  }
}

const Page = ({ params }: Props) => {
  console.info(params)
  return (
    <div>params on array</div>
  )
}

export default Page