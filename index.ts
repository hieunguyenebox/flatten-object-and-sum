
interface Data {
  value: number
  children?: Data[]
}

const data: Data = {
  value: 1,
  children: [
    {
      value: 2,
      children:
        [
          { value: 4, children: [] },
          {
            value: 5, children:
              [
                { value: 9, children: [] },
                { value: 10, children: [] },
              ]
          },
        ]
    },
    {
      value: 3, children: [
        { value: 11, children: [] },
        { value: 23, children: [] },
      ]
    },
  ],
}

const sum = (node: Data) => {

  let flatArrr: Data[] = [node]

  let i = 0
  while (flatArrr[i]?.children) {
    if (flatArrr[i].children) {
      flatArrr.push(...flatArrr[i].children)
    }
    flatArrr[i].children = null
    i++
  }

  console.log(flatArrr)

  return flatArrr.reduce((total, node) => total + node.value, 0)
}

console.log(sum(data))