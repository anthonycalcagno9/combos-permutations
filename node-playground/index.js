function main() {

  let array = [1,2,3]

  let result = combinations(array)

  console.log("resulting combinations = ", result)

  let result2 = permutations(array)

  console.log("resulting permuations = ", result2)
}

//time O(n x 2^n)
function combinations(arr) {
    const result = []
    result.push([]) //includes empty set if you want that in your solution

    function backtrack(start, combo) {
        if (combo.length > 0) {
            result.push([...combo])
        }

        for (let i = start; i < arr.length; i++) {
            combo.push(arr[i])     //choose
            backtrack(i + 1, combo) //explore
            combo.pop()           //un-choose (backtrack)
        }
    }

    backtrack(0, [])
    return result
}

//time O(n x n!) pretty much as bad as you can get
function permutations(arr) {
    const result = []

    function backtrack(current, remaining) {
        if (remaining.length === 0) {
            result.push([...current]) // save one complete permutation
            return
        }

        for (let i = 0; i < remaining.length; i++) {
            current.push(remaining[i])
            const nextRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)]
            backtrack(current, nextRemaining)
            current.pop() //undo choice
        }
    }

    backtrack([], arr)
    return result
}

main();