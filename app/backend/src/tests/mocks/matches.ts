export const matches = [
  {
    "id": 45,
    "homeTeamId": 5,
    "homeTeamGoals": 1,
    "awayTeamId": 3,
    "awayTeamGoals": 1,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Cruzeiro"
    },
    "awayTeam": {
      "teamName": "Botafogo"
    }
  },
  {
    "id": 1,
    "homeTeamId": 16,
    "homeTeamGoals": 1,
    "awayTeamId": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
  },
]

export const newMatch =  {
  "homeTeamId": 16,
  "awayTeamId": 8,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2,
}

export const equalTeams =  {
  "homeTeamId": 16,
  "awayTeamId": 16,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2,
}

export const unexistingTeam =  {
  "homeTeamId": 160,
  "awayTeamId": 16,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2,
}

export const teamsById = [
  { id: 8, teamName: 'Grêmio' },
  { id: 16, teamName: 'São Paulo' }
]

export const newMatchBody = {
  "id": 49,
  "awayTeamGoals": 2,
  "awayTeamId": 8,
  "homeTeamGoals": 2,
  "homeTeamId": 16,
  "inProgress": true
}