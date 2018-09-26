friends = ['Taryn', 'Timon', 'Alicia', 'Akeia', 'Robert'];
weapons = ['knife', 'rubber-duckey', 'iPhone', 'skeleton key', 'extension cord',
            'pistol', 'shotgun', 'musket', 'cannon', 'atomic bomb',
            'baby rattle', 'rabid dog', 'machete', 'guillotine', 'sword',
            'arsenic', 'bow & arrow', 'voodoo potion', 'defibrillator', 'taser'];
locations = ['wine cellar', 'bathroom', 'attic', 'basement', 'nursery',
            'utility closet', 'shed', 'Oval Office', 'State Capitol', 'kitchen'];
            
            
var container = document.createElement('div');
document.body.appendChild(container);
    
for( var i = 1; i < 101; i++) {
    var h3 = document.createElement('h3');
    var text = document.createTextNode('Accusation ' + (i));
    h3.appendChild(text);
    

    function Murderer() {
         
        h3.setAttribute('id', i);
        console.log(h3);
        
        var friend = friends[Math.floor(Math.random()*friends.length)];
        var location = locations[Math.floor(Math.random()*locations.length)];
        var weapon = weapons[Math.floor(Math.random()*weapons.length)];

        return function() {
                alert(`I accuse ${friend}, with the ${weapon} in the ${location}`);
        };

    };

    container.appendChild(h3);
    // document.getElementById(`${i}`)
    h3.addEventListener('click', Murderer());

};