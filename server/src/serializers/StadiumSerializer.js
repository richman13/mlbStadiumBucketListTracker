import VisitSerializer from "./VisitSerializer"

class StadiumSerializer {
  static getDetails(stadium, currentUserId) {
    const allowedAttributes = ['id', 'name', 'city', 'homeTeam', 'capacity']
    const serializedStadium = {}

    for (const attribute of allowedAttributes) {
      serializedStadium[attribute] = stadium[attribute]
    }

    serializedStadium.visits = await stadium.$relatedQueary('visits')
    serializedStadium.visits = await Promise.all(serializedStadium.visits.map(visit => {
      return VisitSerializer.getDetails(visit, currentUserId)
    }))

    return serializedStadium
  }
}

export default StadiumSerializer