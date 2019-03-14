import React from 'react'
import styled from 'styled-components'

const PcBuildTitle = styled.h2`
  margin: 0;
  color: #330086;
  font-weight: normal;
  font-size: 20px;
`

export default function CardTitle(props) {
  return <PcBuildTitle> {props.title} </PcBuildTitle>
}
