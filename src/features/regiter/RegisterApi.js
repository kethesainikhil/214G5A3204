export function registerAccount(userData) {
  return new Promise(async(resolve) =>{
    const response = await fetch('http://20.244.56.144/train/register',{
      method:"POST",
      body:JSON.stringify(userData),
      headers:{'content-type':'application/json'}
    });
    const data = await response.json()
    resolve({data})
  })
}
