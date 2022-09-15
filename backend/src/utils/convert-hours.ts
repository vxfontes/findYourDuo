
export function convertHourStringToMinuts(hourString: string) {
    const [horas, minutos] = hourString.split(':').map(Number)

    const minutesAmount = (horas * 60) + minutos;

    return minutesAmount;
}