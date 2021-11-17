import express from 'express'
import { createCardType, getCardByTypeAndId, getOneCardType, getAllCardTypes, updateCardType, deleteCardType } from '@src/controllers/card.controller'
import { protect } from '@src/middlewares/auth.middleware'

const router = express.Router()

router.route('/card')
  .post(protect, createCardType)
  .put(protect, updateCardType)
//.delete(protect, deleteCardType)
router.route('/cards').get(getAllCardTypes)
router.route('/:cardType').get(getOneCardType)
router.route('/:cardType/:_id').get(getCardByTypeAndId)

export const cardTypeRoutes = router