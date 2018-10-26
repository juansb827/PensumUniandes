function init(){
    var state = {
        numSemesters: 0,
        semesters: {},
        itemsPerRow: 3 //semestres por fila
    }

    function toggleElement(elementId){

        var shown = state.semesters[elementId];
            shown = !shown;
            state.semesters[elementId] = shown;  
            $('.semester-container .semester-courses').hide();
        
    }
     
    /** Togglea un semestre y los que esten en la misma fila */
    function toggleItemWithRow(itemIndex){
        
        var itemsPerRow = 1;
        var rowIndex = Math.floor(itemIndex / itemsPerRow);
        
        var firstOfRow = rowIndex * itemsPerRow; //indice del primer elemento de la fila
        var lastOfRow = firstOfRow + (itemsPerRow -1); //indice del ultimo elemento de la fila
        
        var children = $('.semester-container .semester-courses');
        
        var lastIndex = Math.min(children.length -1 , lastOfRow); //si la ultima fila no esta completa, LastOfRow > children.length
        console.log("E", firstOfRow, lastIndex);
        for(var i = firstOfRow; i<= lastIndex; i++){
            $(children[i]).hide();
        }
        
    }


       
    $(document).ready(function(){

        const numSemesters = $('.pensum .semester-container').length;
        state.numSemesters = numSemesters;


        $('.semester-container .semester-courses')
       
        $('.pensum').on('click', '.semester-header',  function(e) {
            var semesterIdx= $(this).index(".semester-header");
            toggleItemWithRow(semesterIdx);                        
        });
     
     });
}
init();
