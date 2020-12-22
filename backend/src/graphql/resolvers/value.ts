// Dependencies
import { Op } from 'sequelize'

// Interface
import {
  iValue,
  iCreateOrUpdateValueInput,
  iValueInput,
  iModels
} from '../../interfaces'

export default {
  Mutation: {
    createValues: async (
      _: any,
      { input }: { input: iCreateOrUpdateValueInput[] },
      { models }: { models: iModels }
    ): Promise<iValue[]> => {
      const insertedValues = await models.Value.builCreate(input)

      return insertedValues
    }
  },
  findUniqueValues: async (
    _: any,
    { input }: { input: iValueInput[] },
    { models }: { models: iModels }
  ): Promise<any> => {
    const data = await models.Value.findAll({
      where: {
        [Op.or]: input
      }
    })

    return data
  }
}
