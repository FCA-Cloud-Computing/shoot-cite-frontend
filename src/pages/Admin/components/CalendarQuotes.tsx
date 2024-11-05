import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export function CalendarQuotes() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border w-fit"
    />
  )
}
