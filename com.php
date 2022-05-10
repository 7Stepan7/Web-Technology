<?php
$xml = simplexml_load_file("comment.xml");
$tek = count($xml->comments);
$s=0;
for($i = 0; $i <= $tek; $i++){
$s++;
echo("<br><div class='news'>");
       echo "ФИО, факультет и группа : ".$xml->comments[$i]->name . "<br>";
       echo "Почта: ".$xml->comments[$i]->email . "<br>";
       echo "Отзыв: ".$xml->comments[$i]->comment . "<br></div>";
       if($s==$tek){
               break;}
        }
?>