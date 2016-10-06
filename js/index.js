var type_map = {
    'Grass' : '草',
    'Poison' : '毒',
    'Fire' : '火',
    'Flying' : '飛行',
    'Water' : '水',
    'Bug' : '蟲',
    'Normal' : '普通',
    'Electric' : '電',
    'Ground' : '地',
    'Fairy' : '妖精',
    'Fighting' : '格鬥',
    'Psychic' : '超能力',
    'Rock' : '岩',
    'Steel' : '鋼',
    'Ice' : '冰',
    'Ghost' : '鬼',
    'Dragon' : '龍',
    'Dark' : '惡'
}

$(document).ready(function(){

    d3.csv('pokemon.csv', function(data){

        for(i = 0; i < data.length; i++){

            temp = '<tr>';
            temp += '<td>' + data[i]['PokemonId'] + '</td>';
            temp += '<td><img src="image/pokemon/' + data[i]['PokemonId'] + '.png" ></td>';
            temp += '<td class="hidden-xs"><a href="pokemon.html?id=' + data[i]['PokemonId'] + '">' + data[i]['NameEn'] + '</a></td>';
            temp += '<td><a href="pokemon.html?id=' + data[i]['PokemonId'] + '">' + data[i]['NameTw'] + '</a></td>';
            temp += '<td>' + data[i]['Type1'] + ' ' + data[i]['Type2'] + '</td>';
            temp += '<td>' + data[i]['MaxCp'] + '</td>';
            temp += '</tr>';

            $('tbody').append(temp);
        }

        $('#pokemon-table').tablesorter({
            sortList : [[0,0]],
            headers : {
                1 : {
                    sorter : false
                }
            }
        });

    });


    console.log(123);

});
