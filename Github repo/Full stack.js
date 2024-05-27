function fullStack(frontendDevs, backendDevs) {
    
    let frontendList = frontendDevs.split(';');
    let backendList = backendDevs.split(';');

    let frontendSet = new Set(frontendList);
    let backendSet = new Set(backendList);

    let fullStackDevs = [...frontendSet].filter(dev => backendSet.has(dev));

    fullStackDevs.sort();

    return fullStackDevs;
}

console.log(fullStack('Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto', 'Riz Otto;Rabsz Olga;Trab Antal;Koaxk Abel;Winch Eszter'));

console.log(fullStack('Citad Ella;Techno Kolos', 'Git Aron;Teask Anna'));
