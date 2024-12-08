import dayjs from 'dayjs'

export function shouldBeAdministeredToday(weekDays: { week_day: number }[]) {
  const today = dayjs()

  const daysOfTheWeek = weekDays.map((weekDay) => {
    return weekDay.week_day
  })

  return daysOfTheWeek.includes(today.get('day'))
}
