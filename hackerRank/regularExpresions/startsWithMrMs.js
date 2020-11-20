const regex = (string) => {
    let re = /(^Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]*[a-zA-Z]$/g
    // let re = /^[MDE][rs].rs[a-zA-Z]*?[a-z]/g
    console.log(re.test(string));

    return string.match(re);
}

const result = regex('Mrs.Dr.');

console.log(result);

const btn = document.createElement('button');