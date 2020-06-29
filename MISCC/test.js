const memo = {};
    const names = ['Alex', 'Charlie', 'Dolores', 'May', 'Alex', 'Claire', 'Dolores', 'Claire',  'Alex']
    for(let i = 0; i < names.length; i++){
        let name = names[i];
        memo[name] = i;
    }
