document.addEventListener('DOMContentLoaded', function(){
    for( var i = 0; i < 100; i++) {
        var container = document.createElement('div');
        var accu = document.createElement('h3');
        var text = document.createTextNode('Accusation' + (i + 1));
        
        document.body.appendChild(container);
        accu.appendChild(text);
        container.appendChild(accu);
        document.body.getElementsByTagName('div').id = ('accu' + i);
    };
});

document.addEventListener('click', function() {
    

});