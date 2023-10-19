/**
 * Funkcja generuje w pliku html tabelę o wymiarach przyjętych jako argumenty.
 * 
 * @author Jakub Figiel
 * @param {number} min_row Liczba od której rozpocznie sie rząd tabliczki mnożenia, domyślnie 1
 * @param {number} max_row Liczba na któej zakończy się rzą tabliczki mnożenia, domyślnie 10
 * @param {number} min_column Liczba od której rozpocznie się kolumna tabliczki mnożenia, domyślnie 1
 * @param {number} max_column Liczba na której zakończy się kolumna tabliczki mnożenia, domyślnie 10
 * @version 0.0.1
 * Przykłady użycia
 * tabliczka(1, 5, 1, 10)
 * tabliczka(-5, 8, -3, -1)
 */
function tabliczka(min_row=1, max_row=10, min_column=1, max_column=10){
    /** If sprawdza, czy pola z forumlarza są puste, jeżeli tak to nadaje im domyślne wartości */
    min_row = parseInt(min_row);
    max_row = parseInt(max_row);
    min_column = parseInt(min_column);
    max_column = parseInt(max_column);
    if (min_row=="" || max_row=="" || min_column=="" || max_column==""){
        min_row=1;
        max_row=10;
        min_column=1;
        max_column=10;
    }
    
    /** If sprawdza, czy wartośći minimalne na pewno są mniejsze niż maksymalne, jeżeli nie to pokazuje błąd */
    if ((min_row < max_row) && (min_column < max_column)){
    if((max_row-min_row > 200) || (max_column-min_column > 200)){
        document.write("zbyt duze wartosci");
        console.log("zbyt duze wartosci");
    }
    var table;
    table='<table id="tab1">';
    table+='<tr>';
    table+='<td></td>';
    /** Petla for dostawia dodatkowy rząd na górze tabeli, jako informacja co przez co mnożmy */
    for(i=min_column;i<=max_column;i++){
        table+='<td class="top">'+i+'</td>';
    }
    table+='</tr>';
    /** Dwie pętle for odpowiadają za przechodzenie przez wiersze i kolumny tabeli i dostawianie komórek */
    for(i=min_row;i<=max_row;i++){
        table+='<td class="left">'+i+'</td';
        table+='<tr>';
        for(j=min_column;j<=max_column;j++){
            
            table+='<td>'+j*i+'</td>';
        }
        table+='</tr>';
    }
    
    table+='</table>';
    document.getElementById("result").innerHTML = table;
}else{
    document.write("nieprawidlowe argumenty")
    console.log("nieprawidlowe argumenty")
}}

