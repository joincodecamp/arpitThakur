for (i=0; i<5; i++){
  document.write("<strong>outer loop</strong>");
  document.write(i);
  document.write("<br>");
  for(j=0; j<5; j++){
    document.write("inner loop");
    document.write(j);
    document.write("<br>");
  }
}