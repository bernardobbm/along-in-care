import AsyncStorage from '@react-native-async-storage/async-storage'
import { CaregiverDTO } from '../dtos/CaregiverDTO'
import { CAREGIVER_STORAGE } from './storageConfig'

export async function storageCaregiverSave(caregiver: CaregiverDTO) {
  await AsyncStorage.setItem(CAREGIVER_STORAGE, JSON.stringify(caregiver))
}

export async function storageCaregiverUpdateInfo(
  caregiver: Partial<CaregiverDTO>,
) {
  const storage = await AsyncStorage.getItem(CAREGIVER_STORAGE)

  const caregiverStored: CaregiverDTO = storage ? JSON.parse(storage) : {}

  const updatedCaregiverToStore: CaregiverDTO = {
    name: caregiver.name || caregiverStored.name,
    email: caregiver.email || caregiverStored.email,
    patient: caregiver.patient || caregiverStored.patient,
  }

  await storageCaregiverSave(updatedCaregiverToStore)
}

export async function storageCaregiverGet() {
  const storage = await AsyncStorage.getItem(CAREGIVER_STORAGE)

  const caregiver: CaregiverDTO = storage ? JSON.parse(storage) : {}

  return caregiver
}

export async function storageCaregiverRemove() {
  await AsyncStorage.removeItem(CAREGIVER_STORAGE)
}
