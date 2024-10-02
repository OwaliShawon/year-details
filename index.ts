export function yearDetails(
  year: number
): { monthName: string; startDate: Date; endDate: Date }[] {
  const finalResponse: { monthName: string; startDate: Date; endDate: Date }[] =
    [];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  for (let i = 0; i < 12; i++) {
    const startDate = new Date(year, i, 1);
    const endDate = new Date(year, i + 1, 0);
    finalResponse.push({ monthName: monthNames[i], startDate, endDate });
  }

  return finalResponse;
}
