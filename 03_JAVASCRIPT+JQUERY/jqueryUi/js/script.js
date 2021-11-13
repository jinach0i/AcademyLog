$(function(){
    $( "#location" ).selectmenu();


    //--------------------------------

    var availableTags = [
        "html",
        "css",
        "photoshop",
        "Java",
        "JavaScript"
      ];
      $( "#category" ).autocomplete({
        source: availableTags
      });

      $( "#experience" ).spinner({
        min: 0,
        max: 50,
        step: 2
      })

      //----------------------
      $( "#startDate" ).datepicker({
        minDate: new Date(),
        maxDate: "+2w"
      });
      //시작하자 마자 날짜가 바로 적용되었으면 할때 setDate
      $( "#startDate" ).datepicker( "setDate", new Date() );

      //-------------------------
      $( "input[type='radio']" ).checkboxradio();

      //---------------------------
      $( "#submit" ).button({
        disabled: true
      });


      //-------------------------
      $( "#progress" ).progressbar({
            value: 0
      });

      $('input').change(function(){
        updateProgress();
      });
      updateProgress();
      function updateProgress(){
        var progress=0,
            itemCount=5,
            itemCompleted=0;
        var location=$('#location option:selected').val();
        var category=$('#category').val();
        var experience=$('#experience').val();
        var startDate=$('#startDate').val();
        var referrer=$('input[type="radio"]:checked').val();

        if(location) itemCompleted++;
        if(category) itemCompleted++;
        if(experience) itemCompleted++;
        if(startDate) itemCompleted++;
        if(referrer) itemCompleted++;

        progress=itemCompleted/itemCount * 100;
        $('#progress').progressbar("option", "value", progress);
        $('.pct span').text( progress);
        if(progress==100){
            $('#submit').button({
                disabled:false
            });
        }
      }
});