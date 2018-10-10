function testWhile(){

  do{
    phrase = prompt('Inserez une phrase contenant un p');
  }while (phrase.indexOf('p') == -1)

  alert(phrase);
}