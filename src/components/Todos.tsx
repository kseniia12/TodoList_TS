import React from 'react'
import PropTypes from 'prop-types'

interface AppTypeProps {
    test: string
    rrr: number
  }
  
 const Todos:React.FC<AppTypeProps> = (props) => {
  return (
    <div>
      {props.test} {props.rrr}
    </div>
  )
}
export default Todos;