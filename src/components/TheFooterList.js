import React from 'react'
import FooterListItem from './FooterListItem'

function TheFooterList(list) {
  return (
    <ul>
      {['Cookies', 'Privacy'].map(label =>
        <FooterListItem key={label}>
          {label}
        </FooterListItem>,
      )}
    </ul>
  )
}

export default TheFooterList