<?php



   $data = array();
   
   if(isset($_POST['lat']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH'])) {
   
   $lat=$_POST['lat'];
   $lon=$_POST['lon'];

   $result = array('status'=>'Error','msg'=>'Invalid parameters');

 $appid='49a090f8fd32a555bd97635debc34855';
 $url ='https://api.openweathermap.org/data/2.5/weather?';
// your code to sanitize and assign (Ajax) post variables to your PHP variables
// if invalid:   exit(json_encode($result));

// make API request with $api_key
$request = $url . 'lat=' . $lat.'&lon=' . $lon . '&appid=' . $appid;
 $ch = curl_init($request);  
curl_setopt($ch,CURLOPT_FAILONERROR, TRUE);  // identify as error if http status code >= 400
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);  // returns as string
$api_response = curl_exec($ch);
if(curl_errno($ch) || curl_getinfo($ch, CURLINFO_HTTP_CODE) != 200 ) :
    $result['msg'] = 'Item not found or unable to get data. ' . curl_error($ch);
    curl_close($ch);
    exit(json_encode($result));
endif;
curl_close($ch);
$decodedData = json_decode($api_response, true);
// check for success and do any server side manipulation of $decodedData


$result = $decodedData; 

   
   
   echo json_encode($result);  
   die();      
    }
 ?>