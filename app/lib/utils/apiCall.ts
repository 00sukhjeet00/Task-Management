export const apiCall=async(endPoint:string,_headers?:object,_body?:object)=>{
    return await fetch(endPoint,{
        headers:{
        "Content-Type": "application/json",
        ..._headers
      },
      body:JSON.stringify(_body)
    })
}