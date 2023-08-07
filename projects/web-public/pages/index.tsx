import {sum} from '@repo/utils/math/sum'
import {Text} from '@repo/design-system/components/Text'
import React from 'react'
export default function Home(){
  return(
    <main>
      <Text tag='h1'>opa</Text>
      <p>importando modulo local de @repo/utils/math/sum, soma de 2 + 2: {sum(2,2)}</p>
    </main>
  )
}
