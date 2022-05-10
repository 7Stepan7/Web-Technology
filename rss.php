<?php
   $tek=$_GET["tek"];
   $rss = simplexml_load_file("https://www.9tv.co.il/rss/mainfeed");      
   $s=0;
   foreach ($rss->channel->item as $item) {
       $s++;
       echo "<h3>".$item->title."</h3>";
       echo '<p>'.$item->description.'</p>'; 
       echo "<img src=\"". (string)$item->enclosure['url'][0]. "\"></div><br>";
       if($s==$tek) {
          break;
         }
   }
?>