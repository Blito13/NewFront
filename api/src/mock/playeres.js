const players =[
    { apuesta: 50, numero: '37580', nombre: 'Player0' },
    { apuesta: 80, numero: '44348', nombre: 'Player1' },
    { apuesta: 65, numero: '71930', nombre: 'Player2' },
    { apuesta: 45, numero: '10211', nombre: 'Player3' },
    { apuesta: 95, numero: '55666', nombre: 'Player4' },
    { apuesta: 55, numero: '60414', nombre: 'Player5' },
    { apuesta: 60, numero: '29730', nombre: 'Player6' },
    { apuesta: 40, numero: '65930', nombre: 'Player7' },
    { apuesta: 85, numero: '83342', nombre: 'Player8' },
    { apuesta: 70, numero: '330', nombre: 'Player9' },
    { apuesta: 75, numero: '99827', nombre: 'Player10' },
    { apuesta: 90, numero: '83615', nombre: 'Player11' },
    { apuesta: 83, numero: '20618', nombre: 'Player12' },
    { apuesta: 68, numero: '01234', nombre: 'Player13' },
    { apuesta: 74, numero: '81112', nombre: 'Player14' },
    { apuesta: 89, numero: '69239', nombre: 'Player15' },
    { apuesta: 66, numero: '38593', nombre: 'Player16' },
    { apuesta: 59, numero: '73191', nombre: 'Player17' },
    { apuesta: 72, numero: '94955', nombre: 'Player18' },
    { apuesta: 80, numero: '11129', nombre: 'Player19' }
  ]
  const dbPlayersMock= [
    {
      bet: 50,
      numbers: [ 3, 7, 5, 8, 0 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 80,
      numbers: [ 4, 4, 3, 4, 8 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 65,
      numbers: [ 7, 1, 9, 3, 0 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 45,
      numbers: [ 1, 0, 2, 1, 1 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 95,
      numbers: [ 5, 5, 6, 6, 6 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 55,
      numbers: [ 6, 0, 4, 1, 4 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 60,
      numbers: [ 2, 9, 7, 3, 0 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 40,
      numbers: [ 6, 5, 9, 3, 0 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 85,
      numbers: [ 8, 3, 3, 4, 2 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 70,
      numbers: [ NaN, NaN, 3, 3, 0 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 75,
      numbers: [ 9, 9, 8, 2, 7 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 90,
      numbers: [ 8, 3, 6, 1, 5 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 83,
      numbers: [ 2, 0, 6, 1, 8 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 68,
      numbers: [ 0, 1, 2, 3, 4 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 74,
      numbers: [ 8, 1, 1, 1, 2 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 89,
      numbers: [ 6, 9, 2, 3, 9 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 66,
      numbers: [ 3, 8, 5, 9, 3 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 59,
      numbers: [ 7, 3, 1, 9, 1 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 72,
      numbers: [ 9, 4, 9, 5, 5 ],
      name: undefined,
      id: undefined
    },
    {
      bet: 80,
      numbers: [ 1, 1, 1, 2, 9 ],
      name: undefined,
      id: undefined
    }
  ]
module.exports= {
  players,
  dbPlayersMock
};
