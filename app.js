const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
let primeArray = []
  for(i=0; i<numbers.length; i++){
    count = 0;
    for(j=2; j<numbers[i]; j++){
        if(numbers[i]%j==0){
            count++;
        }
    }
    if(count==0){
        primeArray.push(numbers[i])
    }
  }
  console.log(primeArray);

  let min = primeArray[0]
  for(i=0; i<primeArray.lenght; i++){
    if(min>primeArray[i])
        min = primeArray[i];
  }

  let max = primeArray[0]
  for(i=0; i<primeArray.length; i++){
    if(max<primeArray[i])
        max = primeArray[i];
  }

  let sum = 0
  for(i=0; i<primeArray.length; i++){
    sum = sum + primeArray[i];
  }

  console.log("Minimum:", min);
  console.log("Maximum:", max);
  console.log("Sum:", sum);

