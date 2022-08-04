import React from "react"

const Input: React.FC<{ input: number, handleInputChange: any, numInputRef: any }> = ({ input, handleInputChange, numInputRef }) => {

    let ending = 'th'

    let stringInput = input.toString().split('')
    let lastDigit = Number(stringInput[stringInput.length - 1])
    let secondLastDigit = Number(stringInput[stringInput.length - 2])

    switch (lastDigit) {
        case 3:
            ending = 'rd'
            break
        case 2:
            ending = 'nd'
            break
        case 1:
            ending = 'st'
            break
        default:
            ending = 'th'
            break
    }

    switch(secondLastDigit+lastDigit){
        case 2:
        case 3:
        case 4:
            ending = 'th'
            break
    }

    function fibonacci(num: number): any {
        if (num <= 2) return 1
        return fibonacci(num - 1) + fibonacci(num - 2)
    }

    function fib(num: number, memo: { [key: string]: any } = {}): any { 
        if (memo[num] !== undefined) return memo[num]
        if (num <= 2) return 1
        let res = fib(num - 1, memo) + fib(num - 2, memo)
        memo[num] = res
        return res
    }

    const result = fib(input)

    return (
        <div className='input-container'>
            <input
                className='num-input'
                type='number'
                min='0'
                max='99'
                step='1'
                value={input ? input : ''}
                placeholder='0'
                ref={numInputRef}
                onChange={handleInputChange} />
            <div className='input-ending'>{ending}</div>
            <div className='divider'>:</div>
            <div className='result'>{result}</div>
        </div>
    )
}

export default Input;
