import moment from 'moment'
moment.locale('pt-br') // resposta do exercicio 2 b: para Londres usaria (bst)

type event = {
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
}

const allEvents: event[] = [
    {
        name: "Fire",
        description: "Uma grande festa. Não poderei perder",
        startAt: moment("05/01/2021 18:00", "DD/MM/YYYY HH:mm"),
        finishAt: moment("05/01/2021 23:00", "DD/MM/YYYY HH:mm")
    },
    {
        name: "Vacinar gata",
        description: "Levar a gata para vacinar",
        startAt: moment("10/10/2020 10:00", "DD/MM/YYYY HH:mm"),
        finishAt: moment("10/10/2020 11:00", "DD/MM/YYYY HH:mm")
    },
]

const showAllEvents = (events: event[]): void => {
    events.forEach((item: event) => {
        const duration: number = item.finishAt.diff(item.startAt, "minutes")

        const today: moment.Moment = moment()
        const daysUntilEvent: number = item.startAt.diff(today, "days")

        console.log(`
            Nome: ${item.name}
            Horário de início: ${item.startAt.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
            Horário de fim: ${item.finishAt.format("DD de MMMM de YYYY, HH:mm")}
            Descrição: ${item.description}
            Duração: ${duration} minutos
            Dias até o evento: ${daysUntilEvent}
        `)
    })
}
showAllEvents(allEvents)

const createevent = (
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
) : void => {
    if (!name || !description || !startAt || !finishAt) {
        console.log("invalid input")
        return
    }
    const diffStartAtAndToday = startAt.diff(moment(), "seconds")
    const diffFinishAtAndToday = finishAt.diff(moment(), "seconds")

    if (diffStartAtAndToday < 0 && diffFinishAtAndToday < 0) {
        console.log("a data não pode ser anterior à data atual")
        return
    }
    allEvents.push({
        name,
        description,
        startAt,
        finishAt,
    })
}















