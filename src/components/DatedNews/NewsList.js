import React from 'react'
import { Table, TableBody, TableD, TableH, TableHead, TableRow } from './listStyles'

const NewsList = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableH>
            <h3>Date</h3>
          </TableH>
          <TableH>
            <h3>Headline</h3>
          </TableH>
          <TableH>
            <h3>Published By</h3>
          </TableH>
          <TableH>
            <h3>Author</h3>
          </TableH>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableD>09/11/01</TableD>
          <TableD>Black people died due to hunger</TableD>
          <TableD>Twitter</TableD>
          <TableD>Elon Musk</TableD>
        </TableRow>
        <TableRow>
          <TableD>09/11/01</TableD>
          <TableD>Black people died due to hunger</TableD>
          <TableD>Twitter</TableD>
          <TableD>Elon Musk</TableD>
        </TableRow>
        <TableRow>
          <TableD>09/11/01</TableD>
          <TableD>Black people died due to hunger</TableD>
          <TableD>Twitter</TableD>
          <TableD>Elon Musk</TableD>
        </TableRow>
        <TableRow>
          <TableD>09/11/01</TableD>
          <TableD>Black people died due to hunger</TableD>
          <TableD>Twitter</TableD>
          <TableD>Elon Musk</TableD>
        </TableRow>
        <TableRow>
          <TableD>09/11/01</TableD>
          <TableD>Black people died due to hunger</TableD>
          <TableD>Twitter</TableD>
          <TableD>Elon Musk</TableD>
        </TableRow>
        <TableRow>
          <TableD>09/11/01</TableD>
          <TableD>Black people died due to hunger</TableD>
          <TableD>Twitter</TableD>
          <TableD>Elon Musk</TableD>
        </TableRow>
        <TableRow>
          <TableD>09/11/01</TableD>
          <TableD>Black people died due to hunger</TableD>
          <TableD>Twitter</TableD>
          <TableD>Elon Musk</TableD>
        </TableRow>
        <TableRow>
          <TableD>09/11/01</TableD>
          <TableD>Black people died due to hunger</TableD>
          <TableD>Twitter</TableD>
          <TableD>Elon Musk</TableD>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default NewsList