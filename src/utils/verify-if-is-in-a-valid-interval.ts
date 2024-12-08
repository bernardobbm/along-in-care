import dayjs from 'dayjs'

export function verifyIfIsInAValidInterval(
  startsAt: Date | string,
  endsAt?: Date | string,
) {
  const today = dayjs().subtract(-dayjs().utcOffset(), 'minute')

  if (!endsAt) {
    return today.utc().isAfter(startsAt)
  }

  return today.isAfter(startsAt) && today.utc().isBefore(endsAt)
}
