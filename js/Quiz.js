class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide;
    //write code to change the background color here
   background("yellow");
    //write code to show a heading for showing the result of Quiz
   text("Results of the Quiz", 300,50);
   textSize(100);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();


    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      for(var plr in allContestants){
        if( plr === "contestant" + contestant.index)
        fill("green");
        else
        fill("red");
        
        var display_position =130;
        display_position+=20;
        textSize(15);
        text(allContestants[plr].name + ":" + allContestants[plr].answer,300, display_position)
      }
      
    }
    //write code to add a note here
      fill("blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green color!", 130, 230);
    //write code to highlight contest who answered correctly
   for(var plr in allContestants){
      var correctAns = "2";
      if("contestant" === allContestants[plr].answer)
      fill("red")
      else 
      fill("green");
  }
   
  }

}

