/*    TODO: Generate all functions automagically 
 *  1. divisible by x
 *  2. last digit is x
 *  3. number includes x
 *  4. sum/difference of digits is x
 *
 */
export const getRuleFunctions = (seed,numOfFuns)=>{
  let allFuns = []

  // allFuns.push((num)=>num%2==0)
  // allFuns.push((num)=>num%2!=0)

  //ends in number
  for (let n = 0; n < 10; n++) {
    allFuns.push((num)=>num%10==n)
  }
  //starts with number 
  for (let n = 0; n < 10; n++) {
    allFuns.push((num)=>{
      let strNum = num.toString()
      return strNum[0]==n
    })
  }
  //includes number
  for (let n = 0; n < 10; n++) {
    allFuns.push((num)=>{
      let strNum = num.toString()
      return strNum.includes(n)
    })
  } 
  //sum of number
  for (let n = 0; n < 10; n++) {
    allFuns.push((num)=>{
      let strNum = num.toString()
      if(strNum.length===1) return strNum[0]==n
      return strNum[0]+strNum[1]==n
    })
  }
  //difference of number
  for (let n = 0; n < 10; n++) {
    allFuns.push((num)=>{
      let strNum = num.toString()
      if(strNum.length===1) return strNum[0]==n
      return Math.abs(strNum[0]-strNum[1])==n
    })
  }
  //number is prime This is way too complicated and I think its just going to throw people off
  // for (let n = 0; n < 10; n++) {
  //   allFuns.push((num)=>{
  //     const primeLookup = [true,false,true,true,false,true,false,true,false,false,false,true,false,true,false,false,false,true,false,true,false,false,false,true,false,false,false,false,false,true,false,true,false,false,false,false,false,true,false,false,false,true,false,true,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,true,false,true,false,false,false,false,false,true,false,false,false,true,false,true,false,false,false,false,false,true,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false]
  //     return primeLookup[num]
  //   })
  // }
  
  let final = []
  for (let i = 0; i < numOfFuns; i++) {
    final.push(allFuns[Math.floor(seed*(i+1)*1654)%allFuns.length])
  }
  return final
}