import { Settings } from './settings.model'
import { ISettings } from './settings.interface'

export const getSettings = async (): Promise<ISettings | null> => {
  return Settings.findOne()
}

export const updateSettings = async (
  data: Partial<ISettings> | { 'footer.logo': string }
): Promise<ISettings | null> => {
  // If updating only footer.logo, use $set
  if ('footer.logo' in data) {
    return Settings.findOneAndUpdate(
      {},
      { $set: { 'footer.logo': data['footer.logo'] } },
      { new: true, upsert: true }
    )
  }
  return Settings.findOneAndUpdate({}, data, { new: true, upsert: true })
}
