export function getNumbers(params) {
  return new Promise(async(resolve) =>{
    const response = await fetch(`http://localhost:8000/numbers?${params}`)
    const data = await response.json()
    resolve({data})
  })
}
