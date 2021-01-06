// Core
import nc from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'

// Data
import { chartData } from '../../data/chartData'

const handler = nc<NextApiRequest, NextApiResponse>()
  .get((req, res) => {
    res.json({ chartData });
  })

export default handler