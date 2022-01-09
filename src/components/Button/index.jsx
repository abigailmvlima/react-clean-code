import {memo} from 'react'

import * as ST from './styles'

const Button = () => {
   return (
       <ST.Container>
           <ST.Button>Enviar</ST.Button>
       </ST.Container>
          ) 
}

export default memo(Button)