class VisitSerializer {
  static getSummary(visit) {
    const allowedAttributes = [
      'id', 'date', 'awayTeam', 'homeTeam', 'ballparkRating', 'userId', 'stadiumId'
    ]
    const serializedVisit = {}

    for (const attribute of allowedAttributes) {
      serializedVisit[attribute] = visit[attribute]
    }

    return serializedVisit
  }
}

export default VisitSerializer